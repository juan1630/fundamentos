// peticion post


let usuario = {
    nombre: 'Juan',
    edad: 26
}


fetch('https://reqres.in/api/users', {
    // definimos las propiedades del fetch
    method: 'POST', // tipo de peticion que se hace
    body : JSON.stringify( usuario ),   // cupero de la peticio
    headers: { 
        'Content-Type': 'application/json'
    }
    // headers de la application
})
// convertimos a json la respuesta
.then(  resp =>  resp.json())
.then( console.log)
.catch ( err => {
    console.log(err);
})