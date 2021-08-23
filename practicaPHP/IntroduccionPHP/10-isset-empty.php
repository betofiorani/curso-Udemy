<?php include 'includes/header.php';

$clientes = [];
$clientes2 = array(
    'nombre' => 'Beto',
    'apellido' => 'Fiorani',
    'profesion' => 'Desarrollador Full Stack'
);

// empty - verifica si un array está vacío. Devuelve true or false

echo '<pre>';
var_dump(empty($clientes));  // true
var_dump(empty($clientes2));  // false
echo '</pre>';

// Isset - revisa si un array ha sido creado o una propiedad definida.

echo '<pre>';
var_dump(isset($clientes4));  // False. No está definido.
var_dump(isset($clientes2));  // true. Existe el array.
var_dump(isset($clientes2['saldo']));  // false. NO existe la propiedad saldo.
var_dump(isset($clientes2['nombre']));  // true. SI existe la propiedad nombre.
echo '</pre>';

include 'includes/footer.php';