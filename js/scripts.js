// Shitch statment

const metodoPago = 'tarjeta';

switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
    console.log(`Pagaste con ${metodoPago} revisaremos que tenga fondos`);
        break;
    case 'tarjeta':
    console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    default:
        console.log(`Aún no has gagado o método no válido`);
        break;
}