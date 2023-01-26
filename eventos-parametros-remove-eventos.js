// Los eventos son mecanismos con los cuales podemos controlar las acciones del usuario
// Hay tres maneras de definir los eventos en JavaScript

//LA PRIMER FORMA (con el atributo HTML)
//<button onclick="holaMundo()">Evento con atributo HTML</button>(esta parte van en el HTML xd)
function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}

function saludar(nombre = "desconocid@") {
    alert(`Hola ${nombre}`);
    console.log(event);
}

//LA SEGUNDA FORMA (con manejador de eventos eventHandler)
const $eventoSemantico = document.getElementById("evento-semantico");

//El flujo remplaza la funcion holaMundo asignada a $eventoSemantico es remplazada por la siguiente funciòn de acuerdo al flujo de eventos, las funciones en eventos no pueden recibir parametros, el unico parametro que puede recibir es 'event'

//RECUERDA: No se pueden asignar diferentes funciones a un solo evento
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
    alert("Hola mundo manejador de eventos semantico");
    console.log(e);
    console.log(event);
};

//TERCER FORMA: Manejadores multiples
const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola mundo esto es un manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Toda funcion que vaya a ser manejadora de eventos no puede recibir otro paramentro que no sea event
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Alan");
});

//////REMOVER EVENTOS/////////////////////
const $eventoRemover = document.getElementById("evento-remover");

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    $eventoRemover.disabled = true;
};
$eventoRemover.addEventListener("dblclick", removerDobleClick);
