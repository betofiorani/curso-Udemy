// Promises

// sintaxis clasica
const usuarioAutenticado = new Promise(function (resolve,reject){
    const auth = false; // figura fulfilled el ejemplo porque le paso true aquí
    if(auth){
        resolve('usuario autenticado'); // el promise se cumple, se ejecuta la funcion asociada a Promise Resolve
    }
    else {
        reject('usuario rechazado'); // el promise NO se cumple, se ejecuta la funcion asociada a Promise Reject
    }

});

// sintaxis arrow function

const usuarioAutenticado2 = new Promise ((resolve,reject) => {
    const auth = true;
    if(auth){
        resolve('usuario autenticado');
    }
    else {
        reject('usuario rechazado');
    }
});

console.log(usuarioAutenticado);

// el promise tiene 3 valores
// 1) pending - pendiente. no se aprobó pero tampoco se rechazo
// 2) fulfilled - el promise se cumplio
// 3) rejected - el promise se ha rechazado


// El promise. como se consiguen los valores?

usuarioAutenticado
.then(function(resultado){ // el resultado es el valor pasado al resolve
    console.log(resultado);
})
.catch(function(error){ // el resultado es el valor pasado al reject
    console.log(error);
});

// con arrow function

usuarioAutenticado2
.then(resultado => console.log(resultado))
.catch(error => console.log(error));