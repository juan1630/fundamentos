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
        setTimeout(() => resolve( numero + 1), 300);
    });
}



let cosas = [sumarRapido(10), sumarLento(5), true, 'Hola mundo'];

Promise.all( cosas )
.then( (res) => console.log(res))
.catch( console.log );

// sumarLento( 5 )
// .then( (numero) => console.log(numero));

// sumarRapido( 10 )
// .then( (numero2) => console.log(numero2));

