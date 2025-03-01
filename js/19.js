// // funciones que retornan valores

// function sumar (n1 , n2) {
//     return n1 + n2;

// }

// const resultado = sumar(2 , 3)

// console.log(sumar) // orden de como funciona: Sumar (2,3) ingresa, haciendo que coja los aprametros de function,
//                   //  y despues regresa con "Return" ya sumada, y lo remplaza a la palbra "resultado".

// Ejercicio mas avanzado:

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total){
    return 1.15 * total;
}

function calcularDescuento (total){
    return 0.20* total;
}

total = agregarCarrito(200);
total = agregarCarrito(500);
total = agregarCarrito(400);
total = agregarCarrito(300);

console.log(total);

const totalApagar = calcularImpuesto(total);

console.log(`El total a pagar ante impuestos: $${totalApagar}`); //recuerda que ` ` sirve apra agregar texto con varaible

const totalDescueto = calcularDescuento(total);

console.log(`El total a pgar con el Descuento: $${totalDescueto}`);


const TotalCancelar = (totalApagar - totalDescueto)
console.log(`Total de cancelar tu movida: $${TotalCancelar}`);