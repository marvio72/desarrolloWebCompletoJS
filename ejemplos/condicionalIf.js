//condicionales If else

const puntaje = 1000;
const logueado = false;
const edad = 18;

if (puntaje === '1000') {
    console.log('Si es igual');
} else {
    console.log('No no es igual');
}

if (logueado) {
    console.log('Si estas logueado');
} else {
    console.log('Inicia Sesión');
}

if (edad >= 18) {
    console.log('Si eres mayor de edad');
} else {
    console.log('No eres mayor de edad');
}

let dinero = 299;
let totalCarrito = 300;
let tarjeta = true;

if (dinero >= totalCarrito) {
    console.log('Pago Correcto');
} else if (tarjeta) {
    console.log('Pagaste con tarjeta');
} else {
    console.log('Fondos Insuficientes');
}

if(dinero > totalCarrito || tarjeta) {
    console.log('Pago Correcto');
} else {
    console.log('Fondos Insuficientes');
}

let hora = 9;

if (hora > 0 && hora <= 12) {
    console.log('Buenos dias');
} else if (hora > 12 && hora <= 19) {
    console.log('Buenas tardes');
} else if (hora > 19 && hora <= 24) {
    console.log('Buenas noches');
} else {
    console.log('Horario no valido');
}

// Ternario

let valor = 27;
console.log(valor > 100 ? 'Si es mayor' : 'No es mayor');