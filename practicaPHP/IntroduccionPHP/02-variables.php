<?php include 'includes/header.php';

// sintaxis para creación de variables
$nombre = 'Beto';
echo $nombre;
var_dump($nombre);

// forma más común de definir constantes.
define('constante','Acá va el valor de la constante');
echo constante;

// Forma parecida a JS
const constante2 = 'Otra constante';
echo constante2;

include 'includes/footer.php';