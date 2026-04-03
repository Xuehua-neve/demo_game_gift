
// ZIM Zapps PWA Service Worker to cache app files
// Please check to see all files have been listed with local links
// (Do not worry about icon files) 

var cacheName = 'zim_pwa_Gift';
var filesToCache = [
  './',
  'Gift.html',
  'assets/gift.png',
  'assets/Musicalbox.mp3',
  'assets/Cuckooclock.mp3',
  'assets/Kitten.wav',
  'assets/game-complete.mp3',
  'assets/game-start.mp3',
  'assets/game-peaceful.mp3'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});