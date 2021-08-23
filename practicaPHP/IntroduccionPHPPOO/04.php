<?php 
declare(strict_types = 1);
include 'includes/header.php';
// HERENCIA
class Transporte {
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

// creamos una clase Bicicleta que hereda todo de Transporte.
class Bicicleta extends Transporte {
}

// Instanciamos una clase Automovil
class Automovil extends Transporte {
    // si automovil para construirse tiene atributos propios, podemos hacer su constructor
    public function __construct(protected int $ruedas, protected int $capacidad, protected string $transmision)
    {
    }
    public function getTransmision() : string {
        return $this->transmision;
    }
}

// si instanciamos un objeto bicicleta de Bicicleta
$bicicleta = new Bicicleta(2,1);
// y llamamos al método getInfo, funciona porque lo hereda de transporte.
echo $bicicleta -> getInfo(); 
echo '<hr>';
// si instanciamos un objeto auto de Automovil
$auto = new Automovil(4,5,'manual');
// y llamamos al método getInfo, funciona porque lo hereda de transporte.
echo $auto -> getInfo(); 
echo '<br>';
echo $auto -> getRuedas(); 
echo '<br>';
echo $auto -> getTransmision(); 

include 'includes/footer.php';