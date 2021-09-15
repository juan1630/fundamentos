



fetch('https://reqres.in/api/users/1')
    .then( resp => {

        //  se clona la respueta que recibimos
        
        if(resp.ok) {
            
        return  resp.json()

        }else {
            // console.log("El usuairo no existe");
            throw new Error ('No existe el usuario')
        }

    })
    .then( console.log)
    .catch( error => {
        console.log(error);
    })

