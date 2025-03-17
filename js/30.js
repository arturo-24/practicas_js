//Promises (promesas)

const usuarioAutenticado = new Promise( (resolve, reject) =>{
    const auth = true;

    if (auth) {
        resolve('El Usuario autenticado'); // El PROOMISE se cumple
    } else{
        reject('No se pudo inicar sesion'); // el promise no se cumple
    }
});

consoel.log(usuarioAutenticado);