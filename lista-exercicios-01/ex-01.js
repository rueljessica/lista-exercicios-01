//Escreva um algoritmo para ler uma temperatura em graus Celsius, 
//calcular e escrever o valor correspondente em graus Fahrenheit.

const prompt = require("prompt-sync")();

var temperaturaCelsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

console.log("A temperatura em Fahrenheit é: " + temperaturaFahrenheit);