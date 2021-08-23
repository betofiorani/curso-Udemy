<?php include 'includes/header.php';

// Polimorfismo

interface TransporteInterfaz {
    public function getInfo() : string;
    public function getRuedas() : int; 
}

class Transporte implements TransporteInterfaz{
    public function __construct(protected int $ruedas, protected int $capacidad)
    {
    }
    public function getInfo() : string {
        return 'El transporte tiene '.$this->ruedas.' ruedas y capacidad para '.$this->capacidad;
    }
    public function getRuedas() : int {
        return $this->ruedas;
    }
}

class Automovil extends Transporte implements TransporteInterfaz {
    public function __construct(protected int $ruedas, protected int $capacidad, protected string $color)
    {
    }
    public function getInfo() : string {
        return 'El transporte Auto es '.$this -> color .', tiene '.$this->ruedas.' ruedas y capacidad para '.$this->capacidad;
    }

    // por mas que implemente la misma interfaz que su clase padre, puede tener metodos que no estén en ella.
    public function getColor() : string {
        return $this -> color;
    }
}

$transporte = new Transporte(8,20);
$auto = new Automovil(4,5,'Negro');

echo $transporte -> getInfo();
echo '<br>';
echo $auto -> getInfo();
echo '<br>';
echo $auto -> getColor();

include 'includes/footer.php';