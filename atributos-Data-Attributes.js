// console.log(document.documentElement.lang);
// console.log(document.documentElement.getAttribute("lang"));
// console.log(document.querySelector(".link-main").href);
// console.log(document.querySelector(".link-main").getAttribute("href"));

//modificando elementos en el dom
document.documentElement.lang = "en";
//otra manera de modificar elementos
document.documentElement.setAttribute("lang", "es-MX");

//guardando en variables las selecciones 'las variables que hacen referencia al DOM se guardan con un $ antes del nombre
const $linkDOM = document.querySelector(".link-main");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "http://github.com/alefra88");
console.log($linkDOM.hasAttribute("rel"));
//$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.getAttribute("data-description"));
$linkDOM.dataset.description = "Soy un programador bobolón";
console.log($linkDOM.getAttribute("data-description"));
