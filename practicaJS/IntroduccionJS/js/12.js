"use strict"; // De esta manera te aparecen mensajes de error si no se usan buenas prácticas

const producto = {
    nombreProducto: 'Monitor HD',
    precio: 300,
    disponible: true
}

// Impedir que se agreguen propiedades a un objeto

Object.freeze(producto); // Bloquea al objeto. No se pueden ni agregar o quitar propiedades ni cambiar valores.
console.log(Object.isFrozen(producto));
Object.seal(producto); // Bloquea el objeto. Pero si te deja cambiar valores. No agregar ni quitar props.
//producto.imagen = 'imagen.jpg';

console.log(Object.isSealed(producto));
console.log(producto);

