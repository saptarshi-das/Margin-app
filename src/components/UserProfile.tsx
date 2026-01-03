import { useAuth } from '../contexts/AuthContext';
import { LogOut, User } from 'lucide-react';

interface UserProfileProps {
    isDark: boolean;
}

export const UserProfile = ({ isDark }: UserProfileProps) => {
    const { user, signOut } = useAuth();

    if (!user) return null;

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (err) {
            console.error('Sign out failed:', err);
        }
    };

    return (
        <div className={`flex items-center gap-3 p-2 rounded-xl ${isDark
                ? 'bg-white/5 hover:bg-white/10'
                : 'bg-white/50 hover:bg-white/70'
            } transition-all duration-200`}>
            {/* User Avatar */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
                {user.photoURL ? (
                    <img
                        src={user.photoURL}
                        alt={user.displayName || 'User'}
                        className="w-10 h-10 rounded-full ring-2 ring-white/20"
                    />
                ) : (
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark
                            ? 'bg-gradient-to-br from-indigo-500 to-purple-600'
                            : 'bg-gradient-to-br from-indigo-500 to-purple-600'
                        }`}>
                        <User className="w-5 h-5 text-white" />
                    </div>
                )}

                {/* User Info */}
                <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium truncate ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        {user.displayName || 'User'}
                    </p>
                    <p className={`text-xs truncate ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        {user.email}
                    </p>
                </div>
            </div>

            {/* Sign Out Button */}
            <button
                onClick={handleSignOut}
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 ${isDark
                        ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400'
                        : 'bg-red-50 hover:bg-red-100 text-red-600'
                    }`}
                title="Sign Out"
            >
                <LogOut className="w-4 h-4" />
            </button>
        </div>
    );
};
