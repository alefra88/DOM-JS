const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
console.log($card.classList.add("rotate-45"));
console.log($card.classList.contains("rotate-45"));
console.log($card.classList.remove("rotate-45"));
console.log($card.classList.contains("rotate-45"));

// generalmente 'toggle' se utiliza para dark mode en sitios web
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
// utilizando replace solo remplaza de uno en uno
$card.classList.replace("rotate-45", "rotate-135");
// si queremos modificar varias clases al mismo tiempo tenemos que utilizar el siguiente codigo (se tienen que separar por comas)
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
