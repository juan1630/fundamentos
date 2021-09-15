
const nameParaafo = document.querySelector('p');


fetch('https://swapi.dev/api/people/4/')
.then(  (resp) => resp.json())
.then( (user) => {
    console.log(user);
    nameParaafo.innerText = user.name;
})