const $divEventos = document.querySelectorAll(".evento-flujos div"),
    $linkEventos = document.querySelector(".evento-flujos a");

function flujoEventos(e) {
    console.log(
        `Hola ${this.className}, el click lo origino ${e.target.className}`
    );
    //con stopPropagation() detenemos la propagacion del flujo de eventos
    e.stopPropagation();
}

$divEventos.forEach((div) => {
    //la propagacion de burbuja se puede modificar, su valor por defecto es false
    div.addEventListener("click", flujoEventos);
    //para invertir la propagacion de burbuja a una propagaciòn de captura se deja en true
    // div.addEventListener("click", flujoEventos, true);
    //el tercer parametro tambièn acepta un objeto de entrada
    // div.addEventListener("click", flujoEventos, {
    //     capture: true,
    //     once: true,
    // });
});

$linkEventos.addEventListener("click", (e) => {
    alert("Hola!!! soy tu amigo alefra uwucito el owosito aweonasito");
    e.preventDefault();
    e.stopPropagation();
});
