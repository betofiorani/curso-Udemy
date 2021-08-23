<?php 
declare(strict_types=1); // esto es para que el mismo visual code te marque como error si se pasa una variable con tipo de dato distinto al que espera la función

include 'includes/header.php';

function sumar(int $num1 = 0 , int $num2 = 0){
    echo $num1 + $num2;
};

sumar(40,35);
echo '<br>';
sumar(140,345);
echo '<br>';
sumar(6,11);
echo '<br>';
sumar(4);
echo '<br>';
// Lo nuevo en PHP 8. Parámetros nombrados
sumar(num2: 23, num1: 22); // se le puede pasar el nombre de la variable : el valor.

include 'includes/footer.php';
