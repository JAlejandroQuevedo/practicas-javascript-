/**
 * 1) Escribe un programa que use un bucle for para calcular la suma de todos los números pares entre 1 y 50. 
 * Muestra el resultado en la consola.


let resultado = 0;

for (let i = 0 ; i <=50 ; i++){
    if(i % 2 == 0){
        resultado +=i;
    }
}
console.log("El resultado de la suma de todos los pares de 50 es : " + resultado) */

/*2) Crea un programa en el que el usuario deba adivinar un número secreto entre 1 y 10.
Utiliza un bucle while para permitir que el usuario haga múltiples intentos hasta que adivine el número correcto. 
Proporciona pistas si el número es demasiado alto o demasiado bajo.*/

/*let numeroSecreto = parseInt(Math.random() * 10);

while(numeroSecreto != numeroDigitado){
    var numeroDigitado = prompt("Por favor ingresa un numero entre el 1 y el 10");
    if(numeroDigitado == numeroSecreto){
        alert("Felicidades, has adivinado el numero secreto");
    }else if (numeroDigitado < numeroSecreto){
        alert("Fallaste, el numero ingresado es muy pequeño, por favor ingresa un numero mas grande")
    }else if(numeroDigitado > numeroSecreto){
        alert("Fallaste, el numero ingresado es muy grande, por favor ingresa un numero mas pequeño")
    }
}*/

/*3) Crea una calculadora simple que permita al usuario realizar operaciones de suma, resta, multiplicación y 
división entre dos números. 
Utiliza un bucle do...while para permitir al usuario realizar múltiples cálculos hasta que decida salir.*/

/*let num1 = parseInt(prompt("Ingresa un numero"));
let operador = prompt("Ingresa el operador que deseas utilizar para la operacion")
let num2 = parseInt(prompt("Ingresa un segundo numero"));

do{
    if(operador == "+"){
        alert("La suma de tus numeros es: " + (num1 + num2));
    }else if(operador == "*"){
        alert("La multiplicacion de tus numeros es: " + (num1 * num2))
    }else if(operador == "/"){
        alert("La division de tus numeros es: "+ (num1 / num2))
    }
}while(num1 && num2 === Number)*/

/*4) Crea un programa que permita a los usuarios convertir una cantidad de dinero de una moneda a otra. 
El programa debe utilizar la sentencia switch para manejar diferentes tipos de monedas. 
Debes proporcionar tasas de cambio ficticias para algunas monedas.*/

let moneda = prompt("Ingresa la moneda que deseas convertir (Euro, Dolar, Peso Argentino");
let cambio = prompt("Ingresa la cantidad que deseas convertir");

switch(moneda){
    case "Euro":
        alert(cambio + " Euros es igual a " + (cambio * 18.85) + " Pesos Mexicanos")
        break;
    case "Dolar":
        alert(cambio + " Dolares es igual a " + (cambio * 17.12) + " Pesos Mexicanos")
        break;
    case "Peso Argentino":
        alert(cambio + " Pesos Argentinos" + (cambio * 0.048) + " Pesos Mexicanos")
        break;
    default:
        alert("No has ingresado un tipo de moneda valido")
}

//Todo lo ingresado dentro del ciclo que es declarado como una variable debe hacerse con la palabra reservada "Var"
// function bucleWhile(num){ 
//     let i = 0;
//     while (i < num){
//         console.log(i);
//         i++
//     }
// }
// bucleWhile(11);

// function doWhile (num){
//     let i = 0;
//     do{
//         console.log(i)
//         i++
//     }while(i<num)
// }
// doWhile(11)

// function bucleFor(num){
//     for(let i = 0 ; i < num ; i++){
//         console.log(i)
//     }
// }
// bucleFor(11)