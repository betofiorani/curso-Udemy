(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    
    const logo = document.getElementById('logo'); // Obtener un elemento del DOM y crear una variable para tenerlo disponible. Siempre es 1 solo. No puede haber id iguales.

    const navegacion = document.getElementsByClassName('navegacion'); // obtener elementos que tienen la clase buscada. Pueden ser más de uno. Los devuelve como Array

    const enlaces = document.getElementsByTagName('a'); // obtener elementos que tienen la etiqueta html buscada. Pueden ser más de uno. Los devuelve como Array

    const enlacesSidebar = document.getElementById('sidebar').getElementsByTagName('a'); // Combinando.

    const logoQS = document.querySelector('#logo'); // Otra manera de obtener un elemento del dom. Más similar a la notación de css. Podemos tomar por id, tag o class con el mismo.

    const enlacesQSA = document.querySelectorAll("#menu ul li a"); // Trae todos los elementos que coincidan como Array.

    const ventajaQSA = document.querySelectorAll(".navegacion, footer p"); // Se pueden agregar parametros de búsqueda separadas por comas.

    // NODOS

    console.log(enlacesQSA[0].nodeType);
    console.log(enlacesQSA[0].nodeName);
    console.log(enlacesQSA[0].attributes);
    console.log(enlacesQSA[0].firstChild);
    console.log(enlacesQSA[0].firstChild.nodeValue);
    
    enlacesQSA[0].firstChild.nodeValue = 'Home'; // Llegando al valor necesario moviendonos por los elementos, podemos cambiar el html.
    enlacesQSA[0].id = 'pongo_un_id';
      
    // Crear contenido nuevo

    const sidebar = document.querySelector('#sidebar');

    let nuevoElemento = document.createElement('H1');
    let nuevoTexto = document.createTextNode('Hola Mundo');
    nuevoElemento.appendChild(nuevoTexto);
    sidebar.appendChild(nuevoElemento);

    // Agregar una nueva entrada

    const enlacesSide = document.querySelector('#sidebar ul');
    const nuevoLi = document.createElement('LI');
    const nuevoEnlace = document.createElement('A');
    nuevoEnlace.setAttribute('href','www.google.com');
    nuevoLi.appendChild(nuevoEnlace);
    const textoEnlace = document.createTextNode('Entrada 6');
    nuevoEnlace.appendChild(textoEnlace);
    enlacesSide.appendChild(nuevoLi);

    // Clonar node

    const contenido = document.querySelectorAll('main');

    var nuevoContenido = contenido[0].cloneNode(true);

    sidebar.insertBefore(nuevoContenido,sidebar.childNodes[5]);

    // Eliminar nodos o elementos


    const primerPost = document.querySelector('main article');

    primerPost.parentNode.removeChild(primerPost); // Elimina el primer post. Siempre hay que ir al padre para eliminar el elemento.


    // Reemplazar nodos

    const viejoNodo = document.querySelector('main h2');
    const nuevoNodo = document.querySelector('footer h2');
    viejoNodo.parentNode.replaceChild(nuevoNodo,viejoNodo);

    // creando nuevo

    const nuevoNodo2 = document.createElement('h2');
    const textoH2 = document.createTextNode('Nuevo Nodo');
    nuevoNodo2.appendChild(textoH2);
    nuevoNodo.parentNode.replaceChild(nuevoNodo2,nuevoNodo);

    
  });
  
})();