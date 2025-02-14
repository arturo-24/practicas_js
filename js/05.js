// Ejemplo con Numeros

const numero1 = 100;
const numero2 = 200;
const numero3 = 8;
const numero4 = 3;
const numero5 = -5;


console.log(numero1 + numero2);
console.log(numero2 - numero1);  
console.log(numero2 * numero1);
console.log(numero2 / numero1);
console.log(numero2 / numero3);


console.log(numero3 % numero4); //Esto se llama "modulo" este modulo es importante ya que se ve mucho en los entrevista de trabajo.


// Ejemplos de Modulo paara entrevistas: 

// ~~ 1 Verificar si un numero es par o impar ~~ // 

function esPar(numero) {
    return numero %2 === 0;
}

console.log(esPar(100)); // Imprime: true (es par)
console.log(esPar(7)); // Imprime: false (es impar)

// Explicacion :
// SI el residuo de "numero % 2" es 0, entonces el valor es par.
// SI el residuo es 1, el numero es impar. .


// ~~ 2 Simulacion de un sistema de paginacion ~~ // 

// Puede pedir un cambio entre usuairos o turnos. 

const usuarios = ["Ana", "Juan", "Pedro", "María", "Luis"];
const turno = 7; // Supongamos que estamos en el turno 7

const usuarioAsignado = usuarios[turno % usuarios.length];

console.log(usuarioAsignado); // "Pedro"

// Explicacion:
// La expresion "turno % ususarios.length" cicla entre los indices de array, evitando errores cuando el indice  supera el tamano del array.
// 7%5=2, por lo que usuarios [2] es "Pedro" 
// los idnices en un array en JavaScript empiezan desde 0, asi que lo valores estan organizados de eta manera:

// [0, 1, 2, 3, 4, 5, 6, 7]
// Ana, Juan, Pedro, María, Luis.


// ~~ 3 comrobacion de divisibilidad ~~ //

function esDivisiblePor3o5(numero) {
    if (numero % 3 === 0 || numero % 5 === 0) {
        return true;
    }
    return false;
}

console.log(esDivisiblePor3o5(9));  // true (es divisible por 3)
console.log(esDivisiblePor3o5(10)); // true (es divisible por 5)
console.log(esDivisiblePor3o5(7));  // false (no es divisible por 3 ni por 5)

// Explicacion:
// Verificamos si un numero es divisible por 3 o 5, utilizando el operador modulo. SI el residuo de la division por 3 o por 5 es cero ( numero % 3 === 0), entonces el numero es divisible. Esta es una forma eficiente de realizar este tipo de comprobaciones.

