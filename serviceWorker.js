const staticDevRunPepeRun = "Run Pepe Run"
const assets = [
  "index.html",
  "css/estilos.css",
  "js/nucleo.js",
  "img/cactus_3.png",
  "img/fondoCalle.png",
  "img/hidrante.png",
  "img/nube.png",
  "img/objeto1.jpg",
  "img/objeto2.jpg",
  "img/pepeSprite.png",
  "img/poli.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevRunPepeRun).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })