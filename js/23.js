// Switch 

const metodoPago = 'tarjetaDebito';

switch  (metodoPago) {
    case 'tarjetaDebito': // Podemos agregar multiplos case (ventaja)
        console.log('Pagaste con tarjeta DEbito');
        break; // El break indica que hasta aqui termina la funcion del codigo.
    
    case 'cheque':
        console.log('Pagaste con cheque, revisaremos los fondos apropiados.');
        break;

    case 'efectivo':
        console.log('Pagaste en efectivo, felicidades.');
        break;

    default:
        console.log('Aun no pagas tu huevada');
        break;
}; // Diferencia de utilziar un "case " y un "if" if es solo arpa agregar una mas.
// En "case" se puede agregar mas de 2.