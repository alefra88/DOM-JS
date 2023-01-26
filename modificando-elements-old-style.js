const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="any">
<figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// replaceChild sirve para modificar un elemento, es un metodo en deshuso
//$cards.replaceChild($newCard, $cards.children[2]);

//con el siguiente metodo se inserta antes del nodo
//$cards.insertBefore($newCard, $cards.firstElementChild);

//con el siguiente metodo podemos eliminar un elemento
$cards.document.removeChild($cards.lastElementChild);

// el siguiente metodo nos permite clonar nodos
document.body.appendChild($cloneCards);
