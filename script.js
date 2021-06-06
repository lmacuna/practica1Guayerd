/*// EJERCICIO Nº0

let nombre = prompt("ingrese su nombre por favor");
console.log(nombre);
alert("hola" + " " + nombre);
let apellido = prompt("ingrese su apellido");
console.log("hola" + " " + nombre + " " + apellido);


//EJERCICIO Nº1

let num1 = parseInt(prompt("ingrese un numero"));
let num2 = parseInt(prompt("ingrese otro numero"));
suma = num1 + num2
console.log("el resultado de la suma es: " + suma);



//EJERCICIO Nº2

let edad = parseInt(prompt("ingrese su edad"));
let añoNacimiento = 2021 - edad;
cosnole.log("usted nació en: " + añoNacimiento);



//EJERCICIO Nº3

let balance = 150000;
let balActual = 0;
let ext = prompt("su saldo es: " + balance + "\n" + "ingrese importe extraccion");
console.log(ext + " " + "extraccion ATM")
balActual = balance - ext;
alert("su nuevo saldo es: " + balActual);
console.log(balActual + " " + "nuevo saldo");



//EJERCICIO Nº4

let not1 = parseFloat(prompt("ingrese la primer nota"));
let not2 = parseFloat(prompt("ingrese la segunda nota"));
let not3 = parseFloat(prompt("ingrese la tercer nota"));
let promedio = parseFloat((not1 + not2 + not3) / 3);
console.log("su promedio es: " + promedio);



//EJERCICIO Nº5

let medida = parseFloat(prompt("ingrese su medida a convertir en metros"));
let cent = medida * 100;
let pulg = medida * 3.9;
let pies = medida * 3.2;
let mensaje = "conversion a: " + " ";
console.log("metros ingresados: " + medida);
console.log(mensaje + cent + "cm");
console.log(mensaje + pulg + "plg");
console.log(mensaje + pies + "pies");



//EJERCICIO Nº6

let nu1 = parseFloat(prompt("ingrese un numero"));
let nu2 = parseFloat(prompt("ingrese otro numero"));
let suma = nu1 + nu2;
console.log("El resultado de la suma es: " + suma);
let nu3 = parseFloat(prompt("ingrese un nuevo numero"));
let mult = suma * nu3;
console.log("El resultado final es: " + mult);



//EJERCICIO Nº7

let minutos = parseInt(prompt("ingrese minutos"));
let segundos = minutos * 60;
alert("Los minutos ingresados equivalen a: " + "\n" + segundos + " segundos");



//EJERCICIO Nº8

let alturaRectangulo = parseInt(prompt("ingrese la altura del rectángulo"));
let baseRectangulo = parseInt(prompt("ingrese el valor de la base"));
let áreaRectangulo = baseRectangulo * alturaRectangulo;
console.log("El valor del área es: " + áreaRectangulo);
alert("el valor del area es:\n" + área);



//EJERCICIO Nº9

let alturaTriangulo = parseFloat(prompt("ingrese la altura del triangulo"));
let baseTriangulo = parseFloat(prompt("ingrese la base del triangulo"));
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("el área del Tiángulo es: " + areaTriangulo);



//EJERCICIO Nº 10

let monto = parseFloat(prompt("ingrese un monto"));
let porcentaje = parseFloat(prompt("ingrese porcentaje de descuento a efectuar"));
let importeDescuento = (monto * porcentaje) / 100;
let total = monto - importeDescuento;
console.log("importe total con descuento es: " + total);
alert("monto:" + monto + "\ndescuento:" + porcentaje + "\nimporte de descuento: " + importeDescuento + "\nimporte total con descuento es: " + total);



//EJERCICIO Nº11

let nombre = prompt("ingresa tu nombre por favor");
let edad = parseInt(prompt("ingresa tu edad"));
let añoNacimiento = 2021 - edad;
alert("hola " + nombre + " !!!\nhas nacido en el año " + añoNacimiento + ".");



//EJERCICIO Nº12

let temp = parseFloat(prompt("ingresa la temperatura al conversor en ºc"));
let tempFahrenheit = (temp * (9 / 5)) + 32;
alert("la conversion de grado celsius a fahrenheit es: "+tempFahrenheit+" ºF");



//EJERCICIO Nº13

let tempFahrenheit = parseFloat(prompt("ingresa la temperatura al conversor en ºF"));
let temp = (tempFahrenheit - 32) * (9 / 5);
alert("la conversion de ºF a Celsius es: " + temp + " ºc");*/



//EJERCICIO Nº14

let num1 = parseFloat(prompt("ingrese un numero"));

let resultado = ((num1 + 5) * 10);

if (resultado % 3 !== 0) {
    let num = parseInt(resultado / 3);

    alert(num);

} else {
    let num = resultado / 3;
    alert(num);
}