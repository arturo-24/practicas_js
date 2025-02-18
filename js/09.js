// Booleans 

// Algo que tiene importante los booleans solo debe tener dos valores, como el True and False.
// Se utiliza para medir las tomas de decisiones en un codigo.

const boolean1 = true;
const boolean2 = false;


console.log(boolean1);
console.log(boolean2);


// Explicacion:
// Cuando un usuario no esta autenticado a uan informacion, hace que "false" par aque no intervenga o en este caso observe informacion privada.

const boolean3 = new Boolean(true);

console.log(boolean3); // Este indicar un objeto.  



// Ejemplo 1: Autenticacion de usuarios.

// Cuando un usuario itena ingresar a una pagina y verifica usuario y paswword y si es corercta todo, es  "true"
// Y si no es correcta se devuelve "false", lo que significa que el usuario y password no es la correctaa.

let isAuthenticated = true; // El usuario está autenticado
if (isAuthenticated) {
    console.log("Acceso concedido");
} else {
    console.log("Acceso denegado");
}

//Explicacion: 
//Mediante la explicacion la variable "isAuthenticated" puede ser true and false:
//Ya  que abajo determina en al consola en el momento de concidir en la basae de datos, le dara orden de
//Concedido o denegado.


// Ejemplo 2: Verificar disponibilidad de un producto
// En un sistema de inventario, puedes verificar si un producto esta disponible en stock o no esta.
// Si sew encuentra disponible, devolvera true, si no hay, devovlera false.

let isInStock = false; // El producto no está disponible por defecto.
if (isInStock) {
    console.log("Producto disponible");
} else {
    console.log("Producto agotado");
}

// Si en caso desea ver el producto esta disponible o no utilizamos un variable llamado isInStock"
// Este varaible se utiliza mas en este tema ya que es tipico en als base de datos.


// Este ejemplo no podremos utilizarlo porque ya utilizamos su varaible dos veces.
// Puedes asignar otro variable que reemplace la funcion  de "isInStock"
//let isInStock = checkInventory(productId); // Imagínate que 'checkInventory' consulta la base de datos y retorna true/false.

if (isInStock) {
    console.log("Producto disponible");
} else {
    console.log("Producto agotado");
}



