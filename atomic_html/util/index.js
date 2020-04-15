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
let temas = document.getElementById('temas');
let temas2 = document.getElementById('temas2');
console.log('Temas 2: ', temas2);

let opciones_temas = document.getElementsByClassName('opcionesTemas')
console.log('Opciones Temas: ', opciones_temas);



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

/////////////////////////////
opciones_temas[1].addEventListener('click', () => {
  let temas_cambio_1 = temas.href.replace('normal', 'oscuro')
  /*   let temas2_cambio_1 = temas2.href.replace('normal', 'oscuro') */
  temas.href = temas_cambio_1
  /*   temas2.href = temas2_cambio_1 */
  console.log('URL Temas: ', temas.href);
})

opciones_temas[0].addEventListener('click', () => {
  let temas_cambio_2 = temas.href.replace('oscuro', 'normal')
  /*   let temas2_cambio_2 = temas2.href.replace('oscuro', 'normal') */
  temas.href = temas_cambio_2
  /*   temas2.href = temas2_cambio_2 */
  console.log('URL Temas: ', temas.href);
})

