// Metodos de propiedad
const reproductor = {
    reproducir : function (id){
        console.log(`Reproduciendo Cancion con su respectivo ID: ${id}`)
    },

    pausar: function () {
        console.log('pausando...')
    },

    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },

    reproducirPlaylist: function(nombre) {
        console.log(`Reproducir cancion de la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la cancion: ${id}`)
}

console.log(reproductor);

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(34);
reproductor.crearPlaylist('Ella ya me olvido - Leonardo Favio');
reproductor.reproducirPlaylist('A puro dolor')
