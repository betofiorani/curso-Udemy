<?php include 'includes/header.php';

// arreglos indexados.
$carrito = ['tablet','computadora','celular']; // así se declara que es un array indexado vacío.

// acceder a un valor
var_dump($carrito[1]);
// agregar valor si conocemos la extensión
$carrito[3] = 'Notebook';
echo $carrito[3];
// otra manera
$clientes = array('cliente 1','cliente 2','cliente 3');
var_dump($clientes);

// Agregar elementos al principio o al final
array_push($carrito, 'PlayStation'); // al final
array_unshift($carrito, 'Joystick'); // al inicio

echo '<br>';
echo '<pre>';
var_dump($carrito);
echo '</pre>';
echo '<br>';

include 'includes/footer.php';