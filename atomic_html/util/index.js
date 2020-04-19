// VARIABLES GLOBALES
let menu = document.getElementById('desplegarMenu');
let menu2 = document.getElementById('desplegar2');
let buscar = document.getElementById('buscar');
let mostrarRosa = document.getElementById('busqueda__principal--rosa');
let busquedaInput = document.getElementById('busqueda__principal--input');
let lupa = document.getElementById('lupa');
let temas = document.getElementById('temas');
let temas2 = document.getElementById('temas2');
let opciones_temas = document.getElementsByClassName('opcionesTemas')
let logo = document.getElementById('logo')
///////////////////////

// MENU DESPLEGABLE PARA LOS TEMAS

let text = menu.addEventListener('click', function () {
  document.getElementById('desplegar').classList.toggle('desplegar')
  document.getElementById('desplegar2').classList.toggle('desplegar')
})

let img = menu2.addEventListener('click', function () {
  document.getElementById('desplegar').classList.toggle('desplegar')
  document.getElementById('desplegar2').classList.toggle('desplegar')
})

function ocultar() {
  document.getElementById('desplegar').classList.toggle('desplegar')
  document.getElementById('desplegar2').classList.toggle('desplegar')
}

// HOVER PARA LAS OPCIONES DE BUSQUEDA

let opcion = document.getElementById('opciones');

let mouseOver = opcion.addEventListener('mouseover', event => {
  event.target.classList.add('opciones--hover');
  opcion.classList.remove('opciones--hover')
}
)

let mouseout = opcion.addEventListener('mouseout', event => {
  event.target.classList.remove('opciones--hover');
}
)

// CAPTURAR EL INPUT PARA MOSTAR LAS OPCIONES DE BUSQUEDA

let mostrar = buscar.addEventListener('input', () => {
  opcion.classList.add('busqueda__opciones--mostrar')
  mostrarRosa.classList.add('busqueda__principal--borde')
  mostrarRosa.classList.add('busqueda__principal--rosa')
  busquedaInput.classList.add('busqueda__principal--rosa')
  lupa.classList.add('lupa--input')
  lupa.classList.remove('lupa')
})

// CAPTURAR EL CLICK DE LAS OPCIONES PARA OCULTARLAS

let hidden = opcion.addEventListener('click', () => {
  opcion.classList.remove('busqueda__opciones--mostrar')
  mostrarRosa.classList.remove('busqueda__principal--borde')
  mostrarRosa.classList.remove('busqueda__principal--rosa')
  mostrarRosa.classList.remove('busqueda__principal')
  mostrarRosa.classList.add('busqueda__principal--rosa--active')
  busquedaInput.classList.remove('busqueda__principal--rosa')
  busquedaInput.classList.add('busqueda__principal--active--input')
})

let submit = document.getElementById('busqueda__principal--input')
let hiddenSubmit = submit.addEventListener('click', () => {
  opcion.classList.remove('busqueda__opciones--mostrar')
  mostrarRosa.classList.remove('busqueda__principal--borde')
  mostrarRosa.classList.remove('busqueda__principal--rosa')
  mostrarRosa.classList.remove('busqueda__principal')
  mostrarRosa.classList.add('busqueda__principal--rosa--active')
  busquedaInput.classList.remove('busqueda__principal--rosa')
  busquedaInput.classList.add('busqueda__principal--active--input')
})
/////////////////////////////

opciones_temas[1].addEventListener('click', () => {
  let temas_cambio_1 = temas.href.replace('normal', 'oscuro')
  temas.href = temas_cambio_1
  let logo_cambio_1 = logo.src.replace('gifOF_logo', 'gifOF_logo_dark')
  logo.src = logo_cambio_1
})

opciones_temas[0].addEventListener('click', () => {
  let temas_cambio_2 = temas.href.replace('oscuro', 'normal')
  temas.href = temas_cambio_2
  let logo_cambio_2 = logo.src.replace('gifOF_logo_dark', 'gifOF_logo')
  logo.src = logo_cambio_2
})

