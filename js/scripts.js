//Object Literal Enhacement

const banda = 'Metallica',
      genero = 'Heavy Metal',
      canciones = ['Master of Puppets','Seek & Destroy','Enter Sandman'];

//Forma anterior
const metallica ={
    banda: banda,
    genero: genero,
    canciones: canciones
}

console.log(metallica);

//Nueva forma
const metallica1 = {banda,genero,canciones}

console.log(metallica1);