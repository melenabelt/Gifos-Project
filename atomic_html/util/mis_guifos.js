// VARIABLES GLOBALES
let contenedor_listo = document.getElementById('contenedor_capturar_listo')
let listo = document.getElementById('mostrar_camara_capturar_listo')
let video = document.getElementById('grabar_camara')
let reproducir_gif = document.getElementById('reproducir_gif')
let finalizar_botones = document.getElementById('contenedor_finalizar_botones')
let capturar = document.getElementById('mostrar_camara_capturar')
capturar.textContent = 'Capturar'
let contenedor_capturar = document.getElementById('contenedor_capturar')
let subir_gif = document.getElementById('contenedor_finalizar_subir')
let repetir_captura = document.getElementById('contenedor_finalizar_repetir')
let reproducir_gif_img = document.getElementById('reproducir_gif_img')
////////////////////////////


/* METODO POST A GIPHY */
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
  async getGifById(id) {
    let obtenId = await fetch(
     `https://api.giphy.com/v1/gifs/${id}?api_key=YgKAQyftfAQrFSeqJEBOIt9v7ImEN5D0`
    );
    let obtenResId = await obtenId.json();
    return { obtenResId };
  }
}


///////////////////
contenedor_listo.style.display = 'none'
finalizar_botones.style.display = 'none'

capturar.addEventListener('click', () => {
  videoGenerate()
  capturar.textContent = 'Creando Guifo'
  setTimeout(() => {
    contenedor_capturar.style.display = 'none'
    contenedor_listo.style.display = ''
  }, 5000);
  listo.addEventListener('click', () => {
    contenedor_listo.style.display = 'none'
    finalizar_botones.style.display = ''
  })
})

repetir_captura.addEventListener('click', () => {
  videoGenerate()
  finalizar_botones.style.display = 'none'
  contenedor_capturar.style.display = ''
  video.style.display = ''
  reproducir_gif.style.display= ''
  capturar.textContent = 'Creando Guifo'
  
  setTimeout(() => {
    contenedor_capturar.style.display = 'none'
    contenedor_listo.style.display = ''
  }, 5000);
  listo.addEventListener('click', () => {
    contenedor_listo.style.display = 'none'
    finalizar_botones.style.display = ''
  })
})

function videoGenerate() {
  navigator.mediaDevices
    .getUserMedia({
      video: { height: { max: 480 } },
      // audio: false
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
        recorder.stopRecording(function () {
          let blob = recorder.getBlob();  // 1PERMITE DESCARGAR EL GIF

          console.log('Es el blob', recorder.getBlob());

          video.pause()
          const tracks = stream.getTracks()
          tracks[0].stop()
          reproducir_gif_img.addEventListener('click', () => {
            video.style.display = 'none'
            reproducir_gif.style.display = 'block'
            let url2 = URL.createObjectURL(blob)
            reproducir_gif.src = url2;
          })

          console.log('Este es tracks', tracks);

          // TERCERA FASE -- GENERANDO ARCHIVO CAPTURA PARA SUBIR
          video.pause()
          let form = new FormData();

          form.append("file", recorder.getBlob(), "myGif.gif");
          console.log(form.get("file"));

          let url = recorder.toURL()
          console.log('Fucking URL', url);

          subir_gif.addEventListener('click', () => {
            let inst = new giphy();
            let key = "YgKAQyftfAQrFSeqJEBOIt9v7ImEN5D0"; //KEY OBTENIDO DE GIPHY
            inst.obtener(key, form)
              .then((resData) => {
                console.log(resData.data.id); // IMPRIME DEL ID QUE SITUA EN EL OBJETO
                const traer_gif =
                  fetch('https://api.giphy.com/v1/gifs/' + resData.data.id + '?api_key=' + 'YgKAQyftfAQrFSeqJEBOIt9v7ImEN5D0')
                    .then(response => response.json())
                    .then(resData3 => {
                      console.log('Otro intento mas ', resData3);
                      localStorage.setItem(`GIF ${resData3.data.id}`, JSON.stringify(resData3))
                      let gif_local = localStorage.getItem(`GIF ${resData3.data.id}`)
                      console.log('Antes del parse ', gif_local);
                      let nuevo_gif = JSON.parse(gif_local);
                      console.log('Después del parse ', nuevo_gif);
                      console.log(nuevo_gif.data.url);
                    })
                return traer_gif
              });
          })
        });
      })
    });
}

