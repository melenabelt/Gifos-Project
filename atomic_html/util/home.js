// DECLARACIÓN DE VARIABLES GLOBALES

/* let body = document.getElementsByTagName('body') */
let gif_sugerencia = document.getElementsByClassName('img--gif--sugerencia')
console.log('gif_sugerencia ', gif_sugerencia);

let gif_titulo_sugerencia = document.getElementsByClassName('gif--titulo--sugerencia')
console.log('gif_titulo_sugerencia ', gif_titulo_sugerencia);

let gif_tendencia = document.getElementsByClassName('img--gif--tendencias')
console.log('gif_tendencia ', gif_tendencia);

let gif_tendencia_contenedor = document.getElementsByClassName('tendencias__gifs__contenedor')
console.log('gif_tendencia_contenedor', gif_tendencia_contenedor);


let gif_titulo_tendencia = document.getElementsByClassName('gif--titulo--tendencia')
console.log('gif_titulo_tendencia ', gif_titulo_tendencia);

let titulo_tendencia = document.getElementById('titulo__tendencia')
console.log(titulo_tendencia);

let ver_mas1 = document.getElementsByClassName('verMas1')
console.log(' ver_mas1 ', ver_mas1);

let ver_mas2 = document.getElementsByClassName('verMas2')
console.log(' ver_mas2 ', ver_mas2);

let ver_mas3 = document.getElementsByClassName('verMas3')
console.log(' ver_mas3 ', ver_mas3);

let ver_mas4 = document.getElementsByClassName('verMas4')
console.log(' ver_mas4', ver_mas4);

let opciones = document.getElementsByClassName('opciones')

let mostar_opciones = document.getElementById('mostarOpciones')

let mostar_opciones_texto = document.getElementsByClassName('mostarOpcionesTexto')


///////////////////////

// ENDPOINT PARA MOSTRAR LOS GIFS EN LA SECCIÓN DE SUGERENCIAS

function cargaDelBody() { // Función para detectar la carga del body y llamar al Endpoint
  console.log('La página cargó');

  getSugerencias();
}

// ENDPOINT SUGERENCIAS
function getSugerencias() {
  const Sugerencias =
    fetch('http://api.giphy.com/v1/gifs/trending' + '?api_key=' + 'YgKAQyftfAQrFSeqJEBOIt9v7ImEN5D0' + '&limit=10')
      .then(response => response.json())
      .then(resData => {
        console.log('Esta es la data de tendencias', resData);
        for (let i = 0; i < resData.data.length; i++) {
          let url_sugerencia = resData.data[i].images.downsized.url
          let titulo_sugerencia_completo = resData.data[i].title

          for (let j = i; j < gif_sugerencia.length; j++) {
            gif_sugerencia[j].src = url_sugerencia
          }

          for (let k = i; k < gif_titulo_sugerencia.length; k++) {
            let titulo_sugerencia_final = titulo_sugerencia_completo.split('GIF', 1)// ELIMINAR EL AUTOR DEL TÍTULO DEL GIF
            //console.log(titulo_sugerencia_final);

            gif_titulo_sugerencia[k].textContent = `#${titulo_sugerencia_final[0].replace(/ /g, '')} ` // ELIMINAR ESPACIOS EN BLANCO
          }


          for (let t = 0; t < gif_tendencia.length; t++) {
            gif_tendencia[i].src = url_sugerencia
          }

          for (let m = i; m < gif_titulo_tendencia.length; m++) {
            let titulo_sugerencia_final = titulo_sugerencia_completo.split('GIF', 1)// ELIMINAR EL AUTOR DEL TÍTULO DEL GIF
            gif_titulo_tendencia[m].textContent = `#${titulo_sugerencia_final[0].replace(/ /g, '')} ` // ELIMINAR ESPACIOS EN BLANCO
          }

          // TAMAÑO DINÁMICO DE LA ETIQUE <img>

          console.log(resData.data[i].images.downsized.width);
          if (resData.data[i].images.downsized.width <= 450) {
            gif_tendencia[i].width = 300
            gif_tendencia_contenedor[i].classList.add('gif__contenedor--1')
            gif_tendencia_contenedor[i].classList.remove('gif__contenedor--2')

            console.log('gif con width de: ', gif_tendencia[i].width);

          } else if (resData.data[i].images.downsized.width >= 451) {
            gif_tendencia[i].width = 632
            gif_tendencia_contenedor[i].classList.add('gif__contenedor--2')
            gif_tendencia_contenedor[i].classList.remove('gif__contenedor--1')

            console.log('gif con width de: ', gif_tendencia[i].width, gif_tendencia[i].classList);
          }

          ///////////////////////
        }
        return resData
      })
      .catch((error) => {
        return error
      })
  return Sugerencias
}

///////////////////////

// FUNCIONAMIENTO BOTÓN 'VER MÁS' SECCIÓN SUGERENCIAS

let verMasBuscar1 = () => {
  if (ver_mas1[0].click) {
    let padre = ver_mas1[0].parentNode
    console.log(padre);

    let primerHijo = padre.firstChild.nextElementSibling
    console.log(primerHijo);

    let primerHijoDelHijo = primerHijo.firstChild.nextElementSibling
    console.log(primerHijoDelHijo.textContent.replace('#', ''));

    let search_verMas1 = () => {
      let buscar_verMas1 = document.getElementById('buscar')
      buscar_verMas1.value = primerHijoDelHijo.textContent.replace('#', '').trim()
      console.log(buscar_verMas1.value);

      titulo_tendencia.textContent = primerHijoDelHijo.textContent.replace('#', '').trim()
      console.log(titulo_tendencia.textContent);

      event.preventDefault();
      //console.log(buscar);
      getTendencias(buscar_verMas1.value); //Llamada a la función del Endpoint
    }
    search_verMas1()

  }
}

let verMasBuscar2 = () => {
  if (ver_mas2[0].click) {
    let padre = ver_mas2[0].parentNode
    console.log(padre);

    let primerHijo = padre.firstChild.nextElementSibling
    console.log(primerHijo);

    let primerHijoDelHijo = primerHijo.firstChild.nextElementSibling
    console.log(primerHijoDelHijo.textContent.replace('#', ''));

    let search_verMas2 = () => {
      let buscar_verMas2 = document.getElementById('buscar')
      buscar_verMas2.value = primerHijoDelHijo.textContent.replace('#', '').trim()
      console.log(buscar_verMas2.value);

      titulo_tendencia.textContent = primerHijoDelHijo.textContent.replace('#', '').trim()
      console.log(titulo_tendencia.textContent);

      event.preventDefault();
      //console.log(buscar);
      getTendencias(buscar_verMas2.value); //Llamada a la función del Endpoint
    }
    search_verMas2()
  }
}


let verMasBuscar3 = () => {
  if (ver_mas3[0].click) {
    let padre = ver_mas3[0].parentNode
    console.log(padre);

    let primerHijo = padre.firstChild.nextElementSibling
    console.log(primerHijo);

    let primerHijoDelHijo = primerHijo.firstChild.nextElementSibling
    console.log(primerHijoDelHijo.textContent.replace('#', ''));

    let search_verMas3 = () => {
      let buscar_verMas3 = document.getElementById('buscar')
      buscar_verMas3.value = primerHijoDelHijo.textContent.replace('#', '').trim()
      console.log(buscar_verMas3.value);

      titulo_tendencia.textContent = primerHijoDelHijo.textContent.replace('#', '').trim()
      console.log(titulo_tendencia.textContent);

      event.preventDefault();
      //console.log(buscar);
      getTendencias(buscar_verMas3.value); //Llamada a la función del Endpoint
    }
    search_verMas3()
  }
}


let verMasBuscar4 = () => {
  if (ver_mas4[0].click) {
    let padre = ver_mas4[0].parentNode
    console.log(padre);

    let primerHijo = padre.firstChild.nextElementSibling
    console.log(primerHijo);

    let primerHijoDelHijo = primerHijo.firstChild.nextElementSibling
    console.log(primerHijoDelHijo.textContent.replace('#', ''));

    let search_verMas4 = () => {
      let buscar_verMas4 = document.getElementById('buscar')
      buscar_verMas4.value = primerHijoDelHijo.textContent.replace('#', '').trim()
      console.log(buscar_verMas4.value);

      titulo_tendencia.textContent = primerHijoDelHijo.textContent.replace('#', '').trim()
      console.log(titulo_tendencia.textContent);

      event.preventDefault();
      //console.log(buscar);
      getTendencias(buscar_verMas4.value); //Llamada a la función del Endpoint
    }
    search_verMas4()
  }
}
///////////////////////

// ENDPOINT PARA CAPTURAR LA BÚSQUEDA DEL USUARIO Y MOSTRARLA EN LA SECCIÓN DE TENDENCIAS

//Capturar la búsqueda del usuario y llamar el Endpoint
let search = () => {
  let buscar = document.getElementById('buscar').value
  event.preventDefault();
  titulo_tendencia.textContent = buscar
  //console.log(buscar);
  getTendencias(buscar); //Llamada a la función del Endpoint
}

//ENDPOINT TENDENCIAS
function getTendencias(search) {
  const URL_TENDENCIA = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=' + 'YgKAQyftfAQrFSeqJEBOIt9v7ImEN5D0' + '&limit=10'
  console.log(URL_TENDENCIA);

  const Tendencias =
    fetch(URL_TENDENCIA)
      .then(response => response.json())
      .then(resData => {
        console.log(resData);
        for (let i = 0; i < resData.data.length; i++) {
          let url_tendencia = resData.data[i].images.downsized.url
          let titulo_tendencia_completo = resData.data[i].title

          for (let j = 0; j < gif_tendencia.length; j++) {
            gif_tendencia[i].src = url_tendencia
          }

          for (k = i; k < gif_titulo_tendencia.length; k++) {
            let titulo_tendencia_final = titulo_tendencia_completo.split('GIF', 1)// ELIMINAR EL AUTOR DEL TÍTULO DEL GIF
            gif_titulo_tendencia[k].textContent = `#${titulo_tendencia_final[0].replace(/ /g, '')} ` // ELIMINAR ESPACIOS EN BLANCO
          }

          // TAMAÑO DINÁMICO DE LA ETIQUE <img>

          console.log(resData.data[i].images.downsized.width);
          if (resData.data[i].images.downsized.width <= 450) {
            gif_tendencia[i].width = 300
            /* gif_tendencia[i].classList.add('gif__contenedor--1') */
            gif_tendencia_contenedor[i].classList.add('gif__contenedor--1')
            gif_tendencia_contenedor[i].classList.remove('gif__contenedor--2')

            console.log('gif con width de: ', gif_tendencia[i].width);

          } else if (resData.data[i].images.downsized.width >= 451) {
            gif_tendencia[i].width = 632
            /*  gif_tendencia[i].classList.add('gif__contenedor--2') */
            gif_tendencia_contenedor[i].classList.add('gif__contenedor--2')
            gif_tendencia_contenedor[i].classList.remove('gif__contenedor--1')

            console.log('gif con width de: ', gif_tendencia[i].width, gif_tendencia[i].classList);
          }

          ///////////////////////

        }
        return resData
      })
      .catch((error) => {
        return error
      })
  return Tendencias
}

///////////////////////

//ENDPOINT SUGERENCIAS DE BÚSQUEDAS

//ENDPOINT AUTOCOMPLETAR
function autocompletarBusqueda() {
  console.log('funciona');
  let buscar_sugerencias = document.getElementById('buscar').value
  console.log(buscar_sugerencias);
  autocompletar(buscar_sugerencias)

  function autocompletar(search) {
    const URL_SUGERENCIAS = 'http://api.giphy.com/v1/gifs/search/tags?q=' + search + '&api_key=' + 'YgKAQyftfAQrFSeqJEBOIt9v7ImEN5D0' + '&limit=3'
    console.log(URL_SUGERENCIAS);

    const Sugerencias =
      fetch(URL_SUGERENCIAS)
        .then(response => response.json())
        .then(resData => {
          console.log(resData);
          for (let i = 0; i < resData.data.length; i++) {
            for (let j = i; j < opciones.length; j++) {
              opciones[j].value = resData.data[i].name
            }
          }
          return resData
        })
        .catch((error) => {
          return error
        })
    return Sugerencias
  }
}

function enviarOpcionesBusqueda(posicion) {
  console.log('aqui imprimo ', opciones[posicion].value);

  let buscar_autocomepletar = document.getElementById('buscar')
  buscar_autocomepletar.value = opciones[posicion].value
  titulo_tendencia.textContent = opciones[posicion].value
  getTendencias(buscar_autocomepletar.value)
  console.log(opciones);

  // Mostrando las sugerencias de búsqueda
  for (let i = 0; i < mostar_opciones_texto.length; i++) {
    console.log('Aqui entro ', opciones);
    mostar_opciones_texto[i].textContent = opciones[i].value;
    console.log(mostar_opciones_texto[i]);
    mostar_opciones.classList.toggle('mostarOpcionesBlock')
    mostar_opciones.classList.remove('mostarOpciones')
  }
}

