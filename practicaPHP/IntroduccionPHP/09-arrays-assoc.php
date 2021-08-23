<?php include 'includes/header.php';

$clientes = [
    'nombre' => 'Beto',
    'saldo' => 0,
    'informacion' => [
        'tipo' => 'Premium',
        'disponible' => 100
    ]
];

echo '<pre>';
var_dump($clientes);
echo '</pre>';
echo var_dump($clientes['nombre']); // acceder a los datos del array de acuerdo a su propiedad
echo $clientes['informacion']['tipo']; // acceder a un array dentro de otro array asociativos.

// agregar propiedades al array
$clientes['codigo'] = 3546457567;

echo '<pre>';
var_dump($clientes);
echo '</pre>';

include 'includes/footer.php';