import { useAuth } from '../contexts/AuthContext';
import { LogIn, Shield, AlertCircle } from 'lucide-react';

interface LoginPageProps {
    isDark: boolean;
}

export const LoginPage = ({ isDark }: LoginPageProps) => {
    const { signInWithGoogle, error, loading } = useAuth();

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
        } catch (err) {
            // Error is already handled in AuthContext
            console.error('Login failed:', err);
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center transition-colors ${isDark
                ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900'
                : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
            }`}>
            <div className="w-full max-w-md mx-4">
                {/* Logo/Brand Section */}
                <div className="text-center mb-8 animate-fade-in">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${isDark
                            ? 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/50'
                            : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-500/30'
                        }`}>
                        <span className="text-4xl font-bold text-white">M</span>
                    </div>
                    <h1 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                        }`}>
                        Margin
                    </h1>
                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        Maximise your Leaves
                    </p>
                </div>

                {/* Login Card */}
                <div className={`rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 ${isDark
                        ? 'bg-white/10 border border-white/20 shadow-2xl'
                        : 'bg-white/80 border border-indigo-200/50 shadow-2xl shadow-indigo-200/50'
                    }`}>
                    <div className="space-y-6">
                        {/* Title */}
                        <div className="text-center">
                            <h2 className={`text-2xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'
                                }`}>
                                Welcome Back
                            </h2>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                Sign in to access your leave tracker
                            </p>
                        </div>

                        {/* Domain Notice */}
                        <div className={`flex items-start gap-3 p-4 rounded-xl ${isDark
                                ? 'bg-indigo-500/20 border border-indigo-400/30'
                                : 'bg-indigo-50 border border-indigo-200'
                            }`}>
                            <Shield className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDark ? 'text-indigo-300' : 'text-indigo-600'
                                }`} />
                            <div>
                                <p className={`text-sm font-medium mb-1 ${isDark ? 'text-indigo-200' : 'text-indigo-900'
                                    }`}>
                                    IIM Ranchi Students Only
                                </p>
                                <p className={`text-xs ${isDark ? 'text-indigo-300/80' : 'text-indigo-700/80'
                                    }`}>
                                    Only @iimranchi.ac.in email addresses are allowed
                                </p>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className={`flex items-start gap-3 p-4 rounded-xl animate-shake ${isDark
                                    ? 'bg-red-500/20 border border-red-400/30'
                                    : 'bg-red-50 border border-red-200'
                                }`}>
                                <AlertCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isDark ? 'text-red-300' : 'text-red-600'
                                    }`} />
                                <p className={`text-sm ${isDark ? 'text-red-200' : 'text-red-700'
                                    }`}>
                                    {error}
                                </p>
                            </div>
                        )}

                        {/* Google Sign In Button */}
                        <button
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                            className={`w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${isDark
                                    ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg shadow-white/20'
                                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-xl shadow-indigo-500/30'
                                }`}
                        >
                            {loading ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                                    <span>Signing in...</span>
                                </>
                            ) : (
                                <>
                                    <LogIn className="w-5 h-5" />
                                    <span>Sign in with Google</span>
                                </>
                            )}
                        </button>

                        {/* Footer Text */}
                        <p className={`text-xs text-center ${isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                            By signing in, you agree to use this app responsibly
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 text-center">
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Track your course leaves efficiently and never miss a class
                    </p>
                </div>
            </div>
        </div>
    );
};
