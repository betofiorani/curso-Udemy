<?php include 'includes/header.php';

    require 'vendor/autoload.php';

    use \Firebase\JWT\JWT;

    // require 'clases/Clientes.php';
    // require 'clases/Detalles.php';

    // Autoload... para evitar tener que traer las clases con require. Si son muchas puede generar que las llamemos mal.

    // ** NO hace falta el autoload si se usa composer **
    // function mi_autoload($clase){
    //     $partes = explode("\\",$clase);

    //     require __DIR__.'/clases/'.$partes[1].'.php';
    // }

    // spl_autoload_register('mi_autoload');

    // si quiero crear una clase con el mismo nombre, no me dejaría. Para eso existen los namespace 
    // El nombre del namespace se coloca al instanciar un objeto de esa clase 
    // se coloca namespace\nombre de la clase

    class Clientes {

        public function __construct()
        {
            echo 'Desde 08.php';
        }
    }

    $detalles = new App\Detalles(); // Si quiero evitar poner App\ puedo usar la sintaxis use App\Detalles y quitar App\ de aqui
    $clientes = new App\Clientes();
    $clientes2 = new Clientes(); // puedo tener 2 clases con el mismo nombre, porque son de namespaces distintos.

    // Uso del código de Firebase descargado con composer
    $key = "example_key";
$payload = array(
    "iss" => "http://example.org",
    "aud" => "http://example.com",
    "iat" => 1356999524,
    "nbf" => 1357000000
);

/**
 * IMPORTANT:
 * You must specify supported algorithms for your application. See
 * https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40
 * for a list of spec-compliant algorithms.
 */
$jwt = JWT::encode($payload, $key);
$decoded = JWT::decode($jwt, $key, array('HS256'));

print_r($decoded);

/*
 NOTE: This will now be an object instead of an associative array. To get
 an associative array, you will need to cast it as such:
*/

$decoded_array = (array) $decoded;

/**
 * You can add a leeway to account for when there is a clock skew times between
 * the signing and verifying servers. It is recommended that this leeway should
 * not be bigger than a few minutes.
 *
 * Source: http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html#nbfDef
 */
JWT::$leeway = 60; // $leeway in seconds
$decoded = JWT::decode($jwt, $key, array('HS256'));

include 'includes/footer.php';