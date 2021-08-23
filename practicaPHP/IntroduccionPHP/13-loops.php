<?php include 'includes/header.php';

$i = 0; // inicializar el contador

while($i <= 10){
    echo $i .'<br>';
    $i++; // incrementar o entramos en un bucle infinito
};

// do while
$i = 0;

do {
    echo $i.'<br>';
    $i++;
}
while ($i <= 10);

// for
for($i=0; $i <= 10; $i++){
    echo $i.'<br>';
}

// FIZZ BUZZ
// Si es multiplo de 3 FIZZ
// si es multiplo de 5 BUZZ
// si es de 3 y 5 FIZZ BUZZ

// for
for($i=1; $i <= 10; $i++){
    if($i%3 === 0 && $i%5 === 0){
        echo $i.'- FIZZ BUZZ'.'<br>';
    } else if($i % 3 === 0){
        echo $i.'- FIZZ'.'<br>';
    } else if($i % 5 === 0) {
        echo $i.'- BUZZ'.'<br>';        
    } else {
        echo $i.'<br>';
    }
}

// for each
$clientes = array('Beto', 'Juan','Chacho');

foreach ($clientes as $cliente){
    echo $cliente.'<br>';
}

// recorrerlo con for

for($i=0; $i<count($clientes); $i++){
    echo $clientes[$i].'<br>';
}

// array asociativo
$clientes2 = [
    'nombre' => 'Beto',
    'saldo' => 1000,
    'tipo' => 'premium'
];

foreach ($clientes2 as $key => $valor){
    echo $key .'=>' .$valor.'<br>';
}

include 'includes/footer.php';