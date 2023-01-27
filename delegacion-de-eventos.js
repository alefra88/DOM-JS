function flujoEventos(e) {
    console.log(
        `Hola ${this}, el click lo origino ${e.target.className}`
    );
}
document.addEventListener("click", (e) => {
    console.log("click en", e.target);
    if (e.target.matches(".evento-flujos div")) {
        flujoEventos(e);
    }
    if (e.target.matches(".evento-flujos a")) {
        e.preventDefault();
    }
});
