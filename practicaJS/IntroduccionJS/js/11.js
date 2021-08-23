const producto = {
    nombreProducto: 'Monitor HD',
    precio: 300,
    disponible: true
}
// Forma anterior de obtener valores de un objeto y almacenarlos en variables.
const precioProductoAnt = producto.precio;
const nombreProductoAnt = producto.nombreProducto;

console.log(precioProductoAnt);
console.log(nombreProductoAnt);

// Forma actual - Destructuring

//const {precio} = producto;
//const {nombreProducto} = producto;

const {precio, nombreProducto} = producto; // Se pueden declarar las variables y asignarles valor en una sola linea


console.log(precio);
console.log(nombreProducto);