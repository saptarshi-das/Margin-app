import {
    collection,
    doc,
    setDoc,
    getDoc,
    onSnapshot,
    deleteDoc,
    updateDoc,
    Timestamp
} from 'firebase/firestore';
import { db } from './config';

export interface Course {
    id: string;
    name: string;
    shortName?: string;
    leaves: number;
    maxLeaves: number;
    updatedAt?: number;
}

const COURSES_COLLECTION = 'userCourses';
const LOCAL_STORAGE_KEY = 'courses';
const LAST_SYNC_KEY = 'lastSync';

/**
 * Database service with network-first strategy and offline support
 * - If online: Syncs with Firestore and updates localStorage
 * - If offline: Uses localStorage immediately
 * - Automatically syncs when connection is restored
 */
export class DatabaseService {
    private userId: string;
    private unsubscribe: (() => void) | null = null;
    private isOnline: boolean = navigator.onLine;

    constructor(userId: string) {
        this.userId = userId;
        this.setupOnlineListener();
    }

    /**
     * Listen for online/offline events
     */
    private setupOnlineListener() {
        window.addEventListener('online', () => {
            this.isOnline = true;
            console.log('📡 Connection restored - syncing with server...');
            // When back online, sync local changes to server
            this.syncLocalToServer();
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            console.log('📴 Connection lost - using local storage');
        });
    }

    /**
     * Get user's document reference
     */
    private getUserDocRef() {
        return doc(db, COURSES_COLLECTION, this.userId);
    }

    /**
     * Get courses from localStorage
     */
    private getLocalCourses(): Course[] {
        try {
            const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return [];
        }
    }

    /**
     * Save courses to localStorage
     */
    private saveLocalCourses(courses: Course[]) {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(courses));
            localStorage.setItem(LAST_SYNC_KEY, Date.now().toString());
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    /**
     * Initialize and get courses (network-first strategy)
     * Returns courses immediately from localStorage, then updates from server if online
     */
    async initialize(onCoursesUpdate: (courses: Course[]) => void): Promise<Course[]> {
        // 1. Immediately return local data for fast UI rendering
        const localCourses = this.getLocalCourses();

        // 2. If offline, just return local data
        if (!this.isOnline) {
            console.log('📴 Offline - using local data');
            return localCourses;
        }

        // 3. If online, try to fetch from server
        try {
            const docRef = this.getUserDocRef();
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const serverCourses = docSnap.data().courses || [];
                const serverTimestamp = docSnap.data().updatedAt?.toMillis() || 0;
                const localTimestamp = parseInt(localStorage.getItem(LAST_SYNC_KEY) || '0');

                // Use server data if it's newer
                if (serverTimestamp >= localTimestamp) {
                    console.log('📡 Using server data (newer)');
                    this.saveLocalCourses(serverCourses);
                    onCoursesUpdate(serverCourses);

                    // Set up real-time listener
                    this.setupRealtimeListener(onCoursesUpdate);

                    return serverCourses;
                } else {
                    // Local data is newer, sync to server
                    console.log('💾 Local data is newer - syncing to server');
                    await this.saveCourses(localCourses);

                    // Set up real-time listener
                    this.setupRealtimeListener(onCoursesUpdate);

                    return localCourses;
                }
            } else {
                // No server data, upload local data if any
                if (localCourses.length > 0) {
                    console.log('🔄 Uploading local data to server');
                    await this.saveCourses(localCourses);
                }

                // Set up real-time listener
                this.setupRealtimeListener(onCoursesUpdate);

                return localCourses;
            }
        } catch (error) {
            console.error('Error fetching from server, using local data:', error);
            return localCourses;
        }
    }

    /**
     * Set up real-time listener for course changes
     */
    private setupRealtimeListener(onCoursesUpdate: (courses: Course[]) => void) {
        if (this.unsubscribe) {
            this.unsubscribe(); // Clean up existing listener
        }

        const docRef = this.getUserDocRef();
        this.unsubscribe = onSnapshot(
            docRef,
            (docSnap) => {
                if (docSnap.exists()) {
                    const courses = docSnap.data().courses || [];
                    console.log('🔔 Real-time update from server');
                    this.saveLocalCourses(courses);
                    onCoursesUpdate(courses);
                }
            },
            (error) => {
                console.error('Error in real-time listener:', error);
            }
        );
    }

    /**
     * Save courses (network-first, with offline fallback)
     */
    async saveCourses(courses: Course[]): Promise<void> {
        // Always save to localStorage first for immediate feedback
        this.saveLocalCourses(courses);

        // Try to save to server if online
        if (!this.isOnline) {
            console.log('📴 Offline - saved to local storage only');
            return;
        }

        try {
            const docRef = this.getUserDocRef();
            await setDoc(docRef, {
                courses,
                updatedAt: Timestamp.now(),
                userId: this.userId
            });
            console.log('✅ Saved to server and local storage');
        } catch (error) {
            console.error('⚠️ Failed to save to server (saved locally):', error);
            // Data is already in localStorage, so app continues to work
        }
    }

    /**
     * Sync local changes to server (called when coming back online)
     */
    private async syncLocalToServer() {
        const localCourses = this.getLocalCourses();
        if (localCourses.length > 0) {
            try {
                await this.saveCourses(localCourses);
                console.log('✅ Synced local changes to server');
            } catch (error) {
                console.error('⚠️ Failed to sync local changes:', error);
            }
        }
    }

    /**
     * Clean up listeners
     */
    cleanup() {
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
        }
    }
}

/**
 * Helper function to create a database service for a user
 */
export function createDatabaseService(userId: string): DatabaseService {
    return new DatabaseService(userId);
}
