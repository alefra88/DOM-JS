// 67. DOM Traversing: Recorriendo el DOM

// DOM Traversing: está enfocado a los Elementos, es decir a las etiquetas HTML

// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children); // los hijos de "cards" son "card"
// console.log($cards.children[2]); // hijo 3
// console.log($cards.parentElement); // retorna el padre del elemento, en este caso es body
// console.log($cards.firstChild); // hace referencia al nodo de espacio vacio ya que es el primer child que encuentra
// console.log($cards.firstElementChild); // obtiene el primer elemento html del nodo
// console.log($cards.lastElementChild); // obtiene el último "Elemento" html del nodo
// console.log($cards.previousElementSibling); // el "Elemento" hermano antes del "card"
// console.log($cards.previousSibling); //toma el nodo
// console.log($cards.nextElementSibling); // el siguiente "Elemento" hermano de "card"
// console.log($cards.nextSibling); //toma el nodo siguiente, no el elemento
// console.log($cards.closest("div")); // es un método que busca el ancestro, el padre más cercano
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section")); // el padre mas cercano del elemento n°3

// // Debemos tomar en cuenta que podemos recorrer los elementos y nodos, dependiendo del metodo que elijamos

// // Busca el padre mas cercano del tipo de selector que le demos
// console.log($cards.closest("div"));
// console.log($cards.children[3].closest("section"));
