;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n)
  new MutationObserver((n) => {
    for (const o of n)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
  }).observe(document, {
    childList: !0,
    subtree: !0
  })
  function c(n) {
    const o = {}
    return (
      n.integrity && (o.integrity = n.integrity),
      n.referrerPolicy && (o.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : n.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(n) {
    if (n.ep) return
    n.ep = !0
    const o = c(n)
    fetch(n.href, o)
  }
})()
const C = () => {
  const t = document.querySelector('#navegador'),
    e = document.createElement('img'),
    c = document.createElement('ul'),
    r = document.createElement('li'),
    n = document.createElement('li'),
    o = document.createElement('li'),
    s = document.createElement('form'),
    a = document.createElement('input'),
    d = document.createElement('button'),
    m = document.createElement('img'),
    p = document.createElement('img'),
    g = document.createElement('img'),
    f = document.createElement('img'),
    h = document.createElement('img')
  ;(e.src = './assets/logo.png'),
    e.classList.add('logo'),
    (r.textContent = 'Inicio'),
    r.classList.add('inicio'),
    (n.textContent = 'Explorar'),
    (o.textContent = 'Crear'),
    s.classList.add('buscarform'),
    (a.type = 'text'),
    (a.placeholder = 'Buscar'),
    a.classList.add('buscarbar'),
    (d.type = 'submit'),
    d.classList.add('botonbusar'),
    (m.src = './assets/buscar.png'),
    m.classList.add('botonimg'),
    (p.src = './assets/campana.png'),
    (g.src = './assets/mensajes.png'),
    (f.src = './assets/perfil.png'),
    (h.src = './assets/hamburguesa.png'),
    f.classList.add('perfil'),
    g.classList.add('mensajes'),
    p.classList.add('notificaciones'),
    h.classList.add('hamburguesa'),
    t.append(e),
    t.appendChild(c),
    c.appendChild(r),
    c.appendChild(n),
    c.appendChild(o),
    t.append(s),
    s.appendChild(d),
    d.append(m),
    s.appendChild(a),
    t.append(p),
    t.append(g),
    t.append(f),
    t.append(h)
}
const L = () => {
  const t = document.createElement('div'),
    e = document.createElement('ul'),
    c = document.createElement('li'),
    r = document.createElement('li'),
    n = document.createElement('li'),
    o = document.createElement('li'),
    s = document.createElement('li'),
    a = document.createElement('li')
  ;(c.textContent = 'Inicio'),
    (r.textContent = 'Notificaciones'),
    (n.textContent = 'Mensajes'),
    (o.textContent = 'Perfil'),
    (s.textContent = 'Explorar'),
    (a.textContent = 'Crear'),
    t.classList.add('seccionlateral'),
    e.appendChild(c),
    e.appendChild(r),
    e.appendChild(n),
    e.appendChild(o),
    e.appendChild(s),
    e.appendChild(a),
    t.appendChild(e),
    document.body.append(t)
}
C()
const b = document.querySelector('.buscarform'),
  v = document.querySelector('.buscarbar'),
  S = document.querySelector('#galeria')
let l = 1,
  u = 'gatos'
y(u, l)
b.addEventListener('submit', (t) => {
  t.preventDefault(), (u = v.value), (S.innerHTML = ''), (l = 1), y(u, l)
})
function y(t, e) {
  const c = document.querySelector('#galeria')
  fetch(
    `https://api.unsplash.com/search/photos?page=${e}&per_page=30&query=${t}&client_id=DKX8RFHjXo-PYoAveyuGV5a7gFdUXra8DvHlgOJPU8E`
  )
    .then((r) => r.json())
    .then((r) => {
      r.results.length ? q(r.results) : (c.classList.add('galeria-error'), M())
    })
}
const x = document.querySelector('#mostrarmas'),
  i = document.createElement('button')
i.classList.add('mostrarmas')
i.textContent = 'Cargar más imágenes'
x.append(i)
i.addEventListener('click', () => {
  l++, y(u, l)
})
const E = document.querySelector('#galeria'),
  q = (t) => {
    for (const e of t) {
      const c = document.createElement('img')
      ;(c.src = e.urls.regular),
        c.classList.add('ppinterest', 'escalas'),
        E.appendChild(c)
    }
  }
const M = () => {
  const t = document.createElement('p')
  ;(t.textContent = 'Ningún resultado.'), t.classList.add('error-mensaje')
  const e = document.createElement('button')
  ;(e.textContent = 'Vuelve a intentarlo'),
    e.classList.add('botonatras'),
    e.addEventListener('click', () => {
      location.reload(), window.scrollTo(0, 0)
    }),
    E.appendChild(t),
    E.appendChild(e),
    i.classList.add('hidden')
}
const I = document.querySelector('.logo'),
  P = document.querySelector('.inicio')
I.addEventListener('click', () => {
  location.reload(), window.scrollTo(0, 0)
})
P.addEventListener('click', () => {
  location.reload(), window.scrollTo(0, 0)
})
L()
const w = document.querySelector('.hamburguesa'),
  j = document.querySelector('.seccionlateral')
w.addEventListener('click', () => {
  j.classList.toggle('active')
})
