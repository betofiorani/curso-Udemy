// Funciones que retornan un valor
function sumar (n1,n2){
    return n1 + n2;
};

sumar(4,13); // no muestra nada en consola ahora.

const resultado = sumar (12,17);

console.log(resultado);

// Más avanzado

let total = 0;

function agregarCarrito (precio){
    return total += precio;
};

total = agregarCarrito(400);
total = agregarCarrito(600);

function calcularImpuestos (total){
    return total * 1.21;
}

console.log(total);

const totalAPagar = calcularImpuestos(total);

console.log(`El total a pagar es: ${totalAPagar}`);