// Estrucutras de Control 
// const puntaje = 1000; 

// if (puntaje !== 1000) { // cuaando colocas dos "==" es de comparacion. y 
//                         // cuando colcas tres "===" es de comparacion extrema.
//                         // cuaando colcoas esto "!==" es que diga que sea adiferente aa 1000
//                         // Pones aal reves de la condicion.
//     console.log('Si el puntaje es 1000')
// } else { // Esto realiza que si el numero que estmaos comparando no es 1000, imrpima que no es  igual.
//     console.log('No es igual a 1000')
// }

//Ejemplo 2
// const efectivo = 200;
// const carrito= 800;

// if (efectivo > carrito) { // Este signo > es "mayor"
//     console.log('El usuaario puede pagar')
// } else {
//     console.log('Te falta plata mi llave.')
// }

// const rol = "ADMINISTRADOR" // Este casao si el rol es  "ADMINISTRAADOR"
const rol = "EDITOR" //Este caso solo no dejaste paasar a "Editor" porque no es aadministrador
if(rol === "ADMINISTRADOR") {
    console.log('Acceso a todo el sistema')
} else {
    console.log('No tienes chance de entrar')
}
