<?php include 'includes/header.php';

$nombre = 'Beto';
$nombre2 = '            Beto        ';

// Extensión
echo strlen($nombre);
var_dump($nombre);

// Eliminar espacios en blanco
trim($nombre2);
echo $nombre2;

// pasar a Mayuscula o minusculas
echo strtoupper($nombre);
echo strtolower($nombre);

// remplazar algo en la cadena
echo '<br>';
echo str_replace('B','CH',$nombre);

// revisar si algo está en una cadena
echo '<br>';
echo strpos($nombre, 'B');

// concatenar

$tipoCliente = 'premium';
echo $nombre . ' ' . $tipoCliente;
// Concatenar muy parecido a template strings
echo '<br>';
echo "{$nombre} es {$tipoCliente}"; // solo funciona con comillas dobles...

include 'includes/footer.php';