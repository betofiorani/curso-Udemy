
// funciones con parámetros

function multiplicar (numero1,numero2){
    console.log(numero1*numero2);
};

multiplicar(40,4); // llamar a la funcion

// Expresión de la función

const sumar = function (numero1,numero2){
    console.log(numero1+numero2);
};

sumar(35,28);

// pasar parámetros con default

function multiplicar (numero1 = 0,numero2 = 0){
    console.log(numero1*numero2);
};

multiplicar(); // llamar a la funcion sin pasar parámetros. Tomas los default
multiplicar(3,9);
