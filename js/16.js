// Funciones JavaScript 
// SOn una serie de procedimiento o instrucciones que realizan una accion.
// Ventaja: te permite tener un codigo mas ordenado y facil de mantener. Son reutilizables las funciones.
// Existe 3 formas de crear funciones: declaraciond e funcion, expresion de la funcion y IIFE.


//Declaracion de funcion
function sumar () {
    console.log(10 * 10);
}

sumar () // si tu no delcaras esto, es como un "console.log" no te va a imprimir la funcion. no te olvides colocar los parentesis.



//expresion de la funcion 
const sumar2 = function () {
    console.log ( 3 + 3);

}

sumar2 ();

// IIFE (Estas funciones se mandan a llamar ellas mismas) no se recomiendan para reutilizarse.
// Tambien previenen que la function no entre contacto con otro archivo o libreria con el cual estas trabajando.
// Protege a las varaibles y funciones para que no se mesclen con otros archivos
// (function() {
//     console.log('Esto es una funcion ')
// }) ();

