const textArea = document.querySelector(".textoIngresado");
const resultado = document.querySelector(".textoEntregado");
const areaResultado = document.querySelector(".resultado");
const copia = document.querySelector(".copiar");

const encriptador = generarEncriptador();
const caracteresReemplazo = Object.values(encriptador);
var llave = caracteresReemplazo.join("");

var textoIngresado = '';
var textoEncriptar = '';

  
  function generarEncriptador() {
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    const letrasAleatorias = letras.split('').sort(() => Math.random() - 0.5);
  
    const encriptador = {};
    for (let i = 0; i < letras.length; i++) {
      encriptador[letras.charAt(i)] = letrasAleatorias[i];
    }
  
    return encriptador;
  }


  function btnEncriptar(){
        textoIngresado = textArea.value;
        const textoEncriptado = encriptarTexto(textoIngresado, encriptador);
        resultado.value = textoEncriptado;
        textArea.value = "";
        areaResultado.style.display = "flex"
  }
  
  function encriptarTexto(texto, encriptador) {
    let textoEncriptado = '';
    for (let i = 0; i < texto.length; i++) {
      const caracter = texto.charAt(i).toLowerCase();
      if (encriptador.hasOwnProperty(caracter)) {
        textoEncriptado += encriptador[caracter];
      } else {
        textoEncriptado += caracter;
      }
    }
    return textoEncriptado;
  }

  function guardarLlave(){
    guardarArchivoDeTexto("Guarda correctamente el contenido de este archivo: "+llave, "llave.txt");
  }

  const guardarArchivoDeTexto = (contenido, nombre) => {
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
  }

  function desencriptarTexto(textoResolver, llaveDesencriptar) {
    let textoDesencriptado = '';
    for (let i = 0; i < textoResolver.length; i++) {
      const caracter = textoResolver.charAt(i).toLowerCase();
      const indice = llaveDesencriptar.indexOf(caracter);
      console.log(indice)
      if (indice !== -1) {
        textoDesencriptado += String.fromCharCode(indice + 97);
      } else {
        textoDesencriptado += caracter;
      }
    }
    return textoDesencriptado;
  }

  function btnDesencriptar(){

    const llaveCasilla = document.querySelector(".llaveCasilla");
    const textoLlave = llaveCasilla.value;
    var llaveDesencriptar = textoLlave.split('');

    textoResuelto = textArea.value;
    const textoDesencriptado = desencriptarTexto(textoResuelto, llaveDesencriptar);
    resultado.value = textoDesencriptado;
    textArea.value = "";
  
  }
  
 
  