const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("animals"),
    $cards = document.querySelector(".cards");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

/////////////////////////////////////////////////////////////////////////
// segunda forma de crear elementos dinamicos, pero no recomendable porque no se reconoce como nodo

$figure2 = document.createElement("figure");
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/nature" alt="nature" />
<figcaption>Nature</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

///////////////////////////////////////////////////////////////////////////
// creando lista dinamica
const estaciones = ["Primavera", "verano", "otoño", "invierno"];
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

// creando lista dinamica de otra manera
const continentes = ["Àfrica", "America", "Asia", "Europa", "Oceania"];
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//CONOCIENDO LOS FRAGMENTOS
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

$ul3 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
