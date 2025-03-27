// Fetch Api

async function obtenerEmpleados() {   
    const archivo = "js/empleados.json"; 

    // fetch(archivo)  
    //     .then( resultado => resultado.json()) // tienes que dejar marcado que lo que deseas ver es un resultado tipo "json o text"
    //     .then( datos => {
    //         // console.log(datos.empleados);

    //         const {empleados} = datos;
    //         console.log(empleados); //distructioring
    //     });

        const resultado = await fetch (archivo);
        const datos = await resultado.json();
        console.log(datos);

    }

obtenerEmpleados(); 

// JavaScript los tratara como bojeto para poder facilitar el reconocimietno del documento
//hay un formato 