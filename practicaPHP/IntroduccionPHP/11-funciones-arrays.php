<?php include 'includes/header.php';

// in_array - buscar elementos en un arreglo - Devuelve TRUE OR FALSE
$carrito = ['tablet','play','computadora','celular'];

echo '<pre>';
var_dump( in_array('tablet',$carrito) ); // true. Tablet existe.
echo '</pre>';

// ordenar - 
$numeros = [4,5,2,1];
$numeros2 = [4,5,2,1];
sort($numeros); // de menor a mayor
rsort($numeros2); // de mayor a menor
echo '<pre>';
var_dump( $numeros );
var_dump( $numeros2 );
echo '</pre>';

// ordenar asociativos
$clientes = array(
    'saldo' => 200,
    'tipo' => 'Premium',
    'nombre' => 'Beto'
);

asort ($clientes); // ordena por los valores. Primero los números y luego los strings alfabéticamente.
arsort ($clientes); // ordena al revés del anterior
echo '<pre>';
var_dump( $clientes ); 
echo '</pre>';
ksort ($clientes); // ordena por las keys alfabéticamente.
echo '<pre>';
var_dump( $clientes ); 
echo '</pre>';
krsort ($clientes); // ordena por las keys alfabéticamente pero desde la Z.


include 'includes/footer.php';