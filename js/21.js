// Arrow Function

const sumar2 = (n1, n2 ) => console.log ( n1 + n2);

sumar2(5 , 10);


const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`)


aprendiendo('JavaScript');





//////////////


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
meses.forEach  (mes => {
    if(mes = "Marzo"){
        console.log('Marzo si existe');
    };
});



// "Some" ideal apra arreglos de objetos 
// Este sirve mas para el segundo ejemplo de carrito:
let resultado
resultado = carrito.some(producto => producto.nombre === 'celular'); // hay otro manera mas coto de codigo: 

resultado = carrito.some(function(producto) {
    return producto.nombre === 'celular '
}) // este ejercicioo no esta con arrow function epro el de arriba si, para saber la diferencia.


// Como sacar la totliadad a apgar: 
//Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);// otro estilo mas corot de codigo:



resultado = carrito. reduce((total, producto) => total + producto.precio, 0);



//filter, es el as utilizado
resultado = carrito.filter (producto => producto.precio > 400);


resultado = carrito.filter(producto => producto.nombre !== 'celular') // esto trae a la lsita solo los q tenga palabra celular.);



resultado = carrito.filter(producto => producto.nombre !== 'celular'); // Esto trae todos a la lista menos la propeidad celular.


console.log(resultado);