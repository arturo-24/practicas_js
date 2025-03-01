// Funciones  con parametros y argumentos mas inteligentes

function sumar (numero1 = 0, numero2 = 0) { // Los que estna adentro del parentesis son parametros, que seria numero1 y 2.
    console.log(numero2 + numero1);   // el "0" o loe dejarias predeterminado para cuando no tenga los valores completo.
} // recuerda estos valores son parametros que resulvera la suma

sumar (10, 10); // Argumentos o los valores reales
sumar(3, 3);
sumar(3, 6);
sumar(1, ); // Aqui falta 1 valor, y lo sumara con "0"
sumar(); // aqui dara 0 ya qwue no definiste parametros

// Expresion de la funcion 
const sumar2 = function (n1, n2) {
    console.log ( n1 + n2);

}

sumar2 (5, 10);

