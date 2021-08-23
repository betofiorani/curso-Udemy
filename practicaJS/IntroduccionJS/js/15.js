// Mas métodos de Arrays

const meses = new Array('Enero','Febrero','Marzo','Abril');

const carrito = [
    {nombre: 'Monitor HD',precio: 1200},
    {nombre: 'Notebook',precio: 41200},
    {nombre: 'Tablet',precio: 4200},
    {nombre: 'Mouse',precio: 500},
    {nombre: 'Parlantes',precio: 400},
    {nombre: 'Play 5',precio: 65400},
];

// forEach

meses.forEach(function(mes){
    if(mes === 'Marzo'){
        console.log('Marzo Está');
    }
});

// Metodo Includes

const resultado= meses.includes('Marzo');
console.log(resultado);

let resultado2 = carrito.includes('Tablet'); // por mas que es un valor del objeto, va a retornar Falso.
console.log(resultado2);

// Metodo Some

resultado2 = carrito.some(function(producto){
    return producto.nombre === 'Tablet';
});

console.log(resultado2);

// Reduce

resultado2 = carrito.reduce(function(total,producto){
    return total + producto.precio;
},0);

console.log(resultado2);

// FILTER

resultado2= carrito.filter(function(producto){
    return producto.precio >400;
});

console.log(resultado2);

resultado2= carrito.filter(function(producto){
    return producto.nombre === 'Tablet';
});

console.log(resultado2);

resultado2= carrito.filter(function(producto){
    return producto.nombre !== 'Tablet';
});

console.log(resultado2);