// POO (programacion orientado a objeto)

// Objeto literal 
// const producto = {
//     nombre: 'tablet',
//     precio: 500,
// };

// Object Constructor -- No es tan comun esta clase
function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} $${this.apellido} se casara`;
}


function Producto(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
}


//El prototype nos permite crear funcion que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800, 'LG');
const producto3 = new Producto('Laptop de 26"', 1800, 'Asus');
const producto4 = new Producto('CPU Gamer"', 3800, 'Corsa');
const producto5 = new Producto('Keyborad keychrin"', 180, 'Patito');
const cliente = new Cliente ('Arturo' , 'Cochea');




// function formatearProducto(producto) {
//     return `El ${producto.nombre} tiene un precio de: $${producto.precio}`;
// }

console.log(producto2);
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());


 

