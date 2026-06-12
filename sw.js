/* Service Worker — Cris & Dai
   Guarda a retrospectiva em cache para abrir rápido e funcionar offline. */

const CACHE = 'cris-e-dai-v1';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  // música
  './nossa-musica.mp3',
  // fotos
  './fotos/namoro_1.jpg',
  './fotos/namoro_2.jpg',
  './fotos/namoro_3.jpg',
  './fotos/casamento.jpg',
  './fotos/casamento_2.jpg',
  './fotos/bella_1.jpg',
  './fotos/bella_2.jpg',
  './fotos/laura_1.jpg',
  './fotos/laura_4.jpg',
  './fotos/hoje_1.jpg',
  './fotos/hoje_3.jpg',
  './fotos/hoje_4.jpg'
];

// instala: tenta cachear tudo, mas não falha se algum arquivo faltar (ex.: mp3 ainda não enviado)
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(
        ASSETS.map((url) =>
          cache.add(url).catch(() => { /* ignora ausentes */ })
        )
      )
    ).then(() => self.skipWaiting())
  );
});

// ativa: limpa caches antigos
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// busca: cache primeiro, rede como reserva (e atualiza o cache em segundo plano)
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // fontes do Google: deixa passar pela rede normalmente
  if (req.url.includes('fonts.googleapis.com') || req.url.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.match(req).then((cached) =>
        cached || fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        }).catch(() => cached)
      )
    );
    return;
  }

  e.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
