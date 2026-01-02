import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

interface PWAPromptProps {
  isDark: boolean;
}

export function PWAPrompt({ isDark }: PWAPromptProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className={`rounded-2xl shadow-lg p-4 mb-4 ${
      isDark 
        ? 'bg-gradient-to-r from-blue-900 to-indigo-900' 
        : 'bg-gradient-to-r from-blue-500 to-indigo-600'
    }`}>
      <div className="flex items-start gap-3">
        <Download className="text-white mt-1" size={24} />
        <div className="flex-1">
          <h3 className="text-white mb-1">Add to Home Screen</h3>
          <p className="text-white/80 text-sm">
            Install this app on your device for quick access
          </p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleInstall}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
            >
              Install
            </button>
            <button
              onClick={() => setShowPrompt(false)}
              className="text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors"
            >
              Later
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowPrompt(false)}
          className="text-white/70 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
