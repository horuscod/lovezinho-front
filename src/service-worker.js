// Nome do cache
const CACHE_NAME = "meu-pwa-cache-v1";

// Arquivos/rotas a serem armazenados em cache
const urlsToCache = [
  "/",
  "/styles/main.css",
  "/script/main.js",
  // Adicione outras rotas e arquivos que deseja armazenar em cache
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Arquivos cacheados");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Retorna a resposta do cache ou busca na rede, se não disponível
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
