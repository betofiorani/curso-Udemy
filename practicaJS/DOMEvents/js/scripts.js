// formas de seleccionar contenido

// querySelector

const heading = document.querySelector('.header__texto h2');
//const heading2 = document.querySelector('#heading'); // se puede utilizar ID. Es la práctica recomendada

console.log(heading);
//console.log(heading2);

// cambiar el contenido
//heading.textContent = 'Probando textContent';
// agregar una clase
//heading.classList.add('probando');

// retorna cero o un elemento

// querySelectorAll selecciona todas. a diferencia del primero.

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
// para acceder a 1 solo.
console.log(enlaces[0]);
// para cambiar texto
//enlaces[0].textContent = 'probando';

// se puede ejecutar en una línea
// document.querySelectorAll('.navegacion a')[0].textContent = 'prueba';

// Cambiar destino del enlace
//enlaces[0].href = 'https://www.google.com/';

// getElementById

const heading3 = document.getElementById('heading');
console.log(heading3);


// crear elementos. generar un nuevo enlace

const nuevoEnlace = document.createElement('A');
console.log(nuevoEnlace);

// agregar href
nuevoEnlace.href = 'https://www.google.com/';
// agregar text
nuevoEnlace.textContent = 'buscar en google';
// agregar clase
nuevoEnlace.classList.add('navegacion__enlace');
// agregar el enlace al html
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(nuevoEnlace);

// EVENTOS

console.log(1);

window.addEventListener('load', function(){ // Load es un evento que espera que todo el js y los archivos del HTML estén listos.
    console.log(2);    
});

window.onload = function () {  // otra sintaxis de registrar el evento load.
    console.log(3);
}

// otro evento
document.addEventListener('DOMContentLoaded', function (){ // solo espera que se descargue el html.
    console.log(4);
});

console.log(5);

window.onscroll = function(){
    console.log('scroleando');
};

// seleccionar elementos y asignarles un evento

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     console.log('enviando');
// });

// Eventos de los inputs y textareas

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
};

const inputNombre = document.querySelector('#nombre');
const inputEmail = document.querySelector('#email');
const inputMensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

inputNombre.addEventListener('input', leerInput);
inputEmail.addEventListener('input', leerInput);
inputMensaje.addEventListener('input', leerInput);
formulario.addEventListener('submit',validarForm);// Evento de submit

function leerInput(evento){
    console.log(evento.target.value);
    datos[evento.target.id] = evento.target.value;

    console.log(datos);
};

function validarForm(evento){
    evento.preventDefault();
    const {nombre,email,mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarMensaje('No puedes dejar campos vacíos','error');
        return; // return en un if dentro de una función, corta el código.
    }

    mostrarMensaje('Tu consulta fue enviada con éxito','exito');        

    console.log('enviando form');
};

function mostrarMensaje (textoMensaje,tipoMensaje){
    
    const mensaje = document.createElement('P');
    mensaje.textContent = textoMensaje;

    if(tipoMensaje === 'error'){    
        mensaje.classList.add('error');
    }
    else if (tipoMensaje === 'exito'){
        mensaje.classList.add('correcto');
    }

    formulario.appendChild(mensaje);
    
    // desaparecer el mensaje de error en 5 segundos
    setTimeout(() => {
        mensaje.remove();    
    }, 5000);
};