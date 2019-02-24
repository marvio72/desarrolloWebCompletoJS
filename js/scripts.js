//Scope la visivilidad de una variable
// para tener mejor control de las variables se recomienda usar let y const en lugar de var

console.log('Con var');
var musica = 'Rock';

if (musica) {
    var musica = 'Grunge';
    console.log(`Dentro del if ${musica}`);
}
console.log(`Fuera de if ${musica}`);


console.log('Con let');
let musica1 = 'Rock';

if (musica1) {
    let musica1 = 'Grunge';
    console.log(`Dentro del if ${musica1}`);
}
console.log(`Fuera de if ${musica1}`);