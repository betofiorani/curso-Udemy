// DECLARACION DE FUNCIONES

function multiplicar (){
    console.log(10*10);
};

multiplicar(); // llamar a la funcion

// Expresión de la función

const sumar = function (){
    console.log(3+3);
};

sumar();

// IIFE - funcion que se ejecutan solas

(function(){
    console.log('Esto es una funcion IIFE');
})();

// Diferencia entre las 2 primeras.
// La primera opción, funciona el llamado a la función independientemente del orden

// funciona correctamente porque JS primero registra las variables y funciones
// Luego ejecuta los llamados. Con la funcion fue relevada en la primera lectura, 
// la ejecuta correctamente aunque el llamado sea anterior a su definición.
multiplicar(); 
function multiplicar (){
    console.log(10*10);
};

// En esta otra sintaxis no funciona. Porque no lee la función como function si no como una variable
// Por lo tanto arroja error en la consola.
sumar();
const sumar = function (){
    console.log(3+3);
};


