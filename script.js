const abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
'ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

let abcCambia = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
    'ñ','o','p','q','r','s','t','u','v','w','x','y','z'];

const llave = abcCambia.sort(() => Math.random() - 0.5);


let encriptacion = abecedario.concat(llave);
console.log(encriptacion);

const textoEncriptar = "hola"
var textCar = String(textoEncriptar);

       for (i = 0; i < textCar.length ; i++){
            var indices = [];
            var idx = encriptacion.indexOf(textCar[i]);
            while (idx != -1) {
                indices.push(idx);
            idx = encriptacion.indexOf(textCar[i], idx + 1);
            }
            console.log(indices);
    
} 

