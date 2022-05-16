// Estructuras iterativas o bucles

// ciclo for
// A partir de una expresión de declaración,
// otra expresión de control y otra expresión
// de actualización, ejecuta en bucle un bloque
// de código

for (i = 0; i < 10; i++) {
    console.log('El valor de i es ' + i);
}

// ciclo while
// Ejecutan un bloque de código en bucle
// mientras se cumpla una expresión condicional

let password = '1234';

// Para el ejemplo vamos a usar unos métodos
// muy antiguos de JS en el DOM (mala práctica)

while (password !== '1234') {
    password = prompt('Escriba su contraseña');
}

// Hay una versión do while que se diferencia
// en que si la expresión no se cumple si
// se llega a ejecutar la primera iteración
// (no se suele utilizar)

// do {
//     password = prompt('Escriba su contraseña');
// } while (password !== '1234')