// Iteradores o Bucles

// FOR

for(let i=0 ; i<=5; i++){
    if(i % 2 === 0){
        console.log(`El número ${i} es par`);
    }
    else {
        console.log(`El número ${i} es impar`);
    }
}

// For y los Arrays!

const carrito = [
    {nombre: 'Monitor HD',precio: 1200},
    {nombre: 'Notebook',precio: 41200},
    {nombre: 'Tablet',precio: 4200},
    {nombre: 'Mouse',precio: 500},
    {nombre: 'Parlantes',precio: 400},
    {nombre: 'Play 5',precio: 65400},
];

for(let i = 0 ; i<carrito.length ; i++){

    console.log(`Nombre: ${carrito[i].nombre} Precio: ${carrito[i].precio}`);
};

// WHILE

let i=0;
while(i<=10){
    if(i % 2 === 0){
        console.log(`El número ${i} es par`);
    }
    else {
        console.log(`El número ${i} es impar`);
    }
    i++;
};

// DO WHILE - La diferencia es que el código se ejecuta al menos 1 vez. Porque primero hace luego evalua la condicion

i = 0;

do {
    console.log(i);
    i++;
} while (i<=10);