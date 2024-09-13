import './navegador.css'

export const createNav = () => {
  const navegador = document.querySelector('#navegador')
  const logo = document.createElement('img')
  const ul = document.createElement('ul')
  const inicio = document.createElement('li')
  const explorar = document.createElement('li')
  const crear = document.createElement('li')
  const buscador = document.createElement('form')
  const inputBuscar = document.createElement('input')
  const btnBuscar = document.createElement('button')
  const btnImg = document.createElement('img')
  const notificaciones = document.createElement('img')
  const mensajes = document.createElement('img')
  const perfil = document.createElement('img')
  const menuHam = document.createElement('img')

  logo.src = './assets/logo.png'
  logo.classList.add('logo')
  inicio.textContent = 'Inicio'
  inicio.classList.add('inicio')
  explorar.textContent = 'Explorar'
  crear.textContent = 'Crear'
  buscador.classList.add('buscarform')
  inputBuscar.type = 'text'
  inputBuscar.placeholder = 'Buscar'
  inputBuscar.classList.add('buscarbar')
  btnBuscar.type = 'submit'
  btnBuscar.classList.add('botonbusar')
  btnImg.src = './assets/buscar.png'
  btnImg.classList.add('botonimg')
  notificaciones.src = './assets/campana.png'
  mensajes.src = './assets/mensajes.png'
  perfil.src = './assets/perfil.png'
  menuHam.src = './assets/hamburguesa.png'
  perfil.classList.add('perfil')
  mensajes.classList.add('mensajes')
  notificaciones.classList.add('notificaciones')
  menuHam.classList.add('hamburguesa')

  navegador.append(logo)
  navegador.appendChild(ul)
  ul.appendChild(inicio)
  ul.appendChild(explorar)
  ul.appendChild(crear)
  navegador.append(buscador)
  buscador.appendChild(btnBuscar)
  btnBuscar.append(btnImg)
  buscador.appendChild(inputBuscar)
  navegador.append(notificaciones)
  navegador.append(mensajes)
  navegador.append(perfil)
  navegador.append(menuHam)
}
