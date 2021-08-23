<?php include 'includes/header.php';

// Conectar a base de datos con PDO

$db = new PDO('mysql:host=localhost; dbname=Atenea','root','root');

// Trabajar sin consultas preparadas
// Consulta
$query = "SELECT * FROM propiedades";

// consulta en la base y asigna en la misma linea. Se le pasa al fetch el tipo de fetch como metodo estatico
$propiedades = $db->query($query)->fetchAll(PDO::FETCH_ASSOC); // Podemos asignar los valores en la misma línea con el fetch
// puedo usar un while o un foreach para mostrarlas a todas. fetchAll trae todo.

foreach($propiedades as $propiedad):
    echo $propiedad['titulo'];
    echo '<br>';
    echo $propiedad['precio'];
    echo '<br>';
endforeach;
// echo '<pre>';
// var_dump($propiedades);
// echo '</pre>';

// Si usamos sentencias preparadas es casi lo mismo que con mysqli
// preparamos la sentencia
$stmt = $db->prepare($query);
// La ejecutamos
$stmt ->execute();
// asignamos los resultados. No hace falta el bind de mysqli. PDO los asigna directamente
$resultado = $stmt -> fetchAll(PDO::FETCH_ASSOC);

// lo recorremos con un foreach
foreach($resultado as $propiedad):
    echo $propiedad['titulo'];
    echo '<br>';
    echo $propiedad['precio'];
    echo '<br>';
endforeach;



include 'includes/footer.php';