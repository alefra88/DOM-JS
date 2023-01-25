const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent2 = [
        {
            title: "Tecnologia",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people",
        },
    ];
$cards.classList.add("cards");

cardContent2.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $clone.querySelector("figure").classList.add("card");
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
