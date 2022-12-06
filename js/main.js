
document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}

window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon_heart");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}

document.getElementById("Tienda").addEventListener("click", tiendaLink);

function tiendaLink(){

      window.location.assign("https://formfit.com.co");
    
}

document.getElementById("Soporte").addEventListener("click", soporteLink);

function soporteLink(){

      window.location.assign("https://support.google.com/chrome/?hl=es-419#topic=7439538");
    
}