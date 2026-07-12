self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("carecalc-v2").then(cache => {
      return cache.addAll([
        "./calculator.html",
        "./manifest.json",
        "./service-worker.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
