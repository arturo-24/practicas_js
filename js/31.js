//Notification API

const boton = document.querySelector('#boton');
boton.addEventListener('click', ()=>{
    Notification.requestPermission() //notificacion es una API nativa de JavaScript
        .then(resultado => console.log(`El resultado es: ${resultado}`) )
});

if(Notification.permission == 'granted') {
    new Notification('Notifiacion del servidor:', { 
        icon: 'img/img1.jpg',
        body: 'Codigo con Arthur, y los Lobos CTM PASA EL TELEFONO',
    })
};