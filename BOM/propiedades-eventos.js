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
