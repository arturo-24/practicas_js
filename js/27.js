// POO (programacion orientado a objeto)

// Objeto literal 
// const producto = {
//     nombre: 'tablet',
//     precio: 500,
// };

// Object Constructor -- No es tan comun esta clase
function Producto(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
}


const producto2 = new Producto('Monitor Curvo de 49"', 800, 'LG');
const producto3 = new Producto('Laptop de 26"', 1800, 'Asus');
const producto4 = new Producto('CPU Gamer"', 3800, 'Corsa');
const producto5 = new Producto('Keyborad keychrin"', 180, 'Patito');

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

