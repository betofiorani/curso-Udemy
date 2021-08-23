<?php include 'includes/header.php';

$numero1= 30;

$numero1++;

echo $numero1;

echo ++$numero1; // imprime 32

echo $numero1++; // imprime 32  y luego suma 1.

// Lo mismo aplica en decrementos

// incrementos en saltos

$numero3 = 30;
$numero3+=5;
echo '<br>';
echo $numero3;

include 'includes/footer.php';