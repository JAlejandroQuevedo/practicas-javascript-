/**
 * Ciclo
    * Un ciclo o iteracion, son estructuras de control que nos van a permitir ejecutar un bloque de codigo siempre que se cumpla
    * una determinada condicion.
    * Nos permite automatizar tareas que necesitamos que se repitan.
    * EXISTEN DOS TIPOS DE CICLOS, POR CONTEO (FOR) Y POR CONDICIONES (WHILE, DO WHILE).
    * Un ciclo por conteo o por contador es un tipo de bucle que se puede utilizar siempre que sepamos la cantidad de tiempo
    * que necesitamos que se repita un proceso.
    * Un ciclo condicional es un ciclo que se repite siempre que se respete una determinada condicion.
 */



/* Operadores de incremento y decremento, son operadores unitarios que ayudan a aumentar o disminuir el valor de una variable
Operador de incremento = > ++, incrementa en uno la unidad.
* Se puede dividir de dos maneras. 
Operador pre incremento/decremento = > el valor de la variable va a incrementar antes de que se utilice.
let x = 5;
let y = ++x;

Operador post incremento/decremento = > el valor de la variable incrementa despues de que se utiliza la variable actual.
let x = 5;
let y = x++;
Operador de decremento = > --
*/

/*For
Es una estructura de control de flujo que nos permite ejecutar un codigo de manera repetida siempre y cuando se conozcan la
cantidad de veces que se quiere ejecutar.
Esta compuesto por tres partes:

for(inicializacion (desde) ; condicion (hasta) ; actualizacion (es la parte donde se va a incrementar o decrementar la variable
    de control) ){
        Bloque de codigo a repetir
    }
    for(let i = 1 ; i <= 21 ; i++){
    console.log("iteracion numero : " , i)

    const NUMERO = parseInt(prompt("Ingresa un numero"));

for(let i = 1 ; i <= 10 ; i++){
    let resultado = NUMERO * i;
    console.log(NUMERO + " X " + i + " = " + resultado)
}
}
*/
/*SENTENCIA BREAK: se utiliza para salir de un bucle de manera inmediata cuando se cumpla una condicion especifica
por ejemplo, se puede hacer un break dentro de un ciclo para hacer que se termine antes.
for(let i = 1 ; i <= 10 ; i++){
if (i === 5){
    break
}
console.log(i)
}

Sentencia continue = > se utiliza para saltar iteraciones y continua con la siguiente iteracion.
for(let i = 1 ; i <= 10 ; i++){
    if (i === 5){
        continue
    }
    console.log(i)
    }

*/
/*While = > es un bucle que se ejecuta siempre que se cumpla con una condicion
while(condicion){
    bloque de codigo que se va a ejecutar
}
EJEMPLO = > queremos que se muestren numeros del 1 al 10
let contador = 1;

while(contador <= 10){
    console.log("numero: " +contador)
    contador++
}

console.log("Bucle completado")

let segundos = 10;

while(segundos >= 0 ){
    console.log("Cuenta regresiva: " + segundos);
    segundos--
}

console.log("Tiempo agotado")

//Juego de adivinanza 

const PALABRASECRETA = "javascript";

let intento = 0;
let adivinanza= "";

while(adivinanza !== PALABRASECRETA) {
    adivinanza = prompt("Adivina la palabra secreta").toLocaleLowerCase();
    intento++;

    if(adivinanza !== PALABRASECRETA){
        alert("Adivina de nuevo, una pista es un lenguaje de programacion")
    }
    
}
alert("Felicidades, adivinisate, tardaste " + intento + " intentos")


*/

/*Do while = > es un bucle while con la diferencia de que este ejecuta primero el codigo sin importar si es verdadero o falso y 
luego se verifica la condicion
do{
    //Bloque de codigo a ejecutar
} while(//condicion)

//Sumar numeros por usuario

let suma = 0;
let continuar;

do{
    const NUMERO = parseFloat(prompt("Ingresa un numero"));
    if (!isNaN(NUMERO)){
        suma += NUMERO;
        continuar = prompt("quieres ingresar otro numero? (si/no)").toLocaleLowerCase();
    }else{alert("ingresa un numero valido")
    continuar ="si"
}
}while(continuar==="si")

alert("La suma total es: " + suma)
*/

/**Switch 
 * Es una sentencia que nos permite tomar desiciones en valor de una determinada desicion. Se puede usar como una alternativa 
 * a la sentencia if/else y se usa para realizar determinadas acciones en una variable.Sirve para la toma de desiciones basadas en
 * un valor de una expresion alternativa al if/else/ 
 * Sirve para realzar diferentes acciones.
 * switch(expresion){
    valor

    switch(){
    case valor1:
        //codigo a ejecutar
        break;
}
}


//calculadora

let num1=parseFloat(prompt("Ingresa un numero"))
let operacion = prompt("ingresa el operador (* / +)")
let num2=parseFloat(prompt("Ingresa un numero"))
let resultado;

switch(operacion){
    case "*":
        resultado = num1 * num2;
        break;
    case "+":
        resultado = num1 + num2;
        break;   
    case "/":
        resultado = num1 / num2;
        break;    
    default:
        alert("Operacion no valida")
        resultado = "indefinido"
}
alert("resultado: " + resultado) 
 */

