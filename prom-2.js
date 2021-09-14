// console.log('Hola mundo');



function sumarUno (numero) {

    var promesa = new Promise( function (resolve, reject){
        // estrucutra basica de una promesa 
        if( numero >= 7 ){
            reject('El número es muy alto');
        }
        setTimeout(function (){
    
            resolve( numero + 1 );
        }, 800);
    
    });

    return promesa;
}


// promise hell
// sumarUno( 5 )
//     .then(  nuevoNumero => {
//         sumarUno( nuevoNumero )
//         .then( numero => {
//             console.log(numero);
//         })
//     });

sumarUno( 4 )
//  se ejecuta y por defecto se pasa el valor que nos retorna
.then(  sumarUno)
.then(  sumarUno)
.then(  sumarUno)
.then(  sumarUno)
.then( nuevoNumero3 =>{
    console.log(nuevoNumero3);
})
// el catch se dispara cuando el resolve no puede resolver 
.catch( err => {
    console.log(err);
});