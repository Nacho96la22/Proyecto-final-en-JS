document.addEventListener('DOMContentLoaded', function() {
    const filtroCategoria = document.getElementById('seleccion-categoria');
    const filtroEquipo = document.getElementById('seleccion-equipo');
    const productos = document.querySelectorAll('.tarjeta-producto');

    // Función que analiza y aplica los filtros cruzados
    function filtrarProductos() {
        const catSeleccionada = filtroCategoria.value;
        const equipoSeleccionado = filtroEquipo.value;

        productos.forEach(producto => {
            // Obtenemos las etiquetas data de cada tarjeta
            const productoCat = producto.getAttribute('data-categoria');
            const productoEquipo = producto.getAttribute('data-equipo');

            // Evaluamos si coincide con la categoría o si está en "General"
            const coincideCat = (catSeleccionada === 'general' || catSeleccionada === productoCat);
            // Evaluamos si coincide con el equipo o si está en "General"
            const coincideEquipo = (equipoSeleccionado === 'general' || equipoSeleccionado === productoEquipo);

            // Si pasa ambas condiciones, se muestra. Si no, se oculta limpiamente.
            if (coincideCat && coincideEquipo) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    }

    // El "if" previene errores en páginas como contacto.html donde no están los filtros
    if (filtroCategoria && filtroEquipo) {
        filtroCategoria.addEventListener('change', filtrarProductos);
        filtroEquipo.addEventListener('change', filtrarProductos);
    }
});

function recibirContacto(){

    function verificarMensaje(mensaje){
        let ok = false;
        if (mensaje.trim()){
            ok = true;
        }
        return ok;
    }

    function verificarEmail(mail){
        let ok = false;
        if (mail.includes('@')){
            ok = true;
        }
        return ok;
    }

    function verificarNombre(nombre){
        let ok = false;
        if (nombre !== ""){
            ok = true;
        }
        return ok;
    }

    const form_contacto = document.getElementById('form-contacto');
    if (form_contacto){
        const nombre = document.getElementById('nombre').value.trim();
        let ok_nombre = verificarNombre(nombre)

        const mail = document.getElementById('email').value.trim();
        let ok_mail = verificarEmail(mail)

        const mensaje = document.getElementById('mensaje').value;
        let ok_mensaje = verificarMensaje(mensaje)

        if (ok_nombre && ok_mail && ok_mensaje){
            alert(`¡Exitoso, ${nombre}! tu mensaje ya fue enviado. Nos pondremos en contacto pronto.`);
        }else if (!ok_nombre){
            alert(`¡Denegado! El nombre no puede estar vacio. Por favor, intenté de nuevo.`)
        }else if (!ok_mail){
            alert(`¡Denegado! El email no puede estar vacio o falta un @. Por favor, intenté de nuevo.`)       
        } else if (!ok_mensaje){
            alert(`¡Denegado! El mensaje no puede estar vacio. Por favor, intenté de nuevo.`)
        }        
    }
}