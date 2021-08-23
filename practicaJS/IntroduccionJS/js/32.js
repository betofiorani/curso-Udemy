// Async / Await

function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargando clienes.... espere....');
        setTimeout( () => {
            resolve('Los clientes fueron descargados');
        },5000);
    })
};

function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos.... espere....');
        setTimeout( () => {
            resolve('Los pedidos fueron descargados');
        },3000);
    })
};

async function app(){
    try {
        // const clientes = await descargarNuevosClientes(); Esto se utilizaría si las llamadas se necesitan
        // const pedidos = await descargarUltimosPedidos();  Primero descargo clientes y luego pedidos.
        // console.log(clientes);
        // console.log(pedidos);
        const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('No pienso esperar a que se descarguen los clientes, por eso uso async / await');