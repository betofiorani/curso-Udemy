const {series,parallel,src,dest,watch} = require('gulp'); // utilizando deconstructing solicitamos las funciones series y parallel del objeto y creamos en el mismo paso las variables
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin'); 
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

// Utilidades CSS

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

// Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css(){ //done = terminado. Es una funcion que sirve para decirle a gulp que la funcion está terminada
    return src(paths.scss)
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss([ autoprefixer() , cssnano() ]) )
        .pipe( sourcemaps.write('.'))
        .pipe( dest('./build/css'))  
}

function javascript(){
    return src(paths.js)
    .pipe( sourcemaps.init() )
    .pipe( concat('bundle.js') )
    .pipe( terser() )
    .pipe( sourcemaps.write('.'))
    .pipe( rename({suffix: '.min'}) )
    .pipe( dest('./build/js') )
}

// function minificarCss(){ 
//     return src(paths.scss)
//         .pipe( sass({outputStyle: 'compressed'}) )
//         .pipe( dest('./build/css'))  
// }

function imagenesWebp(){
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe(dest('./build/img') )
        .pipe( notify({message: 'Imagen convertida a Webp'}) );
}

function imagenes(){
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe(dest('./build/img') )
        .pipe( notify({message: 'imagen minificada'}) );
}

function watchArchivos(){
    watch(paths.scss, css); // * es a cualquiera de la carpeta- /**/* es a todos
    watch(paths.js, javascript);
};

// Sintaxis de node.js - así se llama a una función. No con hola(); a través de exports definimos como
// se llamará en node a la función de gulp y le asignamos la función definida como hola.
exports.css = css;
//exports.minificarCss = minificarCss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css,javascript,imagenes,imagenesWebp,watchArchivos);
// // Para evitar llamar una por una se utiliza series. que es una función que permite ejecutar varias tareas.
// //exports.tareas= series(css,javascript);
// // podemos usar tambien parallel que las ejecuta a todas juntas y no de manera secuencial.
// // si ponemos un default, podemos ejecutar en consola directamente poniendo gulp
// //exports.default = parallel(css,javascript,minificarHTML);