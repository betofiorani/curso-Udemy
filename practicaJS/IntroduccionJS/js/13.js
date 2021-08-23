// Unir objetos sin modificar los originales.

const producto = {
    nombreProducto: 'Monitor HD',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    pulgadas: '20'
}

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);