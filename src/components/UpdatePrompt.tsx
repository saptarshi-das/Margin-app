import { useState, useEffect } from 'react';
import { RefreshCw, X } from 'lucide-react';

export function UpdatePrompt() {
    const [showPrompt, setShowPrompt] = useState(false);
    const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

    useEffect(() => {
        // Check for service worker updates only when app opens
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then((reg) => {
                // Defer update check to avoid any impact on initial load
                // Runs 2 seconds after app opens (plenty of time for UI to render)
                setTimeout(() => {
                    reg.update();
                }, 2000);

                // Listen for new service worker waiting to activate
                reg.addEventListener('updatefound', () => {
                    const newWorker = reg.installing;

                    if (newWorker) {
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                // New service worker is ready!
                                setRegistration(reg);
                                setShowPrompt(true);
                            }
                        });
                    }
                });

                // Check if there's already a waiting service worker
                if (reg.waiting) {
                    setRegistration(reg);
                    setShowPrompt(true);
                }
            });

            // Listen for controller change (when new SW takes control)
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                // Reload the page to load new assets
                window.location.reload();
            });
        }
    }, []);

    const handleUpdate = () => {
        if (registration?.waiting) {
            // Tell the waiting service worker to skip waiting and become active
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            setShowPrompt(false);
        }
    };

    const handleDismiss = () => {
        setShowPrompt(false);
    };

    if (!showPrompt) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
            <div className="max-w-2xl w-full bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden animate-slideDown">
                <div className="flex items-center gap-3 px-4 py-3">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                        <RefreshCw size={18} className="text-gray-600 dark:text-gray-400" />
                    </div>

                    {/* Message */}
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            Update Available
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                            A new version of Margin is ready
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                            onClick={handleUpdate}
                            className="px-3 py-1.5 text-xs font-medium text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-md transition-colors"
                        >
                            Update
                        </button>
                        <button
                            onClick={handleDismiss}
                            className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                            aria-label="Dismiss"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
