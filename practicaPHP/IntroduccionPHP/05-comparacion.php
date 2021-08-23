<?php include 'includes/header.php';

$num1 = 30;
$num2 = 20;
$num3 = 30;
$num4 = '30';

var_dump($num1 > $num2);
echo '<br/>';
var_dump($num3 == $num4); // da verdadero. Al igual que Javascript.
echo '<br/>';
var_dump($num3 === $num4); // operador de igualdad estricto. Revisa valor y tipo de datos. Da falso.
echo '<br/>';
var_dump($num1 <=> $num2); // da 1 si el nro de la izq es mayor a derecha. -1 si es al reves. y 0 si son iguales.






include 'includes/footer.php';