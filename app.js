/* ==========================================
   LÓGICA DEL CARRITO (Al cargar la página)
   ==========================================
*/
document.addEventListener('DOMContentLoaded', function(){
    const textoCarrito = document.getElementById("cantidad");
    const textoLista = document.getElementById("lista-Productos");
    const textoTotal = document.getElementById("monto-total"); 
    const btnComprar = document.getElementById("btn-comprar"); 

    if(textoCarrito){
        const cantTotal = localStorage.getItem('cantCarrito') || 0;
        textoCarrito.innerHTML = "Cantidad de productos agregados: "+ cantTotal;
    }

    if (textoLista){
        const lista = JSON.parse(localStorage.getItem('listaNombres')) || [];
        // Traemos el total del LocalStorage
        const total = parseFloat(localStorage.getItem('totalCarrito')) || 0; 
        
        // Mostramos el total
        if(textoTotal) {
            textoTotal.innerHTML = "Total: $" + total; 
        }

        if(lista.length === 0) {
            textoLista.innerHTML = `<li class="list-group-item text-muted">No hay productos en el carrito.</li>`;
            if(btnComprar) btnComprar.disabled = true; // Apagamos el botón si está vacío
        } else {
            textoLista.innerHTML = ""; 
            lista.forEach(function(nombre) {
                textoLista.innerHTML += `<li class="list-group-item"> ${nombre}</li>`;
            });
            if(btnComprar) btnComprar.disabled = false; // Prendemos el botón si hay productos
        }
    }
});

/* ==========================================
   FUNCIONES DEL CARRITO (Botones)
   ==========================================
*/
function vaciarProducto(){
    localStorage.removeItem('cantCarrito');
    localStorage.removeItem('listaNombres');
    localStorage.removeItem('totalCarrito'); // Borramos la memoria del dinero
    
    const textoCarrito = document.getElementById("cantidad");
    const textoLista = document.getElementById("lista-Productos");
    const textoTotal = document.getElementById("monto-total");
    const btnComprar = document.getElementById("btn-comprar");

    if(textoCarrito) textoCarrito.innerHTML = "Cantidad de productos agregados: 0";
    if(textoTotal) textoTotal.innerHTML = "Total: $0"; // Volvemos a cero visualmente
    if(textoLista) textoLista.innerHTML = `<li class="list-group-item text-muted">No hay productos en el carrito.</li>`;
    if(btnComprar) btnComprar.disabled = true;
}

function agregarProducto(evento, nomProducto, precioProducto){
    evento.preventDefault();

    let cantProducto = parseInt(localStorage.getItem('cantCarrito')) || 0;
    cantProducto++; 
    localStorage.setItem('cantCarrito',cantProducto);

    let listaNombres = JSON.parse(localStorage.getItem('listaNombres')) || [];
    listaNombres.push(nomProducto);
    localStorage.setItem('listaNombres', JSON.stringify(listaNombres));

    // Lógica para sumar el dinero
    let totalActual = parseFloat(localStorage.getItem('totalCarrito')) || 0;
    totalActual += (precioProducto || 0); 
    localStorage.setItem('totalCarrito', totalActual);

    alert("¡Se agregó el producto! Revisá el carrito.");
}

function comprarCarrito() {
    const cantTotal = parseInt(localStorage.getItem('cantCarrito')) || 0;
    
    if (cantTotal > 0) {
        alert("¡Comprado con éxito! Gracias por tu compra en Tienda de F1.");
        vaciarProducto(); // Limpiamos la pantalla y memoria después de comprar
    }
}

/*  ==========================================
    LÓGICA DE FILTROS EN PÁGINA PRINCIPAL
    ==========================================
*/
document.addEventListener('DOMContentLoaded', function() {
    const filtroCategoria = document.getElementById('seleccion-categoria');
    const productos = document.querySelectorAll('.tarjeta-producto');

    function filtrarProductos() {
        const catSeleccionada = filtroCategoria.value;

        productos.forEach(producto => {
            const productoCat = producto.getAttribute('data-categoria');
            const coincideCat = (catSeleccionada === 'general' || catSeleccionada === productoCat);
            
            if (coincideCat) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    }

    if (filtroCategoria) {
        filtroCategoria.addEventListener('change', filtrarProductos);
    }
});

/* ==========================================
   FUNCIÓN DEL FORMULARIO DE CONTACTO
   ==========================================
*/
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