console.log(window.innerWidth);

window.addEventListener("resize", (e) => {
    console.clear();
    console.log("***********Evento Resize**********");
});

window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("***********Evento Scroll**********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load", (e) => {
    console.log("***********Evento Load**********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("***********Evento DOMContentLoaded**********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

//metodos del bom

window.alert("alerta");
window.confirm("confirmacion");
window.prompt("aviso");

const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventaja");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
    ventana = window.open("https://github.com/alefra88");
});
$btnCerrar.addEventListener("click", (e) => {
    // window.close();
    ventana.close();
});
$btnImprimir.addEventListener("click", (e) => {
    window.print();
});
