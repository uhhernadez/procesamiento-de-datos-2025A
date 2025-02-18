import {select} from "d3";
console.log(select);

var variable;
const svg = select("#app").append("svg");
//svg = select("body");
let numero = 10;
numero = 18;
// Se reasigna
numero = "122132";
const cadena = 'Esto es una cadena';
const otrCadena = "Esto es una cadena";
let verdadero = true;
let falso = false;

let arregloVacio = [];
let arreglo = [0, 1, 2, 3, 4, 5, 6];
// Los arreglos comienzan en zero
console.log(arreglo[0]);
const arregloHeterogeneo = ["Cadena", 2, 3, "Otra cadena"];

// Operadores aritméticos
let suma = 1 + 2;
let resta = 2 - 2;
let multiplicacion = 3 * 3;
let division = 5/5 ;

// Operadores lógicos
let igual = 1 == 1;
let diferente = 1 != 1;
let mayor = 1 > 2;
let menor = 3 < 3;

if (1 == 2) {

} else {

}

let control = 1;
switch (control) {
  case 1: break;
  case 2: break;
  case 3: break;
  case 4: break;
  case 5: break;
  default: break;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

while (1 != 1) {
  console.log ("Nunca entra al ciclo");
}

for ( let j = 0; j < arregloHeterogeneo.length; j++) {
  console.log(arregloHeterogeneo[j]);
}
const funcion = (a , b) => {
  return a + b;
}

const funcion2 = (a , b) => a + b;

const saludo = function (a, b) {
  return a + b;
}
console.log( funcion(1,2), funcion2(3,4), saludo(5,6) );


class Carro {
  constructor (modelo, nombre) {
    this.modelo = modelo;
    this.nombre = nombre;
    //this.variable = this.variable;
  }
  
  pitar () {

  }  
}
const rayo = new Carro("Rayo", "Deportivo");
rayo.temperatura = 10;

arregloHeterogeneo.forEach((valor, index) =>{
  console.log(valor,index);
});