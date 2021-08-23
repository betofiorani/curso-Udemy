<?php 
    declare(strict_types = 1);
    include 'includes/header.php';

// DEFINIR UNA CLASE - Se recomienda nombre en mayúscula. Siempre entre Llaves

class ProductoSinConst {
    // creamos los atributos o propiedades de la clase. Pueden ser variables o funciones.
    public $nombre;
    public $precio;
    public $disponible;
};

class Producto {
    // creamos los atributos o propiedades de la clase. Pueden ser variables o funciones.
    public $nombre;
    public $precio;
    public $disponible;

    // creamos un constructor. Un método disponible en la clase para construir objetos.
    public function __construct(string $nombre, int $precio, bool $disponible)
    {
        // utiliza $this para hacer referencia al futuro objeto que se va a instanciar desde la clase.
        $this -> nombre = $nombre;
        $this -> precio = $precio;
        $this -> disponible = $disponible;
    }
};

// Sintaxis PHP 8

class ProductoPHP8 {
    // creamos un constructor. No requiere crear las variables ni asignarlas. Funciona con una sola linea.
    public function __construct(public string $nombre, public int $precio, public bool $disponible){}

    // crear nuestros propios métodos.
    public function mostrarProducto(){
        echo 'El nombre del producto es '. $this -> nombre . ' y su precio es '.$this -> precio;
    }
};

// Instanciar una clase. Esto significa crear un objeto $producto a partir de la clase Producto. 
// Se pueden crear múltiples objetos a partir de una clase.

$producto = new ProductoSinConst();

// acceder a un valor
var_dump($producto -> nombre); // da null. No hemos dado ningún valor. 
var_dump($producto -> precio); // da null. No hemos dado ningún valor. 
var_dump($producto -> disponible); // da null. No hemos dado ningún valor. 

// asignar valor línea por línea... sin usar constructor.
$producto -> nombre = 'Tablet';
$producto -> precio = 1000;
$producto -> disponible = true;

echo '<pre>';
var_dump($producto);
echo '</pre>';

// El objeto Producto 2 se va a instanciar desde el constructor
$producto2 = new Producto('Notebook', 10000, true);

echo '<pre>';
var_dump($producto2);
echo '</pre>';

$producto3 = new ProductoPHP8('PlayStation',15000,false);

$producto3 -> mostrarProducto();

echo '<pre>';
var_dump($producto3);
echo '</pre>';


include 'includes/footer.php';
