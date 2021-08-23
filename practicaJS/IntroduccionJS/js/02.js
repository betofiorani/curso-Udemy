// VARIABLES CON LET y CONST

let producto = 'Audifonos Gamer'; // iniciar variable y asignarle valor

let disponible; // iniciar variable sin valor asignado. Para asignarlo en el futuro.

disponible = true; // le cambiamos el valor a la variable. Incluso de tipo de datos. JS es dinámico.

let producto1 = 'computadora', // Iniciar varias variables juntas y darles valor con esta sintaxis.
    disponible1 = true,
    categoria = 'computadoras';

//let 1producto; no se puede comenzar con un número
//let -producto; tampoco con guión medio
let _producto; //guión bajo si se puede.

// ESTILOS DE LAS VARIABLES

let nombre_producto = 'Monitor HD'; // Estilo Underscore
let nombreProducto = 'Monitor HD'; // Estilo Camelcase - Más utilizado en JS
let NombreProducto = 'Monitor HD'; // Estilo Pascal Case - Se usa generalmente para clases
let nombreproducto = 'Monitor HD'; // Estilo Lower Case - No se usa.

// LAS VARIABLES SON CASE SENSITIVE

console.log(producto); // permite mostrar en consola, el valor de la variable.
//console.log(Producto); // No funciona. Producto no está definida.