/* let desplegar = function () {
  if (document.getElementById('desplegarMenu')) {
    document.getElementById('desplegar').classList.add('desplegar')
    document.getElementById('desplegar2').classList.add('desplegar2')
  }
}
 */
let menu = document.getElementById('desplegarMenu');
let menu2 = document.getElementById('desplegar2');
let buscar = document.getElementById('buscar');
let mostrarRosa = document.getElementById('busqueda__principal--rosa');
let busquedaInput = document.getElementById('busqueda__principal--input');
let lupa = document.getElementById('lupa');

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
  console.log('Aqui empieso a escribir');
  console.log(lupa);


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


