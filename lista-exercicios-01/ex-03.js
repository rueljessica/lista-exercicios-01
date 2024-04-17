//Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// Some 25 ao primeiro inteiro;
// Triplique o valor do segundo inteiro;
// Modifique o valor do terceiro inteiro para 12% do valor original;
// Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.


const prompt = require("prompt-sync")();

var primeiroInt = parseInt(prompt("Digite o primeiro número inteiro: "));
var segundoInt = parseInt(prompt("Digite o segundo número inteiro: "));
var terceiroInt = parseInt(prompt("Digite o terceiro número inteiro: "));
var quartoInt = parseInt(prompt("Digite o quarto número inteiro: "));

quartoInt = primeiroInt + segundoInt + terceiroInt;
primeiroInt += 25;
segundoInt *= 3;
terceiroInt *= 0.12;


console.log("Some 25 ao primeiro inteiro: " + primeiroInt);
console.log("Triplique o valor do segundo inteiro: " + segundoInt);
console.log("Modifique o valor do terceiro inteiro para 12% do valor original: " + terceiroInt);
console.log("Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros: " + quartoInt);