//loops

//For loop

for (let i = 0; i <= 10; i++) {
    console.log(` Numero: ${i}`);
}

const carrito = ['producto 1', 'producto 2', 'producto 3'];
console.log(carrito.length);

for (let x = 0; x < carrito.length; x++) {
    const producto = carrito[x];
    console.log(`Producto en el carrito: ${producto}`);    
}

//While loop
let i = 11;
while (i < carrito.length) {
    console.log(`Producto en el carrito: ${carrito[i]}`);
    i++;
}

//Do Wile 
//Ese loop realiza la operación por lo menos una vez

do {
    console.log(i);
    i++;
} while (i < 10);