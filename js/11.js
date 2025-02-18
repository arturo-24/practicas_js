// Destructuring de objetos
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

//forma anterior
//const precioProducto = producto.precio;
//const nombreProducto = producto.nommbreProducto;

//console.log(precioProducto)
//console.log(nombreProducto)

// Destructuring 
// Sacar una propiedad de una estructura o en este caso seria "objeto"

const {precio , nombreProducto} = producto;
 

console.log(precio);