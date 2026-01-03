/**
 * Utility functions for logging database operations
 * Helps with debugging and monitoring sync status
 */

export const DBLogger = {
    /**
     * Log levels with emojis for better visibility
     */
    LEVEL: {
        INFO: '📘',
        SUCCESS: '✅',
        WARNING: '⚠️',
        ERROR: '❌',
        NETWORK: '📡',
        OFFLINE: '📴',
        SYNC: '🔄',
        LOCAL: '💾',
        REALTIME: '🔔'
    },

    /**
     * Format log message with timestamp
     */
    format(level: string, message: string, data?: any) {
        const timestamp = new Date().toLocaleTimeString();
        const logMessage = `[${timestamp}] ${level} ${message}`;

        if (data) {
            console.log(logMessage, data);
        } else {
            console.log(logMessage);
        }
    },

    /**
     * Log info message
     */
    info(message: string, data?: any) {
        this.format(this.LEVEL.INFO, message, data);
    },

    /**
     * Log success message
     */
    success(message: string, data?: any) {
        this.format(this.LEVEL.SUCCESS, message, data);
    },

    /**
     * Log warning message
     */
    warning(message: string, data?: any) {
        this.format(this.LEVEL.WARNING, message, data);
    },

    /**
     * Log error message
     */
    error(message: string, error?: any) {
        this.format(this.LEVEL.ERROR, message, error);
        if (error instanceof Error) {
            console.error(error);
        }
    },

    /**
     * Log network-related message
     */
    network(message: string, data?: any) {
        this.format(this.LEVEL.NETWORK, message, data);
    },

    /**
     * Log offline-related message
     */
    offline(message: string, data?: any) {
        this.format(this.LEVEL.OFFLINE, message, data);
    },

    /**
     * Log sync-related message
     */
    sync(message: string, data?: any) {
        this.format(this.LEVEL.SYNC, message, data);
    },

    /**
     * Log localStorage-related message
     */
    local(message: string, data?: any) {
        this.format(this.LEVEL.LOCAL, message, data);
    },

    /**
     * Log real-time update message
     */
    realtime(message: string, data?: any) {
        this.format(this.LEVEL.REALTIME, message, data);
    }
};

/**
 * Get database statistics
 */
export function getDatabaseStats() {
    const courses = localStorage.getItem('courses');
    const lastSync = localStorage.getItem('lastSync');

    const stats = {
        isOnline: navigator.onLine,
        coursesCount: courses ? JSON.parse(courses).length : 0,
        localStorageSize: courses ? new Blob([courses]).size : 0,
        lastSyncTime: lastSync ? new Date(parseInt(lastSync)).toLocaleString() : 'Never',
        lastSyncAgo: lastSync ? Date.now() - parseInt(lastSync) : null
    };

    console.table(stats);
    return stats;
}

/**
 * Clear all local data (for debugging)
 */
export function clearLocalData() {
    const confirmed = confirm('⚠️ This will clear ALL local course data. Continue?');
    if (confirmed) {
        localStorage.removeItem('courses');
        localStorage.removeItem('lastSync');
        DBLogger.warning('Local data cleared. Please refresh the page.');
        console.log('💡 Tip: Data will be restored from Firestore when you refresh.');
    }
}

/**
 * Export helpers to window for debugging in console
 */
if (typeof window !== 'undefined') {
    (window as any).dbStats = getDatabaseStats;
    (window as any).dbClear = clearLocalData;
    (window as any).DBLogger = DBLogger;

    console.log('🔧 Debug tools available:');
    console.log('  - dbStats() - View database statistics');
    console.log('  - dbClear() - Clear local data');
    console.log('  - DBLogger - Logging utility');
}
