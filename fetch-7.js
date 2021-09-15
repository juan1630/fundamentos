



fetch('https://swapi.dev/api/people/1/')
.then( resp => resp.json())
.then( personaje => {

        console.log( personaje )
        
        const body = {
            name: personaje.name,
            genero : personaje.gener
        }

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify( body ),
            headers: { 'Content-Type': 'application/json'}
        })
        .then( data => data.json())
        .then( dataJson => {
            console.log( dataJson )
        })

});

