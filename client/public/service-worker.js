// Service Worker for Jace Farms - Caching and Offline Support
const CACHE_NAME = 'jace-farms-v1';
const OFFLINE_URL = '/offline.html';

// List of assets to cache
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/src/index.css',
  '/src/App.jsx',
  // Add other critical assets here
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching app shell');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, falling back to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and chrome-extension URLs
  if (event.request.method !== 'GET' || 
      event.request.url.startsWith('chrome-extension')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }

        // For navigation requests, return the offline page if offline
        if (event.request.mode === 'navigate') {
          return caches.match(OFFLINE_URL)
            .then((offlineResponse) => {
              return offlineResponse || fetch(event.request);
            });
        }

        // For other requests, try the network first
        return fetch(event.request)
          .then((networkResponse) => {
            // Cache the response for future use
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return networkResponse;
          })
          .catch(() => {
            // If offline and not a navigation request, return a fallback
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match(OFFLINE_URL);
            }
          });
      })
  );
});

// Push notifications support (optional)
self.addEventListener('push', (event) => {
  const title = 'Jace Farms Update';
  const options = {
    body: event.data?.text() || 'New update available!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
