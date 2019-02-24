//Object literal

const persona = {
    nombre: 'Marco',
    edad: 47,
    anioNacimiento: function () {
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona.anioNacimiento());


function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}
//Instancias son como un cuaderno, todas las hojas son iguales pero
// tienen diferente contenido.
//Tareas
const tarea1 = new Tarea('Estudiar JavaScript', 'Urgente');
const tarea2 = new Tarea('Sacar a pasear a Kiara', 'Urgente');
const tarea3 = new Tarea('Preparar café', 'Media');
const tarea4 = new Tarea('Conocer a mis tias', '0');
console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);

console.log('----------------------------------------------');
//Object Constructor
class Tareas {
    constructor(nombre, urgencia) {
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
}

const tareas1 = new Tareas('Estudiar JavaScript', 'Urgente');
const tareas2 = new Tareas('Sacar a pasear a Kiara', 'Urgente');
const tareas3 = new Tareas('Preparar café', 'Media');
const tareas4 = new Tareas('Conocer a mis tias', '0');
console.log(tareas1);
console.log(tareas2);
console.log(tareas3);
console.log(tareas4);