<?php 
declare(strict_types=1);
include 'includes/header.php';

function usuarioAutenticado(bool $autenticado) : string { // el : string obliga a retornar un string. Si le ponemos un int o un bool da error.
    if($autenticado === true) {
        return 'Usuario Autenticado';
    } else {
        return 'Usuario No Autenticado';
    }
};

$usuario = usuarioAutenticado(true);

echo $usuario;
echo '<br>';
function usuarioAutenticado2(bool $autenticado) : void { // el : void obliga a que la función imprima algo o retorne null.
    if($autenticado === true) {
        echo 'Usuario Autenticado';
    } else {
        echo 'Usuario No Autenticado';
    }
};

usuarioAutenticado2(true);

include 'includes/footer.php';