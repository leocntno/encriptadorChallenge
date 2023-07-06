const textArea = document.querySelector(".textoIngresado");

function btnEncriptar(){
    let textoEscrito = document.querySelector(".textoIngresado").value;
    console.log(textoEscrito);
}

function generarDiccionarioEncriptado() {
    var letrasOriginales = "abcdefghijklmnopqrstuvwxyz";
    var letrasEncriptadas = letrasOriginales.split("");
    shuffleArray(letrasEncriptadas);
  
    var diccionarioEncriptado = {};
    for (var i = 0; i < letrasOriginales.length; i++) {
      diccionarioEncriptado[letrasOriginales[i]] = letrasEncriptadas[i];
    }
  
    return diccionarioEncriptado;
  }
  
  function generarEncriptador() {
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    const letrasAleatorias = letras.split('').sort(() => Math.random() - 0.5);
  
    const encriptador = {};
    for (let i = 0; i < letras.length; i++) {
      encriptador[letras.charAt(i)] = letrasAleatorias[i];
    }
  
    return encriptador;
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
  
  // Generar el encriptador y obtener el texto encriptado
  const encriptador = generarEncriptador();
  const textoOriginal = 'Hola mundo!';
  const textoEncriptado = encriptarTexto(textoOriginal, encriptador);
  
  // Obtener el arreglo de caracteres de reemplazo
  const caracteresReemplazo = Object.values(encriptador);
  const llave = caracteresReemplazo.join("");
  console.log(llave)

  const llaveDesencriptar = llave.split("");
  
  // Imprimir el arreglo y el texto encriptado
  console.log('Arreglo de caracteres de reemplazo:', llaveDesencriptar);
  console.log('Texto encriptado:', textoEncriptado);
  console.log('Texto original:', textoOriginal);


  function desencriptarTexto(textoEncriptado, caracteresReemplazo) {
    let textoDesencriptado = '';
    for (let i = 0; i < textoEncriptado.length; i++) {
      const caracter = textoEncriptado.charAt(i).toLowerCase();
      const indice = caracteresReemplazo.indexOf(caracter);
      if (indice !== -1) {
        textoDesencriptado += String.fromCharCode(indice + 97);
      } else {
        textoDesencriptado += caracter;
      }
    }
    return textoDesencriptado;
  }
  
  // Utilizar el arreglo de caracteres de reemplazo y el texto encriptado para desencriptar
  const textoDesencriptado = desencriptarTexto(textoEncriptado, caracteresReemplazo);
  
  // Imprimir el texto desencriptado
  console.log('Texto desencriptado:', textoDesencriptado);
  