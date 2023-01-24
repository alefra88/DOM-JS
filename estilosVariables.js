import { $linkDOM } from "./atributos-Data-Attributes.js";
console.log($linkDOM.style);
console.log(window.getComputedStyle($linkDOM));
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.backgroundColor = "#ffa";
$linkDOM.style.textDecoration = "none";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

// '.getStyle' es un método antiguo y no estándar de JavaScript que se utilizaba para obtener el estilo de un elemento HTML. No está soportado en todos los navegadores y es mejor evitar su uso.

// '.getComputedStyle' es un método estándar de JavaScript que se utiliza para obtener el estilo calculado (es decir, el estilo final que se aplica a un elemento después de tener en cuenta todas las reglas de estilo y heredar estilos de elementos padres) de un elemento HTML. Este método es compatible con todos los navegadores modernos y es la forma recomendada de obtener el estilo de un elemento.

//variables CSS declaradas en la hoja de estilos
const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

//Aplicando las variables al document
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// Modificando variables desde JS
$html.style.setProperty("--dark-color", "#f1a");

//actualizamos la literal de la variable
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

//aplicamos la variable modificada al estilo
$body.style.setProperty("background-color", varDarkColor);
