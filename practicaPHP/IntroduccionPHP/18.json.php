<?php include 'includes/header.php';

$productos = [
    [
        'nombre' => 'Tablet',
        'precio' => 500,
        'disponible' => true
    ],
    [
        'nombre' => 'Computadora',
        'precio' => 1500,
        'disponible' => true
    ],
    [
        'nombre' => 'PlayStation',
        'precio' => 2500,
        'disponible' => false
    ],
    [
        'nombre' => 'Notebook',
        'precio' => 900,
        'disponible' => true
    ]
];

echo '<pre>';
echo var_dump($productos);
$json = json_encode($productos,JSON_UNESCAPED_UNICODE);
echo '<br>';
var_dump ($json);
$json_array = json_decode($json,JSON_UNESCAPED_UNICODE);
echo '<br>';
var_dump ($json_array);
echo '</pre>';





include 'includes/footer.php';