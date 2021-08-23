// FETCH API

function obtenerEmpleados(){
    const archivo = 'js/empleados.json';
    fetch(archivo)
    .then( resultado => resultado.json())
    .then(datos => {
        const {empleados} = datos; // Usando deconstructing... repasar... no lo recordaba
        empleados.forEach( empleado => console.log(`${empleado.id} - ${empleado.nombre} - ${empleado.puesto}`));
    })
};

obtenerEmpleados();

// FETCH API usando ASYNC / AWAIT

async function obtenerEmpleados1(){
    const archivo = 'js/empleados.json';
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    const {empleados} = datos;
    empleados.forEach( empleado => console.log(`${empleado.id} - ${empleado.nombre} - ${empleado.puesto}`));
};

obtenerEmpleados1();