// Estructuras (de control de flujo)

// Estructuras condicionales (que nos permiten
// definir si unas instrucciones se ejecutan
// o no)

// if
// if (expresión condicional) {
//      // código a ejecutar si se cumple   
// }

let nombre = 'Helena';
let edad = 22;
let esMayorEdad;

if (edad >= 18) {
    esMayorEdad = true;
    console.log(nombre + ' es mayor de edad');
}

// if-else
// if (expresión condicional) {
//      // código a ejecutar si se cumple   
// } else {
//      // código a ejecutar si no se cumple
// }

let valor1 = 10;
let valor2 = 20;

if (valor1 > valor2) {
    console.log('valor1 es mayor que valor2');
} else {
    console.log('valor1 es menor o igual que valor2');
}

// if-else-if

valor1 = 5;
valor2 = 5;

if (valor1 > valor2) {
    console.log('valor1 es mayor que valor2');
} else if (valor1 === valor2) {
    console.log('valor1 es igual a valor2');
} else {
    console.log('valor1 es menor que valor2');
}


