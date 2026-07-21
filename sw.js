const CACHE_NAME = "riftbound-tracker-v4.9.0";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./AhriFoxIcon180_v49.png",
  "./AhriFoxIcon192_v49.png",
  "./AhriFoxIcon512_v49.png",
  "./AhriFoxMaskable512_v49.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  // Network-first for HTML and the manifest so icon updates are not trapped behind an old cache.
  const url = new URL(event.request.url);
  const isAppShell = event.request.mode === "navigate" || url.pathname.endsWith("/index.html") || url.pathname.endsWith("/manifest.json");

  if (isAppShell) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then(hit => hit || caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (!response || response.status !== 200 || response.type === "opaque") return response;
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
