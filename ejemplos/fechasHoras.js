
const diaHoy = new Date();
let dia = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let valor = `${dia[diaHoy.getDay()-1]}, ${diaHoy.getDate()} de ${meses[diaHoy.getMonth()]} del ${diaHoy.getFullYear()}`;
console.log(diaHoy);
console.log(valor);
