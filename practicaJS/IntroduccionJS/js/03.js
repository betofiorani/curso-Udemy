// VARIABLES CON CONST

const producto = 'Audifonos Gamer'; // iniciar variable y asignarle valor

const disponible = true; // NO SE PUEDE iniciar variable const sin valor asignado. Para asignarlo en el futuro.

//disponible = true; // NO SE PUEDE cambiar el valor a una variable const.

const producto1 = 'computadora', // Iniciar varias variables juntas y darles valor con esta sintaxis.
    disponible1 = true,
    categoria = 'computadoras';

//const 1producto; no se puede comenzar con un número
//const -producto; tampoco con guión medio
const _producto = true; //guión bajo si se puede.

// ESTILOS DE LAS VARIABLES

const nombre_producto = 'Monitor HD'; // Estilo Underscore
const nombreProducto = 'Monitor HD'; // Estilo Camelcase - Más utilizado en JS
const NombreProducto = 'Monitor HD'; // Estilo Pascal Case - Se usa generalmente para clases
const nombreproducto = 'Monitor HD'; // Estilo Lower Case - No se usa.

// LAS VARIABLES SON CASE SENSITIVE

console.log(producto); // permite mostrar en consola, el valor de la variable.
//console.log(Producto); // No funciona. Producto no está definida.