// escribir funciones que trabajen como métodos de propiedad

const reproductor = {
    reproducir : function(){
        console.log('Reproduciendo Canción');
    }
};

reproductor.reproducir();

// ahora más inteligente jajaja

const reproductor1 = {
    reproducir : function(idCancion){
        console.log(`Reproduciendo Canción N° ${idCancion}`);
    },
    pausar : function(idCancion){
        console.log(`Canción N° ${idCancion} pausada`);
    },
    crearPlaylist: function(nombre){
        console.log(`Playlist ${nombre} creada exitosamente`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo Playlist ${nombre}`);
    }
};

reproductor1.reproducir(4000);
reproductor1.pausar(3400);

// Se pueden agregar funciones como métodos de propiedad al objeto

reproductor1.borrarCancion = function(idCancion){
    console.log(`Canción N° ${idCancion} borrada exitosamente`);
};

reproductor1.borrarCancion(3);
reproductor1.crearPlaylist('Lentos en Ingles');
reproductor1.reproducirPlaylist('Cuarteto');