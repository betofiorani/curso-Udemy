// clases
// Antes de la ES6 que revolucionó JS, las clases se armaban con una function colocada en el prototype.
// Ahora se hace más fácilmente.

class Producto { // las clases empiezan con Mayúscula. Por convención. Pero no es algo obligatorio.
    constructor(nombre,precio){ // sería como una función
        this.nombre = nombre;
        this.precio = precio;
    };
    formatearProducto (){
        return `El producto ${this.nombre} cuesta $ ${this.precio}`;
    };
    consultarPrecio (){
        return `El precio del producto ${this.nombre} es $ ${this.precio}`;
    };
}

// instanciamos un producto1 con la clase Producto
const producto1 = new Producto('Monitor',500);
const producto2 = new Producto('Tablet',300);

console.log(producto1);
console.log(producto2);
console.log(producto1.formatearProducto());
console.log(producto2.consultarPrecio());

// HERENCIA

class Libro extends Producto {  // Libreo con extends hereda los constructores y las funciones que tiene Producto
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    } 
}

const libro1 = new Libro('Harry Postre',1200,'24234242342');

console.log(libro1);

console.log(libro1.formatearProducto());