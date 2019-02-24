//Filter .find y .reduce

const personas = [
    { nombre: 'Marco', edad:46 },
    { nombre: 'Alejandra', edad: 23, aprendiendo: 'JavaScript' },
    { nombre: 'Pedro', edad: 60 },
    { nombre: 'Alfonso', edad: 32 },
    { nombre: 'Josefina', edad: 18 }
];

console.table(personas);

//obtener las personas mayores de 25 años

const mayores = personas.filter(persona =>{
    return persona.edad > 25
})
console.table(mayores);
//forma compacta
const mayores1 = personas.filter(persona => persona.edad > 25);
console.table(mayores1);

//información de Alejandra
const alejandra = personas.find(persona => persona.nombre === 'Alejandra');
console.log(alejandra);

let {aprendiendo} = alejandra;
console.log(aprendiendo);

//Reduce
let total = personas.reduce((edadTotal,persona)=> {
    return edadTotal + persona.edad;
}, 0);
console.log(total/personas.length);