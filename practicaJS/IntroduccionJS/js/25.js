const carrito = [
    {nombre: 'Monitor HD',precio: 1200},
    {nombre: 'Notebook',precio: 41200},
    {nombre: 'Tablet',precio: 4200},
    {nombre: 'Mouse',precio: 500},
    {nombre: 'Parlantes',precio: 400},
    {nombre: 'Play 5',precio: 65400},
];

// ForEach con arrow function
carrito.forEach(producto =>console.log(producto.nombre));

// ForEach sintaxis clásica
carrito.forEach(function(producto){
    console.log(producto.precio);
});

// Map con arrow function
carrito.map(producto =>console.log(producto.nombre));

// Map sintaxis clásica
carrito.map(function(producto){
    console.log(producto.precio);
});

// diferencia entre forEach y map: Map crea otro array. Y se puede almacenar. El forEach solo itera. no almacena un nuevo array.