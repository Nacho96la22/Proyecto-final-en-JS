/*
// Esperamos a que todo el HTML de la página esté cargado
$(document).ready(function(){

    // Buscamos el contenedor que tiene la clase .center y activamos Slick
    $('.center').slick({
        centerMode: true,       // Activa el efecto de dejar una tarjeta en el medio
        centerPadding: '0px',
        slidesToShow: 3,        // Cantidad de imágenes que se ven al mismo tiempo
        infinite: true,         // Hace que el carrusel sea infinito (vuelve a empezar)
        arrows: true,           // Muestra las flechitas para avanzar y retroceder
        dots: true,             // Muestra los puntitos guía abajo de las fotos
        
        
        // Configuración para que no se rompa en celulares o pantallas chicas
        responsive: [
            {
                breakpoint: 768, // En pantallas menores a 768px (tablets)
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2 // Muestra 2 imágenes
                }
            },
            {
                breakpoint: 480, // En pantallas menores a 480px (celulares)
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1 // Muestra de a 1 sola imagen
                }
            }
            
        ]
    });

});
*/