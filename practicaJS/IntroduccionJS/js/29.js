// Try catch - se utiliza para que Javascript se siga ejecutando a pesar de un error.
// No hay que abusar de usarlo. Solo cuando sea específicamente necesario

const n1 = 10;
const n2 = 30;

console.log(n1);
try {
    console.log(n3);
} catch (error) {
    console.log(error);
}
console.log(n2);
// Acá daría error en el console log de n3 y la línea 9 no se ejecutaría. Si se usa try catch, se puede salvar 