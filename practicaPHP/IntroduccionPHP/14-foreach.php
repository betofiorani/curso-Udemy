<?php include 'includes/header.php';

$productos = [
    [
        'nombre' => 'Tablet',
        'precio' => 500,
        'disponible' => true
    ],
    [
        'nombre' => 'Computadora',
        'precio' => 1500,
        'disponible' => true
    ],
    [
        'nombre' => 'PlayStation',
        'precio' => 2500,
        'disponible' => false
    ],
    [
        'nombre' => 'Notebook',
        'precio' => 900,
        'disponible' => true
    ]
];

foreach ($productos as $producto){ ?>

<li>
    <p>Producto: <?php echo $producto['nombre']?></p>
    <p>Precio: <?php echo '$ '.$producto['precio']?></p>
    <p><?php echo ($producto['disponible']) ? 'disponible' : 'no disponible'; ?> </p>
    <!-- <?php 
        if($producto['disponible']){ // eso se puede reemplazar con un operador ternario.
            echo '<p>disponible</p>';
        } else {
            echo '<p>sin stock</p>';
        }
    ?> -->

</li>

<?php
    echo '<pre>';
    var_dump($producto);
    echo '</pre>';
};

include 'includes/footer.php';