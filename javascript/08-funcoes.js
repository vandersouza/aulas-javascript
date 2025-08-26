'use strict';

/*Sbore Funções

Funções são blocos de códigos responsáveis por executar determinadas tarefas.
Para usar estes blocos/funções, é necessário "chamar/invocar" a função desejada atraves do seu nome.

Vantagens ao usar funções:

-Reutilização de código
_ Organização de código-fonte, permitindo a separação de diferentes lógicas e responsabilidades
- maior facilidade para manutenções

No javaScript existem varias maneiras de se criar uma função:

função: função anônima, nomeda, declarada e arrow function.

*/


console.log("Exemplo 1 função anônima");

const exemplo1 = function () {
    /*corpo da função: coloca ação que a função vai fazer*/

    console.log("Olá função anônima!");

};


/*Exemplo chamada de função*/
exemplo1();


console.log("\nExemplo 2: Função Nomeada/Declarada");

function exemplo2() {

    console.log("Está é um exemplo de fução nomeda");

}

exemplo2();


console.log("\nExemplo 3: Arrow Function /Flecha / Seta");

/*Sintaxe potencialmente mais simples para funções no javascript*/
const exemplo3 = () => {

    console.log("Sintaxe Arrow Function!");

};

/*Obs: funções em qualquer sintaxe tabem podem trabalhar com parametros / argumentos
 
Quando uma função precisa de valores/dados atraves de parametros/argumentos entre os parenteses

Geralmente ao terminar o processamento dos dados a função "retorna" para fora uma resultado
 
*/

console.log("\nExemplo 4: função com parâmetro");

function saudacao(nome = "visitante") {

    console.log("Olá, " + nome);

};


saudacao("Vanderlei");
saudacao("tiago");
saudacao("José");
saudacao();



console.log("\nExemplo 5: função com parâmetro e retorno");

/*Sempre tivermos a necessidade de trabalhar com o resultado do processamento de uma função
então essa função deve ter o return*/
function multiplicar(valor1, valor2) {

    return valor1 * valor2

}

/*Chamamos a função e recebemos o retorno/resultado dela*/
let resultado1 = multiplicar(10, 5);
let resultado2 = multiplicar(200, 10);

/*exibimos o resultado*/
console.log("Resultado 1: " + resultado1);
console.log("Resultado 2: " + resultado2);


console.log("\nExemplo 6: Simplificado com arrow function");

function somares(valor1, valor2) {

    return valor1 + valor2;
}

console.log(somares(150, 500));


/*Versao 2 usando uma Arrow function*/


const somar = (valor1, valor2) => valor1 + valor2;


console.log(somar(150, 500));

console.log("\nExemplo 7: formatando valor monetario");

let preco = 5000;
let desconto = preco * 0.10;//10%
let precpFinal = preco - desconto;


function formatarMoeda(valor) {

    return new Intl.NumberFormat("pt-br", {

        style: "currency",
        currency: "BRL"

    }).format(valor)



}


console.log("Preço original: " + formatarMoeda(preco));
console.log("Desconto: " + formatarMoeda(desconto));
console.log("Preço final: " + formatarMoeda(preco));

//Exemplo:

const exemplo = new Intl.NumberFormat("pt-br", {

    style: "currency",
    currency: "BRL"

}).format(preco);

console.log(exemplo);


NumberFormat().format()








