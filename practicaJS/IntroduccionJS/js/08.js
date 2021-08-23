// CONCATENACION

const nombre = 'Beto';
const email = 'betofiorani@gmail.com';

console.log(nombre);
console.log(email);
console.log(nombre + email);
console.log('nombre: ' + nombre + ' email: ' + email); // Forma antigua de trabajar el concatenar. 

// CONCATENACION CON TEMPLATES STRINGS o STRINGS LITERALS
console.log(`Nombre Cliente: ${nombre} Email: ${email}`); // Forma moderna. Entre las llaves puede ir una variable o una función