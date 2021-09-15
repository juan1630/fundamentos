// console.log('Hola mundo');


var request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = function(state) {
    // console.log(state);

    if( request.readyState === 4 ) {
        const { response } = request;
        const responsObj = JSON.parse(response);

        console.log(responsObj);
    }
}