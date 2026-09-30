// Service Worker — CJPF Reportes
// Estrategia: RED PRIMERO con tiempo límite. Si la red responde en 3 s, se usa la versión
// nueva (y se guarda copia). Si falla o tarda más, se abre la copia guardada al instante.
// Así los cambios se ven al abrir la app y, con red mala o sin red, la app abre igual.
const CACHE = 'cjpf-v9';
const ARCHIVOS = ['./', './index.html', './data.js', './manifest.json'];
const ESPERA_RED_MS = 3000;

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  // Solo se gestionan lecturas (GET) de este mismo sitio; lo demás lo maneja el navegador
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(redPrimero(e));
});

function redPrimero(e){
  const req = e.request;

  // 'no-cache' obliga a revisar con el servidor (GitHub Pages permite guardar 10 min en el navegador)
  const red = fetch(req.url, { cache: 'no-cache' }).then(resp => {
    if (resp && resp.ok) {
      const copia = resp.clone();
      caches.open(CACHE).then(c => c.put(req, copia));
    }
    return resp;
  });
  // Aunque se agote el tiempo, la descarga sigue en segundo plano y deja la caché al día
  e.waitUntil(red.catch(() => {}));

  const limite = new Promise((_, rechazar) =>
    setTimeout(() => rechazar(new Error('tiempo agotado')), ESPERA_RED_MS)
  );

  return Promise.race([red, limite]).catch(async () => {
    const cache = await caches.open(CACHE);
    const guardado = await cache.match(req);
    if (guardado) return guardado;
    if (req.mode === 'navigate') {
      const inicio = await cache.match('./index.html');
      if (inicio) return inicio;
    }
    return red;   // sin copia guardada: se espera a la red todo lo que tarde
  });
}
