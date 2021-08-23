// SWITCH

const metodoPago = 'Efectivo';

switch (metodoPago){
    case 'tarjeta':
        console.log('Pago con Tarjeta');
        break;
    case 'Efectivo': 
        console.log('Pago en Efectivo');
        break;
    default: 
        console.log('Medio de pago desconocido');
        break;
}