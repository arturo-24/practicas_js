// String o cadenas de texto

const producto = "monitor de 20 pulgadas";
const producto2 = 'monitor de 30 pulgadas';
const producto3 = new String('monitor de 50 pulgadas');

console.log(producto);
console.log(producto2);
console.log(producto3);


// Ejemplo siple:

let mensaje = "Hola, Arturo"; // Definiendo una cadena de texto
console.log(mensaje); // Imprime: Hola, Arturo

// Concatenacion de cadenaas
let nombre = "Arturo";
let apellido = "Cochea";
let nombre_completo = nombre + apellido + ' el mejor de la clase WEB';

console.log(nombre_completo);

// Usando constructor New String 

let texto2 = new String("Arturo");

console.log(typeof texto2); // Imprime: object

// Usando .length

const texto3 = "Arturo";
const texto4 = 'davidson el mas borracho de la clase';

console.log(texto4.length); // Imprime: 36


// Usando .indexOf

const texto5 = "Arturo el numero uno de la clase de ingles";
const texto6 = 'Arguello es pana y mi discipulo numero uno'

console.log(texto5.indexOf("uno")); // esto indica en que numero esta posicionado el dicho "uno"
console.log(texto6.indexOf("discipulo")); // esto indica en que numero esta posicionado el dicho "discipulo"

// Usando .includes

const texto7 = "Arturo es el numero uno en la clase de aleman";
const texto9 = "Arguello es malo en la programacion";
const email = 'correo@correo.com';

console.log(texto7.includes("uno")); // Esto imprime true
console.log(texto9.includes("animal")); // Esto imprime false
console.log(email.includes("@")); // Con esto de "@" validamos que el lugar si tiene email disponible.

