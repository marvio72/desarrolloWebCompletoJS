// // en JavaScript existen tres formas de crear variables

// var nombreCliente, //CamelCase
//     edad;

// nombreCliente = 'Marco';
// edad          = 47;

// console.log(nombreCliente+' '+edad);

// let apellido = 'Ruvalcaba';

// console.log(apellido);


// const divMensaje = document.getElementById('mensaje');

// console.log(divMensaje.innerText = 'hola');

// let nombre;

// nombre = "JUAN";
// let mensaje = ' Don\'t do that'; //para poder ingresar una comilla sencilla en un texto debemos usar "\"

// console.log(mensaje);

// let aprendiendo = 'Aprendiendo',
//     tecnologia = 'JavaScript';

// //concatenar
// console.log(aprendiendo+' '+tecnologia);

// //template string
// console.log(`${aprendiendo} ${tecnologia}`);

// //FUNCIONES PARA STRING

// let banda = 'Metallica',
//     cancion = 'Enter Sandman';

//     nombre = banda + ": " + cancion;

// console.log(nombre);

// //lenght nos dice cuantos caracteres tiene tu variable

// console.log(banda.length);

// //concatena el contenido de dos variables

// nombre = nombre.concat(" ", "y es genial");

// console.log(nombre);

// // Todas a mayusculas
// nombre = nombre.toUpperCase();

// console.log(nombre);

// // Todas a minusculas
// nombre = nombre.toLowerCase();
// console.log(nombre);

// //split va a dividir una cadena de texto en un arreglo

// let actividad = 'estoy aprendiendo JavaScript con el curso';
// nombre = actividad.split(' ');
// console.log(nombre);

// let intereses = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
// nombre = intereses.split(', ');
// console.log(nombre);

// // Reemplazar un valor
// nombre = intereses.replace('Leer', 'Read');
// console.log(nombre);

// //Revisa que algo exista Includes
// nombre = actividad.includes('JavaScript');
// console.log(nombre);

// let email = 'mruvalcaba@oversistemas.com';
// nombre = email.includes('@');
// console.log(nombre);

// //para repetir repeat
// let master  = 'Master ',
//     puppets = 'Of Puppets';

// console.log(master.repeat(3));
// console.log(puppets);



// //----------------------------Numeros -------------------------------------//
// console.log("-------------------------------------------------------------------------");
// const numero1 = 30,
//       numero2 = "20",
//       numero3 = 20.20,
//       numero4 = -3,
//       numero5 = 20;

// console.log(numero1);
// console.log(numero2);

// let resultado;
//  //suma
// resultado = numero1 + numero5;
// console.log(resultado); 
// //resta
// resultado = numero1 - numero5;
// console.log(resultado);
// //multiplicar
// resultado = numero1 * numero5;
// console.log(resultado);
// //dividir
// resultado = numero1 / numero5;
// console.log(resultado);

// //si tenemos una variable declarada como string y otra como numero al usar el simbolo + se concatena
// resultado = numero1 + numero2;
// console.log(resultado);

// //La clase Math
// resultado = Math.round(2.5);
// console.log(resultado); //nos redondea el resultado a 3 si fuera 2.4 nos lo redondea a 2

// resultado = Math.floor(2.6);// nos redondea el resultado a 2
// console.log(resultado);

// resultado = Math.ceil(2.2); // nos redondea el resultado a 3
// console.log(resultado);

// //raiz cuadrada
// resultado = Math.sqrt(144);
// console.log(resultado);
// //numero absoluto
// resultado = Math.abs(numero4);
// console.log(resultado);
// //potencia
// resultado = Math.pow(8,3);
// console.log(resultado);
// //El minimo
// resultado = Math.min(10,2,4,50,3);
// console.log(resultado);

// resultado = Math.max(10, 2, 4, 50, 3);
// console.log(resultado);

// //de string a numero
// let num1 = "20";
// num1 = Number(num1);
// console.log(num1);

// //de numero a string
// let tarjeta = 3929292039092912;
// tarjeta = String(tarjeta);
// console.log(tarjeta.length);

// //mostrar fecha
// let tiempo = new Date();
// console.log(tiempo);
// tiempo = String(tiempo);
// console.log(tiempo.length);

// console.log('________________________________________________________________');

// //TIPOS DE DATOS
// let nom = 'Marco';
// console.log(typeof nom);

// let edad1 = 80;
// console.log(typeof edad1);

// let aprendiendoJavaScript = false;
// console.log(typeof aprendiendoJavaScript); 

// let hijos = null;
// console.log(typeof hijos);

// let consola;
// console.log(typeof consola);

// //arreglo
// let lenguajes = ['HTML', 'JS', 'PHP'];
// console.log(typeof lenguajes);

// //objeto
// let persona = {
//     nombre: 'Marco',
//     ciudad: 'México'
// }
// console.log(typeof persona);

// //fecha
// let fecha = new Date();
// console.log(typeof fecha);

// console.log('________________________________________________________________');

// //crear un arreglo
// const numerosn = [10,20,30,40,50];

// console.log(numerosn);
// console.table(numerosn);

// const meses = new Array('enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre');
// console.log(meses[4]);

// //Comprobar si es un arreglo
// console.log(Array.isArray(meses));

// // Agregar un valor al arreglo en la ultima posicion
// meses.push('Enero1');
// console.log(meses);

// // Agregar un valor al arreglo en la primera posicion
// meses.unshift('Enero1');
// console.log(meses);

// // puede ser tambien
// meses[13]='Abril2';
// console.log(meses);

// //Eliminar al final del arreglo
// meses.pop();
// meses.pop();
// console.log(meses);

// //Eliminar al inicio del arrego
// meses.shift();
// console.log(meses);

// //cambiar una posicion de un arreglo
// meses[2] = 'Abril4';
// console.log(meses);

// //eliminar de un rango del arreglo
// meses.splice(1,5);
// console.log(meses);

// //mostrar la lista del arreglo en forma inversa
// meses.reverse();
// console.log(meses);

// //ordenar en orden alfabetico
// meses.sort();
// console.log(meses);

console.log('________________________________________________________________');

//OBJETOS

const persona = {
    nombre: 'Marco',
    apellido: 'Ruvalcaba',
    edad: 46,
    musica: ['Trance','Rock','Grunge'],
    hogar: {
        ciudad: 'Guadalajara',
        pais: 'México'
    }
}
console.log(persona.hogar.pais);