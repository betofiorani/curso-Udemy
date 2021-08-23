// PROGRAMACION ORIENTADA A OBJETOS - POO

// Objetos - sintaxis literal

const producto = {
    nombre: 'monitor',
    precio: 1500,
    categoria: 'tecno'
}

// Objetos - usando constructor

function Producto (nombre,precio,categoria){ // clases y objetos mejor con mayuscula
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
} 

const producto2 = new Producto('Monitor',5000,'Monitores');

console.log(producto2);

// prototypes

function formatearProducto(producto){
    console.log(`El producto ${producto.nombre} cuesta $ ${producto.precio}`);
}

formatearProducto(producto2);

// El problema así es que deberíamos hacer muchísimas funciones para cada objeto de ese tipo...

// El prototype es crear funciones que estén disponibles para un tipo de objeto específico.

Producto.prototype.formatearProducto = function (){
    console.log(`El producto ${this.nombre} cuesta $ ${this.precio}`);
};

// como lo usamos
producto2.formatearProducto();