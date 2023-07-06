const textArea = document.querySelector(".textoIngresado");
const resultado = document.querySelector(".textoEntregado");
const copia = document.querySelector(".copiar");
const llaveCasilla = document.querySelector(".llaveCasilla");
var textoLlave= '';
const encriptador = generarEncriptador();
console.log(encriptador);
var textoIngresado = '';
var textoEncriptar = '';
const caracteresReemplazo = Object.values(encriptador);
console.log(caracteresReemplazo);
const llave = caracteresReemplazo.join("");
var llaveDesencriptar = '';
  
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
        guardarArchivoDeTexto(llave, "llave.txt");
        textArea.value = "";
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

  const guardarArchivoDeTexto = (contenido, nombre) => {
    const a = document.createElement("a");
    const archivo = new Blob([contenido], { type: 'text/plain' });
    const url = URL.createObjectURL(archivo);
    a.href = url;
    a.download = nombre;
    a.click();
    URL.revokeObjectURL(url);
  }

  function desencriptarTexto(textoEncriptado, llaveDesencriptar) {
    let textoDesencriptado = '';
    for (let i = 0; i < textoEncriptado.length; i++) {
      const caracter = textoEncriptado.charAt(i).toLowerCase();
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
    textoEncriptar = textArea.value;
    const textoDesencriptado = desencriptarTexto(textoEncriptar, llaveDesencriptar)
    console.log(textoDesencriptado);
    resultado.value = textoDesencriptado;
    textArea.value = "";
    textoLlave = llaveCasilla.value;
    llaveDesencriptar = textoLlave.split('');
    console.log(textoLlave);
    console.log(llaveDesencriptar);
  }
  
 
  