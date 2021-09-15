// peticion del tipo blob

const imgTag = document.querySelector('img');

fetch('superman.png')
.then( resp =>  resp.blob() )
.then( data => {
  
    var imagePath = URL.createObjectURL( data ); // crea una url que es valida para el tipo de imagem
    imgTag.src = imagePath;
    // console.log(data);
})