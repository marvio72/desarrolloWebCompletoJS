// METODOS O FUNCIONES DENTRO DE LOS OBJETOS
let song = 'Cuando calienta el Sol';
const musica = {
    reproducir: function(cancion){
        // console.log(`Reproduciendo la canción : ${cancion}`);
        return (`Reproduciendo la canción : ${cancion}`);
    },
    pausar: function(){
        console.log('paused...');
    }
}
let rola = musica.reproducir(song);
// los métodos también pueden ir por fuera
musica.borrar = function(id){
    // console.log(`Borrando la cancion con el ID: ${id}`);
    return `Borrando la cancion con el ID: ${id}`;
}
let borra = musica.borrar(283)
const contenedorApp = document.querySelector('#mensaje');
let html = `<h2> ${borra} </h2>
            <br>
            <p> ${rola} </p>`;
contenedorApp.innerHTML = html;


console.log(musica.reproducir('Hotel California'));;
musica.pausar();
musica.reproducir('Nothing Else Matters');
musica.borrar(212);



//Arrow Function
const suma = (a = 0, b = 0) => a + b; //es lo mismo que
// const suma = (a = 0, b = 0) function(a,b){
//     return a + b
// } 
const multiplicar = a => a * 5;
let total;
let resultadoSuma = suma(2,2);
total = multiplicar(resultadoSuma)
console.log(total);


const viajando = function(destino) {
    return `Viajando a la ciudad de ${destino}`;
}
let viaje;
viaje = viajando('Londres');
viaje = viajando('Paris');
console.log(viaje);

//Esto es lo mismo
const viajando1 = destino => `Viajando a la ciudad de ${destino}`;
let viaje1;

viaje1 = viajando1('Marruecos');
console.log(viaje1);