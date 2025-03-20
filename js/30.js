//Promises (promesas)

const usuarioAutenticado = new Promise( (resolve, reject) =>{
    const auth = true;

    if (auth) {
        resolve('El Usuario autenticado'); // El PROOMISE se cumple
    } else{
        reject('No se pudo inicar sesion'); // el promise no se cumple
    }
});

console.log(usuarioAutenticado);

// EN los Promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio.
// Rejeacted : Se ha rechazado o no se pudo cumplir.