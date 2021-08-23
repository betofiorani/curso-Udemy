<?php include 'includes/header.php';

// conectar con las bases de datos

$db = new mysqli('localhost','root','root','Atenea');

$query = 'SELECT * FROM propiedades';
$resultado = $db->query($query);

while($row = $resultado->fetch_assoc()):
var_dump($row);
endwhile;

// Podemos usar sentencias preparadas. Mejor performance y seguridad
$stmt = $db->prepare($query); // Le decimos que la prepare a la consulta.
// Ejecutamos el stmt
$stmt ->execute();
// creamos las variables según los campos del query
$stmt ->bind_result($id,$titulo,$descripcion,$imagen,$precio,$habitaciones,$wc,$cocheras,$vendedorId,$creado);
// asignamos los resultados
while($stmt ->fetch()): 
echo '<br>';
echo $id;
echo $titulo;
endwhile;

include 'includes/footer.php';