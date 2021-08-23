<?php 
    declare(strict_types = 1);
    include 'includes/header.php';

    // ** ENCAPSULACION

    // public se puede acceder y modificar desde cualquier lugar. a la clase y al objeto.
    // protected - se puede acceder y modificar solo en la clase. En el objeto no podemos ni modificar ni acceder a un valor. Se necesita crear en la clase un get o un set.
    // private - solo los miembros de esa clase pueden. Funciona parecido a protected pero tiene diferencias en herencia

// Sintaxis PHP 8
class ProductoPHP8 {
    // creamos un constructor. No requiere crear las variables ni asignarlas. Funciona con una sola linea.
    public function __construct(protected string $nombre, public int $precio, public bool $disponible){}

    // crear nuestros propios métodos.
    public function mostrarProducto(){
        echo 'El nombre del producto es '. $this -> nombre . ' y su precio es '.$this -> precio;
    }
    public function getNombre() : string {
        return $this -> nombre;
    }
    public function setNombre(string $nombre){
        $this -> nombre = $nombre;
    }
};

$producto3 = new ProductoPHP8('PlayStation',15000,false);

$producto3 -> mostrarProducto();
echo '<br>';
echo $producto3 -> getNombre();
echo '<br>';
$producto3 -> setNombre('Play');
echo $producto3 -> getNombre();

echo '<pre>';
var_dump($producto3);
echo '</pre>';


include 'includes/footer.php';
