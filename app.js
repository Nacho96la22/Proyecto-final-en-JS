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