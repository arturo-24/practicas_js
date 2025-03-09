// for Loops

// for ( let  i = 0; i < 10; i++) {
//     console.log(i);
// }

// for ( let  i = 0; i <= 100; i++) {
//     if( i % 2 === 0 ) { // realizamos el residuo es 0 signifaca que es par.
//         console.log(`El numero: ${i} es par`)
//     }
//     else {
//         console.log(`el numero es ${i} IMPAR`)
//     }
// }


const carrito = [
    { nombre: 'monitor 20 pulgadas' , precio: 500},
    { nombre: 'Television 50 pulgadas' , precio: 700},
    { nombre: 'Tablet' , precio: 300},
    { nombre: 'Audifonos' , precio: 200},
    { nombre: 'teclado' , precio: 50},
    { nombre: 'celular' , precio: 500},
    { nombre: 'bocina' , precio: 300},
    { nombre: 'laptop' , precio: 800},
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
};

//while Loop

// let i = 0; // Indice
 
// while( i <= carrito.length)  {  // Condicion

//     console.log(carrito[i].nombre)

//     i++; // Incremento
// }



//Do While Loop

let i = 100;

do {
    console.log(i);

    i++;
} while( i < 10);
