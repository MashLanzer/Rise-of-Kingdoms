const CACHE_NAME = 'rok-academy-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/images/comandantes/legendarios/guan_yu.jpg',
    '/images/comandantes/legendarios/alexander.jpg',
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;600;700&display=swap'
];

// Instalación: Cachear activos estáticos iniciales
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('🏰 [SW] Cacheando activos principales');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activación: Limpiar caches antiguos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('🏰 [SW] Borrando cache antigua:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

// Estrategia: Cache First (con actualización en background)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Retornar de cache si existe
            if (response) {
                return response;
            }

            // Si no, buscar en la red
            return fetch(event.request).then((networkResponse) => {
                // No cachear peticiones externas grandes o dinámicas aquí para no saturar
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }

                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    // Solo cachear recursos locales (imágenes, scripts, etc.)
                    if (event.request.url.startsWith(self.location.origin)) {
                        cache.put(event.request, responseToCache);
                    }
                });

                return networkResponse;
            });
        }).catch(() => {
            //fallback opcional si falla todo (página de error offline)
        })
    );
});
