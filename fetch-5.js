
const body = document.querySelector('body');

fetch('no-encontrado.html')
    .then( resp => resp.text())
    .then(  html => {
        // console.log(html);
        body.innerHTML = html;
    })
    .catch( error => {
        console.error("Error en la peticion " ,error);
    })