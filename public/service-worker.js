const CACHE_NAME = 'margin-app-v2'; // Updated for database implementation
const urlsToCache = [
  '/'
  // Vite handles bundling, so we'll use a network-first strategy
  // rather than pre-caching specific asset files
];

self.addEventListener('install', (event) => {
  // Skip waiting to activate immediately
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch((error) => {
        console.log('Cache failed:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Only cache GET requests (skip POST/PUT/DELETE from Firestore)
  // This prevents "Request method 'POST' is unsupported" errors
  if (event.request.method !== 'GET') {
    return; // Don't handle non-GET requests
  }

  // Skip caching for Firebase/Firestore API calls
  const url = new URL(event.request.url);
  if (url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('firebase.google.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('firestore.googleapis.com')) {
    return; // Let Firestore handle its own caching
  }

  // Network-first strategy: try network, fall back to cache
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // If network fails, try cache
        return caches.match(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  // Take control of all pages immediately
  event.waitUntil(
    Promise.all([
      clients.claim(),
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});
