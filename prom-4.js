function sumarLento (numero) {

    return  new Promise( function(resolve, reject) {
        setTimeout(function () {

            resolve( numero + 1 ); 
            // reject( "Sumar lento fallo" ); 
        
        }, 800);
    });

}



let sumarRapido = (numero) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // resolve( numero + 1)
            reject('Algo falló');
        }, 300);
    });
}



Promise.race( [sumarRapido(10), sumarLento(2)] )
    .then( resp => {
        console.log(resp);
    })
    .catch( console.log )