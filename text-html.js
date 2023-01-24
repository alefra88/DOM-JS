const $whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
        <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

//$whatIsDOM.innerText = text;//esta no es parte del estandar
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;

// ¿cuando usar '.innerHTML' y cuando usar '.textContent'?
// '.textContent' solo cuando unicamente se quiera insertar texto mientras que  '.innerHTML' es para cuando se quiera insertar HTML
//con .innerHTML solo se agrega el contenido a la etiquieta mientras que con outerHTML se remplaza toda la etiqueta



//aca utlizamos outer para remplazar toda la etiqueta completa
$whatIsDOM.outerHTML = text;
