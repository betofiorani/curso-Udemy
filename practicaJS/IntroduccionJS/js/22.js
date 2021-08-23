// Estructuras de COntrol

const puntaje = 300;

if(puntaje > 500){
    console.log('soy mayor');
}
else {
    console.log('soy Menor');
}

if(puntaje !== 100){
    console.log('Soy Distinto');
}
else {
    console.log('Soy Igual');
}

// otros operadores

const efectivo = 1000;

const totalApagar = 1200;

if(efectivo >= totalApagar){
    console.log('Me alcanza');
}
else {
    console.log('Me puede fiar?');
}

// Probando el ELSE IF

const usuario = 'Editor';

if(usuario === 'Administrador'){
    console.log('Acceso permitido');
}
else if (usuario === 'Editor'){
    console.log('Podés editar');
}
else {
    console.log('Acceso No permitido');
}