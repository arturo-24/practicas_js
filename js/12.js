//"use strict"; // Esto ejecuta a JavaScript la forma estricta que se debe seguir buenas practicas.
// object Methods
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}

// Funcion para prevenir y agregasr objetivos, se debe agregar este codigo:

// Object.freeze(producto); // "Freeze" Esto congela y no permite agregar mas propiedades al variable.

Object.seal(producto) // Parecido con freeze, no te permite agregar o eliminar propiedades.
// Pero si te permite editar las propiedades existentes

producto.imagen = "imagen.jpg";

delete producto.precio; // "obkect.freeze no te permite eliminar, ya que afecta a las propiedades."


console.log(producto);

