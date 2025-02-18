// Concatenacion y TEmplate Strings
const nombre = "Arturo";
const email = "correo@correo.com";

console.log(nombre + " " + email); // esto es concatenacion, agregar dos en una sola linea.
                                // TAmbien se puede colcoar comas ",", para separar elementos.

console.log("Nombre Cliente: " + nombre + "  " + "Email:" + email); // Esto es otra forma de expresar.


//Template Strings -- String literals 
console.log(`Nombre Cliente: ${nombre} Email: ${email}` );
// Explicacion:
// Template Strings son una forma de expresar strings en JavaScript.
// cuando colocas "${}" estas ddeterminando un varbile, por ende puede ser nombre o email."
// No te olvides colcoar estos tipos de comillas que es alado del 1 ==> ``