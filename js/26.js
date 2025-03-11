// This 
//this hace referencia al mismo objeto que se esta llamando en la funcion.
//Diferencia de this y un arros function es que arrow hace referencia a un "windows" en la consola.
// A la venta global
//this hace referencia a las propiedades del objeto sobre cual se esta ejecutando dicha funcion.
const reservacion = {
    nombre: 'Arturo',
    apellido: 'Cochea',
    total: '500',
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    },
}

const reservacion2 = {
    nombre: 'Kish',
    apellido: 'De la perra',
    total: '330',
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    },
}

reservacion.informacion();

reservacion2.informacion();
