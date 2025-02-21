//Arreglos o Arrays
// Ejemplo de un arregom seria un carrito de compras.
// Sirven para agrupar elementos del mismo tipo o relacioandos.
//Un lsitaod me megustas o de agregar personas.

const numeros = [10,20,30,40,50]

console.table(numeros) // puedes colocar".log" pero mejor el arreglo veras en una tabla que utiliza "table".




// // Acceder a los valores del arreglo.
// console.log(numeros[4]); //Esto accede a una propiedad de un "arreglo", dejando el numero que esta declarando.
// console.log(numeros[20]); // No saldra la propeidad ya que en el arreglo que marcaste no detalla la posicion 20. 
// console.log(numeros[3]); 


// //Conocer las extensiones de un arreglo
// console.log(meses.length); // Esto determina cuantos elementos hay en dicho "Arreglo"

// meses.forEach( function(numero){
//     console.log(numero);
// }) // Esto presenta cada propiedad que tenga un aarreglo, en sencillos pasos.
// // Tambien hay otro llamado "for" pero en cambio "forEach" es mas apropieado para JavaScript.
// // Esto ayuda en mostrarte en los carritos de compra que es lo que llevas en si.


// TEMA AHORA: METODOS PARA LOS ARRAYS
// numeros [5] = 60;// forma de agregar un arreglo y luego actualizarlo con otro "console.table(numeros)"

numeros.push(60,70,80); // El "push" agrega al ultimo de la tabla los nuevos propeidades facil y sencillo.
// Desventajas del "push", se recomienda no modificar los arreglos origianles, poco a poco la gente olvida.

numeros.unshift(-10,-20,-30);// Agrega al inciio de un "arreglo" las nuevas propeidades, a diferencia de push.

// Para eliminar elementos de un arreglo


const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo')

// meses.pop(); // Elimina el ultimo elemento.
// meses.shift(); // Elimina la priemra propeidad del arreglo.

// meses.splice(2, 2); // Esto elimina la propiedad que tu identificas, el primer "2" es el lugar y el otro "2" es la cantiada que borras desde dicho lugar.

// console.table(meses)
// console.table(numeros);

// Desventajas:
//  Modifica demasiado el arreglo original. Un enfoque que esta ganando fuerza, es mantener el arreglop original.

//Rest Operator o Spread Operator
const nuevoArreglo = [...meses, "junio" , "Julio"];
console.log(nuevoArreglo)
// Esta forma esta bien visto hoy en dia para edita run arreglo".