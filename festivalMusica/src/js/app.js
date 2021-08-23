document.addEventListener('DOMContentLoaded', function(){
    scrollNav();
    navegacionFija();
});

function navegacionFija(){

    const barraNavegacion = document.querySelector('.header');
    // registrar el intersection observer
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barraNavegacion.classList.remove('fijo');
        }
        else {
            barraNavegacion.classList.add('fijo');
        }
    });
    // elemento a observar

    observer.observe(document.querySelector('.festival'))
    
};

function scrollNav(){
    const enlaces = document.querySelectorAll('.navegacionPrincipal a');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        })
    })
    
}