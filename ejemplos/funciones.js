//TEMPLATE STRINGS

const nombre = 'Marco',
      trabajo = 'Desarrollo Web';

console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
//template strings
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

const contenedorApp = document.querySelector('#mensaje');

let html = `<ul>
                <li> Nombre: ${nombre} </li>
                <li> Trabajo: ${trabajo} </li>
            </ul>`;

contenedorApp.innerHTML = html;            

console.log('----------------------------------------');
console.log('Funciones');
// function declaration
function saludo(){
    console.log('Hola');
}

saludo();

// function expression
const suma = function(){
    console.log(1 + 5);
}

suma();

// La diferencia de estas funciones es que la primera
// puede ser llamada  antes de la declaración de la 
// funcion,

// en cambio la segunda no puede ser llamada antes de ser
// declarada

// funciones con parametros
saludar();
saludar('Pedro','Médico');
saludar('Alejandra','Veterinaria');
saludar('Laura');

function saludar(nombre = 'Visitante',trabajo = 'No Sabemos'){
    console.log(`Hola ${nombre} tu trabajo es ${trabajo}`);
}

const sumar = function(a = 0 , b = 0){
    let adicion = a + b;
    console.log(`${a} + ${b} = ${adicion}`);
}

sumar();
sumar(32,38);
sumar(983,1029);

// IIFE
// Son funciones que se llaman ellas mismas
(function(tecnologia) {
    console.log(`AQUI ESTOY!! aprendiendo ${tecnologia}`);
})('JavaScript');