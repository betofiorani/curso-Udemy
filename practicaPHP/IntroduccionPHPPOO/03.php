<?php 
    declare(strict_types = 1);
    include 'includes/header.php';

    // ** METODOS ESTATICOS

// Definir una clase y un constructor con Sintaxis PHP 8
class ProductoPHP8 {
    // definimos una variable estática
    public static $imagenDefecto = 'imagen.jpg';

    // creamos un constructor. No requiere crear las variables ni asignarlas. Funciona con una sola linea.
    public function __construct(protected string $nombre, public int $precio, public bool $disponible, string $imagen){
        if($imagen){
            self::$imagenDefecto = $imagen;
        }
    }

    // definimos un metodo estático
    public static function obtenerImagen(){
        return self::$imagenDefecto; // se utiliza Self para retornar o usar una variable estática de un clase.
    }
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

$producto3 = new ProductoPHP8('PlayStation',15000,false,'imagen_producto.png');

// Usar un método estático de una clase - No hace falta instanciación. 
echo ProductoPHP8::obtenerImagen();
echo '<br>';
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
