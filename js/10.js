// Objetos 

// Este tema es el que ams se utiliza en JavaScript, debes dominarlo bastante bien.


const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
}


// Ya cuadno ves las llaves {} , es probable que la variable es un objeto

// ~~~~~~~~~~~~~~~~~
// para acceder al precio o una propiedad de la varaible objeto debes colocalro asi, se llama sintasis "punto":

//console.log(producto.precio);
//console.log(producto.nombreProducto);
// Aparecera inmediatamente en al consola de la pagina web.

// Otra sintaxys es asi tambien con corchetes:

//console.log(producto["precio"])

// Seria lo mismo

// Esto es para agregar nuevos propiedades:
producto.imagen = "imagen.jpg"

//Eliminar propiedades
delete producto.disponible;


console.log(producto);