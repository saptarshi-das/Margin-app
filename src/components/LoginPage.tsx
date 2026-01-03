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

    // Always use dark theme for login page
    return (
        <div className="min-h-screen flex items-center justify-center transition-colors bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <div className="w-full max-w-md mx-4">
                {/* Logo/Brand Section */}
                <div className="text-center mb-8 animate-fade-in">
                    {/* Use actual app icon */}
                    <div className="inline-flex items-center justify-center mb-4">
                        <img
                            src="/icon-192.png"
                            alt="Margin Logo"
                            className="w-20 h-20 rounded-2xl shadow-2xl shadow-[#e50914]/50"
                        />
                    </div>
                    <h1 className="text-4xl font-bold mb-2 text-white">
                        <b>Margin</b>
                    </h1>
                    <p className="text-lg text-gray-300">
                        Maximise your Leaves
                    </p>
                </div>

                {/* Login Card */}
                <div className="rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 bg-white/10 border border-white/20 shadow-2xl">
                    <div className="space-y-6">
                        {/* Title */}
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold mb-2 text-white">
                                Welcome
                            </h2>
                            <p className="text-sm text-gray-400">
                                Sign in to access your leave tracker
                            </p>
                        </div>

                        {/* Domain Notice */}
                        <div className="flex items-start gap-3 p-4 rounded-xl bg-[#e50914]/20 border border-gray-600">
                            <Shield className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#e50914]" />
                            <div>
                                <p className="text-sm font-medium mb-1 text-white">
                                    IIM Ranchi Students Only
                                </p>
                                <p className="text-xs text-gray-300">
                                    Only iimranchi.ac.in email addresses are allowed
                                </p>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="flex items-start gap-3 p-4 rounded-xl animate-shake bg-red-500/20 border border-red-400/30">
                                <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-300" />
                                <p className="text-sm text-red-200">
                                    {error}
                                </p>
                            </div>
                        )}

                        {/* Google Sign In Button */}
                        <button
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                            className="w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none bg-[#e50914] text-white hover:bg-[#f40612] shadow-xl shadow-[#e50914]/30"
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
                        <p className="text-xs text-center text-gray-400">
                            By signing in, you agree to use this app responsibly
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                        Track your course leaves efficiently so that you maximise leaves
                    </p>
                </div>
            </div>
        </div>
    );
};
