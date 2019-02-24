// Destructuring

const cliente = {
    nombre: 'Alejandra',
    tipo  : 'Premium',
    datos: {
        ubicacion: {
            ciudad: 'México',
            pais: 'México'
        },
        cuenta: {
            desde: 12-12-2012,
            saldo: 4000
        }
    },
    gustos: {
        musica:['trance','rock']
    }
}
// Ver el contenido del objeto
console.log(cliente);

//mostrar el valor de cada elemento forma antigua
const nombreCliente = cliente.nombre,
      tipoCliente = cliente.tipo,
      ubicacionCliente = cliente.datos.ubicacion;

console.log(ubicacionCliente);

//nueva manera de mostrar los valores de cada elemento
console.log('              Nueva manera');
let {nombre,tipo} = cliente;
let {datos: {ubicacion}} = cliente;
console.log(`${nombre} ${tipo}`);
console.log(ubicacion);

console.log('Mostrar ciudad');
let { datos: { ubicacion: {ciudad} } } = cliente;
console.log(ciudad);

console.log('Extraer el saldo');
let {datos:{cuenta:{saldo}}} = cliente;
console.log(saldo);

let {gustos: musica} = cliente;


console.log(musica);