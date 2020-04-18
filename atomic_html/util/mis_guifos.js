// VARIABLES GLOBALES
let mostrar_camara = document.getElementById('mostrar_camara')
let camara_titulo = document.getElementById('camara_titulo')
let contenedor_listo = document.getElementById('contenedor_capturar_listo')
let listo = document.getElementById('mostrar_camara_capturar_listo')
let video = document.getElementById('grabar_camara')
let reproducir_gif = document.getElementById('reproducir_gif')
let finalizar_botones = document.getElementById('contenedor_finalizar_botones')
let capturar = document.getElementById('mostrar_camara_capturar')
let contenedor_capturar = document.getElementById('contenedor_capturar')
let subir_gif = document.getElementById('contenedor_finalizar_subir')
let repetir_captura = document.getElementById('contenedor_finalizar_repetir')
let reproducir_gif_img = document.getElementById('reproducir_gif_img')
let mis_gifs = document.getElementsByClassName('img--gif')
let mis_gifs_contenedor = document.getElementById('mis--gifs__contenedor')
let contenedor_subir_gif = document.getElementById('contenedor_subir_gif')
let subir_barra_cuadro = document.getElementsByClassName('subir_barra_cuadro')
let contenedor_cancelar = document.getElementById('contenedor_cancelar')
let cancelar_texto = document.getElementById('cancelar_texto')
let finalizar_gif = document.getElementById('finalizar_gif')
let finalizar_boton_copiar = document.getElementById('finalizar_boton_copiar')
let finalizar_boton_descargar = document.getElementById('finalizar_boton_descargar')
let img_finalizar = document.getElementById('img_finalizar')
let finalizar_listo = document.getElementById('finalizar_listo')
let cerrar_1 = document.getElementById('cerrar_1')
let cerrar_2 = document.getElementById('cerrar_2')

////////////////////////////

/* CLASE GIPHY CON FUNCIONES PARA ENVIAR EL GIF */
class giphy {
  async obtener(apiKey, formaData) {
    let cors = { method: "POST", body: formaData, json: true };
    let respuestaApi = await this.postear(
      `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`,
      cors
    );

    return respuestaApi;
  }
  async postear(URL, parametros) {
    let datos = await fetch(URL, parametros);
    let respuesta = await datos.json();

    return respuesta;
  }
}
///////////////////

// CÓDIGO PRINCIPAL

capturar.textContent = 'Capturar'
contenedor_listo.style.display = 'none'
finalizar_botones.style.display = 'none'
contenedor_subir_gif.style.display = 'none'
contenedor_cancelar.style.display = 'none'
finalizar_gif.style.display= 'none'
camara_titulo.textContent= 'Un Chequeo Antes de Empezar'

/* INICIAR LA GRABACIÓN DE LA CAMÁRA */
capturar.addEventListener('click', () => {
  crear_gifs()
  capturar.textContent = 'Creando Guifo'
  camara_titulo.textContent = 'Capturando Tu Guifo'

  setTimeout(() => {
    contenedor_capturar.style.display = 'none'
    contenedor_listo.style.display = ''
  }, 1000);
})
///////////////////

repetir_captura.addEventListener('click', () => {
  crear_gifs()
  finalizar_botones.style.display = 'none'
  contenedor_capturar.style.display = ''
  video.style.display = ''
  reproducir_gif.style.display = ''
  capturar.textContent = 'Creando Guifo'

  setTimeout(() => {
    contenedor_capturar.style.display = 'none'
    contenedor_listo.style.display = ''
  }, 1000);
})

function crear_gifs() {
  navigator.mediaDevices
    .getUserMedia({
      video: { height: { max: 480 } },
    })

    .then(async function (stream) {
      video.srcObject = stream;
      video.play();
      let recorder = RecordRTC(stream, {
        type: "gif",
        frameRate: 1,
        quality: 10,
        width: 827,
        height: 431,
        hidden: 240,
        onGifRecordingStarted: function () {
          console.log("started");
        },
      });

      recorder.startRecording();
      listo.addEventListener('click', () => {
        contenedor_listo.style.display = 'none'
        finalizar_botones.style.display = ''
        camara_titulo.textContent = 'Vista Previa'
        /////////////////////////////////////
        recorder.stopRecording(function () {
          let blob = recorder.getBlob();
          video.pause()
          const tracks = stream.getTracks()
          tracks[0].stop()
          reproducir_gif_img.addEventListener('click', () => {
            video.style.display = 'none'
            reproducir_gif.style.display = 'block'
            let url = URL.createObjectURL(blob)
            reproducir_gif.src = url;
          })
          /////////////////////////////////////
          let form = new FormData();
          form.append("file", recorder.getBlob(), "myGif.gif");
          subir_gif.addEventListener('click', () => {
            contenedor_subir_gif.style.display = ""
            video.style.display = 'none'
            contenedor_cancelar.style.display = ""
            finalizar_botones.style.display = 'none'
            reproducir_gif.style.display = 'none'
            camara_titulo.textContent = 'Subiendo Guifo'
            let contador_1 = 0
            let pintar_barra_1;
            pintar_barra_1 = setInterval(() => {
              subir_barra_cuadro[contador_1].classList.add("subir_barra_cuadro--color")
              contador_1 += 1
              contador_1 == 10
                ? clearInterval(pintar_barra_1)
                : console.log("Pintando 1");
            }, 100);


            let inst = new giphy();
            let key = "YgKAQyftfAQrFSeqJEBOIt9v7ImEN5D0";
            inst.obtener(key, form)
              .then((resData) => {
                const traer_gif =
                  fetch('https://api.giphy.com/v1/gifs/' + resData.data.id + '?api_key=' + 'YgKAQyftfAQrFSeqJEBOIt9v7ImEN5D0')
                    .then(response => response.json())
                    .then(resData => {
                      localStorage.setItem(`GIF ${resData.data.id}`, JSON.stringify(resData))
                      let contador_2 = 10
                      let pintar_barra_2;
                      pintar_barra_2 = setInterval(() => {
                        subir_barra_cuadro[contador_2].classList.add("subir_barra_cuadro--color")
                        contador_2 += 1
                        if (contador_2 == 23){
                          clearInterval(pintar_barra_2)
                          finalizar_gif.style.display = ""
                          mostrar_camara.style.display = 'none'
                          img_finalizar.src = resData.data.images.downsized_large.url
                        } else {
                          console.log('Pintando 2');
                        }
                      }, 200);

                      mostrar_mis_gif_creados()

                      finalizar_boton_copiar.addEventListener('click', () => {
                        let gif_local = localStorage.getItem(`GIF ${resData.data.id}`)
                        let nuevo_gif = JSON.parse(gif_local);
                        let url_copiar = document.createElement('input')
                        document.body.appendChild(url_copiar)
                        url_copiar.value = nuevo_gif.data.images.downsized_large.url
                        url_copiar.select()
                        document.execCommand('copy')
                        url_copiar.style.display = 'none'
                      })

                      finalizar_boton_descargar.addEventListener('click', () => {
                        invokeSaveAsDialog(blob)
                      })
                    })
                    
                return traer_gif
              });
          })
        });
      })
    })
    .catch(error => {
      console.error('Quéjesto', error);
    })
}

cancelar_texto.addEventListener('click', () => {
  location.reload()
  alert('Perdún. No se subió el gif porque le diste cancelar')
})

cerrar_1.addEventListener('click', () => {
  location.reload()
})

cerrar_2.addEventListener('click', () => {
  location.reload()
})

finalizar_listo.addEventListener('click', () => {
  location.reload()
})

//////////////////////////

let mostrar_mis_gif_creados = () => {
  for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i)
    let gif_local = localStorage.getItem(clave)
    let nuevo_gif = JSON.parse(gif_local);

    let gif_contenedor = document.createElement('div')
    gif_contenedor.classList.add('gif__contenedor')

    let div = document.createElement('div')

    let img_gif = document.createElement('img')
    img_gif.classList.add('img--gif')

    div.appendChild(img_gif)

    gif_contenedor.appendChild(div)

    mis_gifs_contenedor.appendChild(gif_contenedor)
    mis_gifs[i].src = nuevo_gif.data.images.downsized_large.url
  }
}





