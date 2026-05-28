document.addEventListener('DOMContentLoaded',function(){
    const modoSave = localStorage.getItem('tema-web')
    const boton = document.getElementById('contrast-toggle')

    if (modoSave === 'oscuro'){
        document.body.classList.add('dark-mode')
        if(boton) boton.textContent ='☀️';
    }
})


document.getElementById('contrast-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';

    if (document.body.classList.contains('dark-mode')){
        localStorage.setItem('tema-web','oscuro')
    } else{
        localStorage.setItem('tema-web','claro')
    }
});