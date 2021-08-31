let pagina = 1; // variable global. disponible en todo el archivo
const turno = {
    nombre: '',
    fecha: '',
    hora: '',
    servicios: []
};

document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp(){
    mostrarServicios();
    // resalta navegacion
    mostrarSeccion();
    // cambia div
    cambiarSeccion();
    // paginacion
    paginaSiguiente();
    paginaAnterior();
    // botones Paginador
    botonesPaginador();
    // mostrar resumen del turno o error
    mostrarResumen();
    // almacena nombre del cliente
    nombreCliente();
    // almacena y valida fecha
    fechaTurno();
    // deshabilitar las fechas anteriores
    deshabilitarFechas();
    // almacena la hora
    horaTurno();
};

function mostrarSeccion(){

    //eliminar clase mostrar-seccion en elemento anterior
    const seccionAnterior = document.querySelector('.mostrar-seccion');
    if(seccionAnterior){
        seccionAnterior.classList.remove('mostrar-seccion');
    }
    // eliminar clase actual de los tab
    const enlaceAnterior =document.querySelector('.tabs .actual');
    if(enlaceAnterior){
        enlaceAnterior.classList.remove('actual');
    }

    const seccionActual = document.querySelector(`#paso${pagina}`);
    seccionActual.classList.add('mostrar-seccion');

    // resaltar la pestaña actual
    const tabActual = document.querySelector(`[data-paso='${pagina}']`);
    tabActual.classList.add('actual');
}

function cambiarSeccion(){
    const enlaces = document.querySelectorAll('.tabs button');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', evento => {
            evento.preventDefault();
            pagina = parseInt(evento.target.dataset.paso);
            mostrarSeccion();
            botonesPaginador();
        }) 
    })

}

async function mostrarServicios(){
    try {
        const resultado = await fetch('./servicios.json');
        const db = await resultado.json();
        const {servicios} = db // deconstructing es lo mismo que const servicios = db.servicios

        // generar el html
        servicios.forEach( servicio => {
            const {id,nombre,precio} = servicio; // deconstructing. Crea las variables con los valores de cada propiedad
            
            // DOM scripting
            // genero el nombre
            const nombreServicio = document.createElement('P');
            nombreServicio.classList.add('nombreServicio');
            nombreServicio.textContent = nombre;
            // Genero el precio
            const precioServicio = document.createElement('P');
            precioServicio.classList.add('precioServicio');
            precioServicio.textContent = `$ ${precio}`;
            // genero el div contenedor 
            const contenedorServicio = document.createElement('DIV');
            contenedorServicio.classList.add('contenedorServicio');
            // incorporo nombre y precio al div
            contenedorServicio.appendChild(nombreServicio);
            contenedorServicio.appendChild(precioServicio);  
            // Inyectarlo al HTML
            document.querySelector('#servicios').appendChild(contenedorServicio);    
            // Selecciona un servicio para la cita.
            contenedorServicio.onclick = seleccionarServicio;
            contenedorServicio.dataset.idservicio = id;
        })
    } catch (error) {
        console.log(error);
    }
};

function seleccionarServicio(e){
    let elemento;
    if(e.target.tagName === 'P'){
        elemento = e.target.parentElement;
    }
    else {
        elemento = e.target;
    }
    // creamos un objeto con los servicios
    
    // console.log(serviciosObj);
    if(elemento.classList.contains('seleccionado')){
        elemento.classList.remove('seleccionado');  
        const id = parseInt(elemento.dataset.idservicio);
        eliminarServicio(id);  
    }
    else {
        elemento.classList.add('seleccionado');
        const serviciosObj = {
            id : parseInt(elemento.dataset.idservicio),
            nombre : elemento.firstElementChild.textContent,
            precio : elemento.firstElementChild.nextElementSibling.textContent
        }
        agregarServicio(serviciosObj);
    }
}

function agregarServicio(serviciosObj){
    
    const {servicios} = turno; //destructuring para trabajar con el array de servicios del objeto turno.
    turno.servicios = [...servicios,serviciosObj]; // le agregamos a turno servicios una copia de lo que tenía y obtuvimos con destructuring (los 3 puntos suspensivos) y le agregamos lo que traemos en la funcion
};

function eliminarServicio(id){
    const {servicios} = turno; //destructuring para trabajar con el array de servicios del objeto turno.
    turno.servicios = servicios.filter(servicio => {
        return servicio.id !== id;
    });
}

function paginaSiguiente(){
    const paginaSiguiente = document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click', evento =>{
        pagina++;
        botonesPaginador();
    });   
}

function paginaAnterior(){
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', evento =>{
        pagina--;
        botonesPaginador();
    });
}

function botonesPaginador(){
    const paginaAnterior = document.querySelector('#anterior');
    const paginaSiguiente = document.querySelector('#siguiente');

    if(pagina === 1){
        paginaAnterior.classList.add('ocultar');
    }
    else if(pagina === 3) {
        paginaSiguiente.classList.add('ocultar');
        paginaAnterior.classList.remove('ocultar');
        mostrarResumen();
    }
    else {
        paginaAnterior.classList.remove('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    }
    mostrarSeccion();
    
}

function nombreCliente(){
    const nombreInput = document.querySelector('.campo #nombre');
    nombreInput.addEventListener('input',evento =>{
        const nombre = evento.target.value.trim();
        if(nombre.length <3){
            mostrarAlerta('Debe ingresar un nombre Válido','error');
        }
        else {
            const alerta = document.querySelector(".alerta");
            if(alerta){
                alerta.remove();
            } 
            turno.nombre = nombre;
        }
    });
}

function mostrarResumen() {
     // Destructuring

    const {nombre,fecha,hora,servicios} = turno;

    const resumenDIV = document.querySelector('.contenido-resumen');
    
    // limpiar le html previo
    // resumenDIV.innerHTML = ''; no se usa porque es lento
    while(resumenDIV.firstChild){
        resumenDIV.removeChild(resumenDIV.firstChild);
    }
    // validar que existan servicios seleccionados y datos del formulario.
    if(Object.values(turno).includes('')){
        const mensaje = document.createElement('P');    
        mensaje.textContent = 'Debe seleccionar al menos un Servicio y completar el formulario';
        mensaje.classList.add('invalidar-cita');
        resumenDIV.appendChild(mensaje);
        //return; // se puede colocar return y evitar los else.
    
    }
    else {
        const datosTurno = document.createElement('H3');
        datosTurno.textContent = 'Info del Turno';
        const nombreTurno = document.createElement('P');
        nombreTurno.innerHTML = `<span>Nombre:</span> ${nombre}`;
        const fechaTurno = document.createElement('P');
        fechaTurno.innerHTML = `<span>Fecha:</span> ${fecha}`;
        const horaTurno = document.createElement('P');
        horaTurno.innerHTML = `<span>Hora:</span> ${hora}`;

        const resumenServicios = document.createElement('DIV');
        resumenServicios.classList.add('resumen-servicios');
        const tituloServicios = document.createElement('H3');
        tituloServicios.textContent = 'Servicios Elegidos';
        resumenServicios.appendChild(tituloServicios);
        
        let cantidad = 0;
        // iterar sobre el array de servicio
        servicios.forEach(servicio => {
            const {nombre,precio} = servicio; // destructuring
            const servicioDIV = document.createElement('DIV');
            servicioDIV.classList.add('servicioDIV');
            const textoServicio = document.createElement('P');
            textoServicio.textContent = nombre;
            const precioServicio = document.createElement('P');
            precioServicio.classList.add('precio');
            precioServicio.textContent = precio;
            //colocar nombre y precio en DIV
            servicioDIV.appendChild(textoServicio);
            servicioDIV.appendChild(precioServicio);
            resumenServicios.appendChild(servicioDIV);

            //Sumar el precio y acumularlo en cantidad
            const totalServicio = precio.split('$');
            cantidad += parseInt(totalServicio[1].trim());
        });
        resumenDIV.appendChild(datosTurno);
        resumenDIV.appendChild(nombreTurno);
        resumenDIV.appendChild(fechaTurno);
        resumenDIV.appendChild(horaTurno);
        resumenDIV.appendChild(resumenServicios);

        // agregamos el total a pagar
        const totalPagar = document.createElement('P');
        totalPagar.classList.add('cantidadPagar');
        totalPagar.innerHTML = `<span>Total a Pagar: </span>$ ${cantidad}`;
        resumenDIV.appendChild(totalPagar);
    }
}

function mostrarAlerta(mensaje,tipo){

    const alertaAnterior = document.querySelector(".alerta");
    if(alertaAnterior){
        //alertaAnterior.remove(); otra opción pero consume más recursos.
        return; // deja de ejecutar el código.
    }
    const alerta = document.createElement('DIV');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');
    if(tipo === 'error'){
        alerta.classList.add('error');
    }
    const formulario = document.querySelector('.formulario');
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();    
    }, 3000);
}

function fechaTurno(){
    const fechaInput = document.querySelector('.campo #fecha');
    fechaInput.addEventListener('input',evento =>{
        const fecha = new Date(evento.target.value);
        const dia = fecha.getUTCDay();

        if([0,1].includes(dia)){
            mostrarAlerta('Domingo y Lunes Cerrado','error');
            evento.preventDefault();
            fechaInput.value = '';
        }
        else {
            turno.fecha = fechaInput.value;
        }
        // un poquito de uso del objeto fechas.
        // opciones = {
        //     weekday: 'long',
        //     month: 'long',
        //     year: 'numeric'
        // }
        // console.log(fecha.toLocaleDateString('es-ES',opciones));
        
    });    
}

function deshabilitarFechas(){
    const fechaInput = document.querySelector('.campo #fecha');
    const fechaActual = new Date();
    // formato deseado aaaa-mm-dd
    const year = fechaActual.getFullYear();
    let month = fechaActual.getMonth() + 1;
    if(month <= 9){
        month = `0${month}`;
    };
    let day = fechaActual.getDate() + 1;
    if(day <= 9){
        day = `0${day}`;
    };
    const fechaFormateada = `${year}-${month}-${day}`;
    // console.log(fechaFormateada);
    fechaInput.min = fechaFormateada;
}

function horaTurno(){
    const horaInput = document.querySelector('.campo #hora');
    horaInput.addEventListener('input',evento =>{
        
    const horaTurno = evento.target.value;
    hora = horaTurno.split(':');
    
    if(hora[0]<=8 || hora[0] >= 21){
        mostrarAlerta('En ese Horario estamos cerrados','error');
        setTimeout(() => {
            horaInput.value = '';
        }, 2500);
    }
    else {
        turno.hora = horaTurno;
    }
    
    })
}