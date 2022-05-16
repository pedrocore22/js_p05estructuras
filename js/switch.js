// Estructuras switch
// Es un mecanismo usado cuando tenemos que
// evaluar muchas condiciones de manera que
// simplifica los if-else-if

let diaSemana = 13;

switch (diaSemana) {
    case 1:
        console.log('hoy es lunes');
        break;
    case 2:
        console.log('hoy es martes');
        break;
    case 3:
        console.log('hoy es miércoles');
        break;
    case 4:
        console.log('hoy es jueves');
        break;
    case 5:
        console.log('hoy es viernes');
        break;
    case 6:
        console.log('hoy es sábado');
        break;
    case 7:
        console.log('hoy es domingo');
        break;
    default:
        console.log('Día no válido');
}

// Pueden usar diferentes valores en
// el mismo case

let mes = 'octubre';

switch (mes) {
    case 'enero':
    case 'febrero':
    case 'marzo':
        console.log('Estamos en el 1er trimestre');
        break;
    case 'abril':
    case 'mayo':
    case 'junio':
        console.log('Estamos en el 2º trimestre');
        break;
    case 'julio':
    case 'agosto':
    case 'septiembre':
        console.log('Estamos en el 3er trimestre');
        break;
    case 'octubre':
    case 'noviembre':
    case 'diciembre':
        console.log('Estamos en el 4º trimestre');
        break;
    default:
        console.log('Mes no válido');
}