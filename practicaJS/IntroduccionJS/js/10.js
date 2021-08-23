// OBJETOS

const nombreProducto = 'Monitor HD';
const precio = 300;
const disponible = true;

// Colocamos 3 variables en 1 sola variable de tipo Objeto donde cada variable pasa a ser una propiedad.
const producto = {
    nombreProducto: 'Monitor HD',
    precio: 300,
    disponible: true
}

console.log(producto);

// Accesos a los valores

// Sintaxis de punto

console.log(producto.precio);

// Sintaxis literal

console.log(producto['nombreProducto']);

// Agregar propiedad

producto.imagen = 'imagen.jpg' // Agregamos usando sintaxis de punto.

// Eliminar Propiedad
delete producto['disponible']; // usamos sintaxis literal
console.log(producto);