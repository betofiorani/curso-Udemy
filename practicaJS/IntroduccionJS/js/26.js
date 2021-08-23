// THIS

// Sintaxis de Object literal
const reserva = {
    nombre: 'Beto',
    apellido: 'Fiorani',
    total: 4000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} efectuó el pago de $${this.total}`);
    }
}

reserva.informacion();