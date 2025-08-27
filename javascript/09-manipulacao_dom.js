'use strict';

/*Exemplo 01*/

//Procurando (querySelector) por um elemento chamado exemplo1
const exemplo1 = document.getElementById("exemplo1");
const mensagem1 = document.querySelector("#mensagem01");
const corpo = document.querySelector("body");

console.log(exemplo1);
console.log(mensagem1);
console.log(corpo);

/*Para sellecionar varios elementos, use queryselectorAll
o resultado é uma espécie de array de lementos (NodeList)*/


const paragrafo = document.querySelectorAll("p")

console.log(paragrafo);




