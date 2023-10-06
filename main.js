const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];
// Imprimir los números del 21 al 34 en la consola.
// for (let i = 21; i < 35; i++){
//     console.log(i);
// }
// Imprimir los números del 1 al 10 en la consola, pero solo los pares.
// for (let index = 2; index < 11; index+= 2) {
//     console.log(index);
// }
// Imprimir los números del 1 al 10 en la consola, pero solo los impares.
// for (let index = 1; index < 11; index+= 2) {
//     console.log(index);
// }
// Dado un array de números, imprimir en la consola solo los números pares.
// for (number of numbers){
//     if (number%2 == 0){
//         console.log(number);
//     }
// }
// Dado un array de números, imprimir en la consola solo los números mayores a 5.
// for (number of numbers){
//     if (number > 5){
//         console.log(number)
//     }
// }
// Dada un array de nombres, imprimir solo los nombres que empiezan con la letra "A".
const names = ["Jane", "Anthony", "Ben", "Alex", "Alexia", "Anna", "Rachael", "Jason", "Adam", "Robert"];
// for (name of names){
//     if (name[0] == "A"){
//     console.log(name);
//     }
// }
// Dada un array de números, encontrar el número más grande y el número más pequeño.
const randomNumbers = [98, 32, 7, 84, 12, 902, 435, 3, 5, 24, 3241, 83, 3636];
// let min = randomNumbers[0];
// let max = randomNumbers[0];
// // console.log(min, max);
// for (number of randomNumbers){
//     if (number < min){
//         min = number;
//     }
//     if (number > max){
//         max = number;
//     }
// }
// console.log(`The lowest number is ${min} and the highest number is ${max}.`);
// Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.
// for (let index = 4; index < 10; index++) {
//     console.log(index);
// }
// Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.
// for (let index = 3; index < 18; index+= 2) {
//     console.log(index);
// }
// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10
// let contarHasta10 = 0;
// while (contarHasta10 < 10){
//     contarHasta10 ++;
//     // console.log(contarHasta10);
// }
// Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle
// const arrayBucle = [];
// for (let index = 4; index < 19; index++) {
//     arrayBucle.push(index);
// }
// console.log(arrayBucle)
// let resultado = 0;
// for (number of arrayBucle){
//     resultado += number;
//     // console.log(resultado);
// }
// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos
const sofia = ['Con', 'Sofia', 'aprendiendo', 'bucles'];
// for (element of sofia){
//     console.log(element);
// }
// for (index in sofia){
//     console.log(sofia[index]);
// }
// Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3
// let i = 0;
// while (i < 20){
//     if (i%3 == 0){
//         console.log("patata");
//     }
//     i ++;
// }
//  Sumar los números del 1 al 10 y mostrar el resultado en la consola.
let total = 0;
// for (let index = 1; index < 11; index++) {
//     total += index;
//     console.log(total);
// }
//  Dado un array de números, imprimir en la consola la suma de todos los números.
// for (number of randomNumbers){
//     total += number;
//     console.log(total)
// }
// Imprimir los números del 1 al 20 en la consola, pero para los múltiplos de 3 imprimir "Fizz", para los múltiplos de 5 imprimir "Buzz" y para los múltiplos de ambos imprimir "FizzBuzz".
// for (let index = 1; index < 21; index++) {
//     if (index%3 == 0 && index%5 == 0){
//         console.log("FizzBuzz");
//     }
//     else if (index%3 == 0){
//         console.log("Fizz");
//     }
//     else if (index%5 == 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(index);
//     }
// }  
let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];
// Crea una array con la gente que su nombre tiene 4 letras, sin utilizar el método filter de los arrays y muéstralo por consola.
// const fourLetterName = [];
// for (persona of gente){
//     if (persona.nombre.length == 4){
//         fourLetterName.push(persona);
//     }
// }
// console.log(fourLetterName)
// Crea una array con la gente que su nombre empieza por J y sean menores de 40 años, sin utilizar el método filter de los arrays y muéstralo por consola.
// const underFortyJs = [];
// for (persona of gente){
//     if (persona.nombre[0] == 'J' && persona.edad < 40){
//         underFortyJs.push(persona)      
//     }
// }
// console.log(underFortyJs)