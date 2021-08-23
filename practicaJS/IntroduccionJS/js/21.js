// ARROW FUNCTIONS

// Estas es la expresión de la función. Sobre esta se basa Arrow functions
const sumar = function (n1,n2) {
    return n1 + n2;
}

console.log(sumar(4,5));

// Si la escribimos como arrow functions quedaría

const sumar1 = (n1,n2) => n1 + n2;

console.log(sumar1(23,15));

// Funciones más complejas

const aprendiendo = (lenguaje) => {
    console.log(`Aprendiendo ${lenguaje}`)
};

aprendiendo('Javascript');

// Si es una sola línea, se pueden quitar las llaves

const aprendiendo1 = (lenguaje) => console.log(`Aprendiendo ${lenguaje}`);

aprendiendo1('Javascript');

// Se potencia con arrays

const meses = new Array('Enero','Febrero','Marzo','Abril');

const carrito = [
    {nombre: 'Monitor HD',precio: 1200},
    {nombre: 'Notebook',precio: 41200},
    {nombre: 'Tablet',precio: 4200},
    {nombre: 'Mouse',precio: 500},
    {nombre: 'Parlantes',precio: 400},
    {nombre: 'Play 5',precio: 65400},
];

// forEach convertido en arrow function

meses.forEach((mes) => {
    if(mes === 'Marzo'){
        console.log('Marzo Está');
    }
});

// Metodo Some con Arrow function

resultado2 = carrito.some((producto) =>{
    return producto.nombre === 'Tablet';
});

console.log(resultado2);

// Reduce

resultado2 = carrito.reduce((total,producto)=>{
    return total + producto.precio;
},0);

console.log(resultado2);

// FILTER

resultado2= carrito.filter((producto) => {
    return producto.precio >400;
}); 

// El return es opcional cuando es una sola línea.

console.log(resultado2);

resultado2= carrito.filter(producto => producto.nombre === 'Tablet');

console.log(resultado2);

resultado2= carrito.filter((producto) => {
    return producto.nombre !== 'Tablet';
});

console.log(resultado2);
