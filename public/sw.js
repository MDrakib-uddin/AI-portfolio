const CACHE_NAME = 'rakib-ai-cache-v2';
const STATIC_CACHE = 'rakib-ai-static-v2';
const DYNAMIC_CACHE = 'rakib-ai-dynamic-v2';

// Static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/brain.jpeg',
  '/src/index.css',
  '/src/main.tsx'
];

// Dynamic assets to cache on demand
const DYNAMIC_ASSETS = [
  '/src/components/',
  '/src/lib/',
  '/src/assets/'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      caches.open(DYNAMIC_CACHE).then(cache => {
        console.log('Dynamic cache ready');
        return cache;
      })
    ])
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (isStaticAsset(request)) {
    // Static assets: cache first strategy
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (isImage(request)) {
    // Images: cache first with network fallback
    event.respondWith(cacheFirst(request, DYNAMIC_CACHE));
  } else if (isAPIRequest(request)) {
    // API requests: network first strategy
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // Other requests: network first with cache fallback
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Cache first strategy
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a fallback response if available
    const fallbackResponse = await getFallbackResponse(request);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    throw error;
  }
}

// Network first strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return a fallback response if available
    const fallbackResponse = await getFallbackResponse(request);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    throw error;
  }
}

// Helper functions
function isStaticAsset(request) {
  return STATIC_ASSETS.some(asset => 
    request.url.includes(asset) || 
    request.url.endsWith('.css') || 
    request.url.endsWith('.js')
  );
}

function isImage(request) {
  return request.destination === 'image' || 
         request.url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i);
}

function isAPIRequest(request) {
  return request.url.includes('/api/') || 
         request.url.includes('analytics') ||
         request.url.includes('tracking');
}

async function getFallbackResponse(request) {
  // Provide fallback responses for common requests
  if (request.destination === 'image') {
    // Return a placeholder image
    return new Response(
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+RXJyb3I8L3RleHQ+PC9zdmc+',
      {
        headers: { 'Content-Type': 'image/svg+xml' }
      }
    );
  }
  
  return null;
}

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle background sync tasks
  console.log('Background sync triggered');
  
  // You can implement offline form submissions, analytics, etc. here
  const offlineData = await getOfflineData();
  if (offlineData.length > 0) {
    await syncOfflineData(offlineData);
  }
}

async function getOfflineData() {
  // Get stored offline data
  return [];
}

async function syncOfflineData(data) {
  // Sync offline data when back online
  console.log('Syncing offline data:', data);
}

// Push notification handling
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New notification',
    icon: '/brain.jpeg',
    badge: '/brain.jpeg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('Rakib AI Portfolio', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
}); 