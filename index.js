
/*1 - Escribe un programa que determine si un usuario puede acceder a una página web basándose en dos condiciones: 
el usuario debe estar registrado y debe ser mayor de edad. Si ambas condiciones son verdaderas, muestra un mensaje de bienvenida. 
De lo contrario, muestra un mensaje de acceso denegado.

let usuario = prompt("Digite su usuario");

let edad = prompt("Digite su edad por favor");

if (usuario=="Alejandro" && edad>=18){
    alert("Bienvenido " + usuario);
}else {
    alert("Acceso denegado")
}*/

/*2- Crea un programa que determine si un producto está en stock en una tienda en línea. Para que un producto esté disponible, 
debe estar marcado como "en stock" o tener un precio con descuento. 
Si alguna de estas condiciones se cumple, muestra un mensaje de "Producto disponible"; 
de lo contrario, muestra un mensaje de "Producto agotado". 

let compra = prompt("Que producto dese consultar?");

let stock = ["Chamarra", "Guantes", "Camiseta"];

let descuento = 10;

if (compra ==  stock[0] || compra ==  stock[1] || compra ==  stock[2]  && descuento >=1){
    alert("Tu producto esta disponible y con un descuento del " + descuento + "%")
}else{
    alert("Tu producto no esta disponible por el momento")
}*/

/**
3- Desarrolla un programa que verifique si un usuario ha iniciado sesión. Si el usuario no ha iniciado sesión, 
muestra un mensaje que le recuerde iniciar sesión; si ha iniciado sesión, muestra un mensaje de bienvenida. 

let usuario = prompt("Ingresa tu usuario");

let usuariosConSesion = ["Alejandro" , "Jesus", "Martin", "Maxi"];

if(usuario == usuariosConSesion[0] || usuario == usuariosConSesion[1] || usuario == usuariosConSesion[2] || usuario == usuariosConSesion[3]){
    alert ("Bienvenido")
}else{
    alert ("No has inicado sesion, favor de hacerlo ")
}*/

/*4- Diseña un programa en JavaScript que simule un sistema de autenticación de usuario para un sitio web. 
El programa debe solicitar al usuario que ingrese un nombre de usuario y una contraseña. 
Debe verificar las siguientes condiciones para permitir el acceso:

El nombre de usuario debe ser "admin".
La contraseña debe ser "secreta" o "123456".*/

/*let logIn = prompt("Ingresa tu usuario");
let password = prompt("Ingresa tu contraseña");

let usuario, contraseña;
usuario = "admin";
contraseña = 123456;

if(logIn==usuario && password==contraseña){
    alert("Tu nombre de usuario y contraseña son correctos, bienvenido " + usuario);
}else{
    alert("Lo sentimos, no tienes permitido el acceso a este sitio web")
}*/


