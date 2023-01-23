//Los metodos siguientes ya no se usan, no son recomendados para implementar actualmente

console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

//fueron remplazados por los siguientes
console.log(document.querySelector("#menu")); //en terminos de rendimiento es más lento que getElementById
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
console.log(document.querySelectorAll("a").forEach((el) => console.log(el)));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[4]);
console.log(document.querySelectorAll("#menu li"));
