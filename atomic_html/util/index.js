let menu = document.getElementById('desplegarMenu');
let menu2 = document.getElementById('desplegar2');
/* let li = document.getElementById('item--tema'); */
let text = menu.addEventListener('click', function () {
  document.getElementById('desplegar').classList.add('desplegar')
  document.getElementById('desplegar2').classList.add('desplegar')
})

let img = menu2.addEventListener('click', function () {
  document.getElementById('desplegar').classList.add('desplegar')
  document.getElementById('desplegar2').classList.add('desplegar')
})
/*
let img = menu2.addEventListener('click', function () {
  document.getElementById('desplegar2').classList.add('desplegar')
}) */

function ocultar() {
  document.getElementById('desplegar').classList.remove('desplegar')
  document.getElementById('desplegar2').classList.remove('desplegar')
}