const tweet = "loren ipsum me encantarum";
const producto ='Monitor de 20 pulgadas'; 
const producto2 = 'Monitor de 30 pulgadas'; 

// Metodo para conocer la longitud de una cadena.
console.log(tweet.length);

// Método para encontrar un caracter en un string

console.log(producto.indexOf('20')); // Devuelve la posición de una string o caracter dentro de una string
console.log(producto2.indexOf('Tablet')); // Da como resultado -1 POrque no encuentra Tablet en la string

// Método includes
console.log(producto.includes('20')); // Devuelve true porque la string incluse 20
console.log(producto.includes('21')); // Devuelve false porque la string NO incluse 21
