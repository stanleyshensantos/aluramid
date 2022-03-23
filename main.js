// Pom ......................................
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
}

const lsitaDeTeclas = document.querySelectorAll('.tecla');

lsitaDeTeclas[0].onclick = tocaSomPom;

