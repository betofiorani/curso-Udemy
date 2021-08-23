// notificaciones en windows!

const boton = document.querySelector('#boton');

boton.addEventListener('click', function(){
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`));
});

if(Notification.permission === 'granted'){
    new Notification('Esta es una notificacion',{
        icon: 'img/betofiorani.jpg',
        body: 'Soy Beto, estoy probando mi primer notificación en windows'
    })
};