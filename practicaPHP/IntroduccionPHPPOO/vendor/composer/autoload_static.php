<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitb110197f6abd7a2ecbeebff7f28b1581
{
    public static $prefixLengthsPsr4 = array (
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/clases',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitb110197f6abd7a2ecbeebff7f28b1581::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitb110197f6abd7a2ecbeebff7f28b1581::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitb110197f6abd7a2ecbeebff7f28b1581::$classMap;

        }, null, ClassLoader::class);
    }
}
