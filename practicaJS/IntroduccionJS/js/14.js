// ARRAYS o ARREGLOS

// Sintaxis tradicional

const numeros = [1,2,4,5,70,60];

console.log(numeros);
console.table(numeros);

// Sintaxis con constructor

const meses = new Array('Enero','Febrero','Marzo');
console.log(meses);

// Pueden tener cualquier dato dentro. String, booleanos, numeros, objetos, otros arrays, funciones.

const arreglo = ['Hola',2,null, true, [1,2,3,4],{nombre: 'Beto', apellido: 'Fiorani'}];

console.log(arreglo);

// acceder

console.log(arreglo[3]);
console.log(arreglo[0]); // los indices para acceder a los arreglos comienzan en cero.

// conocer extensión del arreglo

console.log(arreglo.length);

// recorrerlos

meses.forEach( function(mes){
    console.log(mes);
});

// METODOS

// agregar elementos
// Si sabemos la extension. Pero no se usa esta manera. Se usa el método Push
numeros[6] = 123; // agregamos el 123 en la posición 6 y sería el 7mo elemento

// si ya existe la posición, le cambia el valor
numeros[5] = 34;

// metodo Push. Agrega al final. Ya no se está usando porque se está tratando de no modificar los arreglos originales.
numeros.push(60);

// metodo unshift. Agrega al inicio.
numeros.unshift(-10);

// Eliminar elementos

meses.splice(3,1); // Elimina desde el índice 3 y 1 solo elemento porque le pasamos 1. 
meses.pop(); // Elimina el último elemento.
meses.shift(); // Elimina el primer elemento.

console.table(numeros);

// Rest operator o Spread operator. Metodo que gana fuerza al no modificar los datos originales.

const nuevoArreglo = [...meses , 'Junio']; // equivalente a Push pero no modifica el original. Lo copia.
const nuevoArreglo2 = ['junio', ...meses]; // equivalente a unshift pero no modifica el original. Lo copia.

console.log(nuevoArreglo);
console.log(nuevoArreglo2);


