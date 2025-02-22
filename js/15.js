// Mas metodos Arrays 
// Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

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

// forEach 
meses.forEach(function(mes) {
    if(mes = "Marzo"){
        console.log('Marzo si existe');
    };
});

// Includes 
let resultado = meses.includes('Marzo');
// console.log(resultado); // Para areglos de objeto entre los emses y el carrito, en el carrito no podras utilizar este "includes"



// "Some" ideal apra arreglos de objetos 
// Este sirve mas para el segundo ejemplo de carrito:

resultado = carrito.some(function(producto){
    return producto.nombre == 'celular'
}) // hay otro manera mas coto de codigo: 


resultado = carrito.some(producto => producto.nombre === 'macbook');

console.log(resultado);

// Como sacar la totliadad a apgar: 
//Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);// otro estilo mas corot de codigo:

resultado = carrito. reduce((total, producto) => total + producto.precio, 0);

console.log(resultado);

//filter, es el as utilizado
resultado = carrito.filter(function(producto) {
    return producto.precio > 400
});

resultado = carrito.filter(function(producto) {
    return producto.nombre === 'celular' // esto trae a la lsita solo los q tenga palabra celular.
});

resultado = carrito.filter(function(producto) {
    return producto.nombre !== 'celular' // Esto trae todos a la lista menos la propeidad celular.
});

console.log(resultado);