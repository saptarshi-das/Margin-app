import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
    User,
    signInWithPopup,
    signOut as firebaseSignOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
    error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

const ALLOWED_DOMAIN = 'iimranchi.ac.in';

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // Verify the user's email domain
                const email = currentUser.email || '';
                const domain = email.split('@')[1];

                if (domain === ALLOWED_DOMAIN) {
                    setUser(currentUser);
                    setError(null);
                } else {
                    // Sign out users from unauthorized domains
                    firebaseSignOut(auth);
                    setUser(null);
                    setError(`Only ${ALLOWED_DOMAIN} email addresses are allowed.`);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signInWithGoogle = async () => {
        try {
            setError(null);
            const result = await signInWithPopup(auth, googleProvider);

            // Double-check domain after sign in
            const email = result.user.email || '';
            const domain = email.split('@')[1];

            if (domain !== ALLOWED_DOMAIN) {
                await firebaseSignOut(auth);
                throw new Error(`Only ${ALLOWED_DOMAIN} email addresses are allowed.`);
            }
        } catch (err: any) {
            console.error('Sign in error:', err);

            // Handle specific error cases
            if (err.code === 'auth/popup-closed-by-user') {
                setError('Sign in was cancelled.');
            } else if (err.code === 'auth/popup-blocked') {
                setError('Pop-up was blocked. Please allow pop-ups for this site.');
            } else {
                setError(err.message || 'Failed to sign in with Google.');
            }
            throw err;
        }
    };

    const signOut = async () => {
        try {
            await firebaseSignOut(auth);
            setError(null);
        } catch (err: any) {
            console.error('Sign out error:', err);
            setError('Failed to sign out.');
            throw err;
        }
    };

    const value = {
        user,
        loading,
        signInWithGoogle,
        signOut,
        error,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
