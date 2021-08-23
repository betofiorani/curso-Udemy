document.addEventListener('DOMContentLoaded',function(){
    crearGaleria();
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria__imagenes');
    for (let i = 1 ; i<=12 ;i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i; // si le ponemos el nombre al atributo imagenId en el html lo va a etiquetar como data-imagen-id todo en minuscula
        imagen.onclick = mostrarImagen;
        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen (e){
    // convertimos el ID en número porque era un string
    const id = parseInt(e.target.dataset.imagenId);
    // creamos una variable que almacene la imagen
    const imagenGrande = document.createElement('IMG');
    // le asignamos el source a la imagen.
    imagenGrande.src = `build/img/grande/${id}.webp`;
    // creamos la variable que almacene el contenedor
    const overlay = document.createElement('DIV');
    // le agregamos clases al contenedor
    overlay.classList.add('overlay');
    // agregamos la imagen al contenedor
    overlay.appendChild(imagenGrande);
    // agregamos boton para cerrar
    const botonCerrar = document.createElement("P");
    botonCerrar.textContent = 'X';
    botonCerrar.classList.add('botonCerrar');
    overlay.appendChild(botonCerrar);

    // funcion cerrar
    botonCerrar.onclick = function (){
        overlay.remove();
    }
    overlay.onclick = function () {
        overlay.remove();
    }
    // mostramos el contenedor en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}