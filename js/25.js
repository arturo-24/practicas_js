// forEach y map

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

//ForEach // Se utiliza unicamente en Arreglos

// carrito.forEach(function(producto) {
//     console.log(producto)
// });

//Cambiamos a arrow

carrito.forEach(producto => console.log(producto));



// Map
// la diferencia entre mat y forEach es que map te crea un neuvo arreglo.
const arreglo2 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2)


