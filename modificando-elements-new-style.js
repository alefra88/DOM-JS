/* 
.insertAdjacent...
    .insertAdjacentElement(position,el) inserta un elemento(etiqueta)
    .insertAdjacentHTML(position,html) inserta html
    .insertAdjacentText(position,text) inserta texto

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

// $newCard.innerHTML = `
//     <img src="https://placeimg.com/200/200/any" alt="any">
//     <figcaption>Any</figcaption>
//     `;

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="any">
    <figcaption></figcaption>
    `;

//agregar elementos
$newCard.classList.add("card");
// $cards.insertAdjacentElement("beforebegin", $newCard);
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
//$cards.insertAdjacentElement("afterbegin", $newCard);
// $cards.insertAdjacentElement("beforeend", $newCard);
// $cards.insertAdjacentElement("afterend", $newCard);

// $cards.prepend($newCard);
// $cards.before($newCard);
// $cards.append($newCard);
//$cards.after($newCard);


