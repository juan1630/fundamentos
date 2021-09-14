// console.log('Hola mundo');



function sumarUno (numero, callback) {
    
    if( numero >=7 ) {

        return callback("Algo pasó");
    }
    setTimeout(function (){

        callback(null , numero + 1 );
        // return numero + 1;

    }, 800)
}


//  callback hell
 sumarUno(5, function (error , nuevoValor){

        if(error) {
            console.log(error);
            return;
        }            // console.log(nuevoValor);

    sumarUno(nuevoValor, function (error , nuevaValor2){
        if(error) {
            console.log(error);
            return;
        }                
        // console.log(nuevaValor2);
        sumarUno( nuevaValor2, function (error , nuevaValor3){
        if(error) {
            console.log(error);
            return;
        }                    
            console.log(nuevaValor3);
        })
    });
    
 });