//Async /await // Es la base de todo desarrollador moderno en los lenguajes.

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere..');

        setTimeout( () =>{
            resolve('Los Clientes fueron descargados')
        }, 5000);

    });
}

function descargarUltimoPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere..');

        setTimeout( () =>{
            resolve('Los Pedidos fueron descargados')
        }, 3000);

    });
}

async function app() { //asincronica
     try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimoPedidos();
        // console.log(clientes); //Para evitar el tiempo de pedidos debemos realizar un array


        const resultado = await Promise.all([ descargarNuevosClientes() , descargarUltimoPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
            //Y es asi como podemos optimizar un llamado de async and await. ahrao tarda solo 5s y juntos sale.
     } catch (error) {
        console.log(error);
     }
 };

 app();

 console.log('Este codigo no se bloquea');