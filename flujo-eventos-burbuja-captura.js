const $divEventos = document.querySelectorAll(".evento-flujos div");

function flujoEventos(e) {
    console.log(
        `Hola ${this.className}, el click lo origino ${e.target.className}`
    );
}

$divEventos.forEach((div) => {
    //la propagacion de burbuja se puede modificar, su valor por defecto es false
    // div.addEventListener("click", flujoEventos,false);
    //para invertir la propagacion de burbuja a una propagaciòn de captura se deja en true
    // div.addEventListener("click", flujoEventos, true);
    //el tercer parametro tambièn acepta un objeto de entrada
    // div.addEventListener("click", flujoEventos, {
    //     capture: true,
    //     once: true,
    // });
});
