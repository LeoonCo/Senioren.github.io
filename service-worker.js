const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/grundlagen.html',
    '/sicherheit.html',
    '/kommunikation.html',
    '/services.html',
    '/glossar.html',
    '/suche.html',
    '/style.css',
    '/script.js',
    '/images/icons/icon-192x192.png',
    '/images/icons/icon-512x512.png',
];

// Service Worker installieren
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

// Service Worker aktivieren
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch (Netzwerk) - Verfügbar im Offline-Modus
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
