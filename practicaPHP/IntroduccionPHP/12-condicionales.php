<?php include 'includes/header.php';

$autenticado = true;
$admin = false;

if($autenticado === true && $admin === true){
    echo 'Te logueaste con exito';
}
else {
    echo 'No te logueaste correctamente';
};

// if anidados

$clientes = array(
    'nombre' => 'Beto',
    'apellido' => 'Fiorani',
    'saldo' => 0,
    'informacion' => [
        'tipo' => 'premium'
    ]
);

if(!empty($clientes)){
    echo 'Si hay un cliente cargado';

    if($clientes['saldo'] >0){
        echo 'El cliente tiene saldo';
    } else if ($clientes['informacion']['tipo'] === 'premium') {
        echo 'El cliente es premium';
    } else {
        echo 'el cliente no es premium';
    }
} else {
    echo 'No hay clientes cargados';
}

echo '<br>';

// Switch

$tecnologia = 'JS';

switch($tecnologia){
    case 'PHP':
        echo 'Lenguaje PHP incorporado';
        break;
    case 'JS':
        echo 'Lenguaje JS incorporado';
        break;
    default:
        echo 'Ningun lenguaje aprendido';
        break;
}


include 'includes/footer.php';