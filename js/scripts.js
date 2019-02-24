//Iteradores

const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript'];

//Un arreglo con objetos
const carrito = [
    {id: 1, producto: 'Libro'},
    {id: 2, producto: 'Camisa'},
    {id: 3, producto: 'Disco' }
];

//Un objeto
let automovil = {
    modelo: 'Camaro',
    motor : 6.0,
    anio  : 1987,
    marca : 'Chevrolet'
}

for (let i = 0; i < pendientes.length; i++) {
    console.log(pendientes[i]);
}

//otra manera de realizar un for 
// pendiente es como la variable y pendientes es el arreglo
for(pendiente of pendientes){
    console.log(pendiente);
}

for(producto of carrito){
    console.log(`${producto.id}: ${producto.producto}`);
}

for(info of Object.values(automovil)){
    console.log(info);
}

// foreach
pendientes.forEach(function (labor) {
    console.log(labor);
})
console.log('--------------------------------');
// foreach con arrow function
pendientes.forEach(labor => {
    console.log(labor);
})

// diferencia entre foreach y Map
// map crea una copia foreach no

let nuevoArreglo = pendientes.forEach(labor => {

});

let nuevoArreglo2 = pendientes.map(labor => {
    return labor;
});

// otra forma
let nuevoArreglo3 = pendientes.map(labor => labor);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
console.log(nuevoArreglo3);

let nuevoArreglo4 = carrito.map(producto => producto.producto);
let nuevoArreglo5 = carrito.map(producto => {
    return producto.producto;
})



console.log(nuevoArreglo4);
console.log(nuevoArreglo5);
console.log('___________________________________________');

// Ingresar a los datos de un objeto
Object.values(automovil).forEach(info => {
    console.log(info);
});


Object.values(automovil).map(info => {
    console.log(info);
});

