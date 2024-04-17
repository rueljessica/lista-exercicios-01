//Escreva um algoritmo para ler o número de eleitores de um município, o número de
//votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
//em relação ao total de eleitores.

const prompt = require("prompt-sync")();

var totalEleitores = parseInt(prompt("Digite o número total de eleitores: "));
var votosBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
var votosNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
var votosValidos = parseInt(prompt("Digite a quantidade de votos válidos: "));

var percentualBrancos = (votosBrancos / totalEleitores) * 100;
var percentualNulos = (votosNulos / totalEleitores) * 100;
var percentualValidos = (votosValidos / totalEleitores) * 100;

console.log("Percentual de votos brancos: " + percentualBrancos + "%");
console.log("Percentual de votos nulos: " + percentualNulos + "%");
console.log("Percentual de votos válidos: " + percentualValidos + "%");