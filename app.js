// Texto de la lista de productos
document.addEventListener('DOMContentLoaded', function(){
    const textoCarrito = document.getElementById("cantidad");
    const textoLista = document.getElementById("lista-Productos");

    if(textoCarrito){
        const cantTotal = localStorage.getItem('cantCarrito') || 0;
        textoCarrito.innerHTML = "Cantidad de productos agregados: "+ cantTotal;
    }

    if (textoLista){
        const lista = JSON.parse(localStorage.getItem('listaNombres')) || [];
        
        if(lista.length === 0) {
            textoLista.innerHTML = `<li class="list-group-item text-muted">No hay productos en el carrito.</li>`;
        } else {
            // Si tiene productos, limpiamos el contenedor y los dibujamos uno por uno
            textoLista.innerHTML = ""; 
            
            lista.forEach(function(nombre) {
                // Le sumamos a la lista un ítem de Bootstrap con el nombre del producto
                textoLista.innerHTML += `<li class="list-group-item"> ${nombre}</li>`;
            });
        }
    }

});

// Vaciar la lista de producto
function vaciarProducto(){
    localStorage.removeItem('cantCarrito');
    localStorage.removeItem('listaNombres');
    
    const textoCarrito = document.getElementById("cantidad");

    if(textoCarrito){
        textoCarrito.innerHTML = "Cantidad de productos agregados: 0";
    }

    const textoLista = document.getElementById("lista-Productos");
    if(textoLista) {
        textoLista.innerHTML = `<li class="list-group-item text-muted">No hay productos en el carrito.</li>`;
    }
}

// Agregar un producto
function agregarProducto(evento,nomProducto){
    // ese evento es ignorante porque si agrego al carrito 
    // y se mueve hacia arriba sin sentido.
    evento.preventDefault();

    let cantProducto = parseInt(localStorage.getItem('cantCarrito')) || 0;
    cantProducto++; 
    localStorage.setItem('cantCarrito',cantProducto);

    let listaNombres = JSON.parse(localStorage.getItem('listaNombres')) || [];
    listaNombres.push(nomProducto);

    localStorage.setItem('listaNombres', JSON.stringify(listaNombres));
    alert("Se agrego el producto! Revisá en el carrito.");
}

// la funcion de Productos en principal
document.addEventListener('DOMContentLoaded', function() {
    const filtroCategoria = document.getElementById('seleccion-categoria');
    const productos = document.querySelectorAll('.tarjeta-producto');

    // Función que analiza y aplica los filtros cruzados
    function filtrarProductos() {
        const catSeleccionada = filtroCategoria.value;

        productos.forEach(producto => {
            // Obtenemos las etiquetas data de cada tarjeta
            const productoCat = producto.getAttribute('data-categoria');

            // Evaluamos si coincide con la categoría o si está en "General"
            const coincideCat = (catSeleccionada === 'general' || catSeleccionada === productoCat);
            
            // Si pasa ambas condiciones, se muestra. Si no, se oculta limpiamente.
            if (coincideCat) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    }

    // El "if" previene errores en páginas como contacto.html donde no están los filtros
    if (filtroCategoria) {
        filtroCategoria.addEventListener('change', filtrarProductos);
    }
});

// la funcion de Contacto
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