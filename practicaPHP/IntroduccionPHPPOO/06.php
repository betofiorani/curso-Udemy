<?php include 'includes/header.php';

// Interfaces - son un mapa de todas las funciones que tiene una clase.

interface TransporteInterfaz {
    public function getInfo() : string;
    public function getRuedas() : int; 
}

abstract class Transporte implements TransporteInterfaz{
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


include 'includes/footer.php';