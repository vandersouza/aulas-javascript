'use strict';

/*Comandos condicionais mais comuns

if -> SE

else -> SENÃO
*/

console.log("Exemplo 1");

let numero = 5;

if (numero >= 10) {

    console.log("Se voce esta bvendo essa mensagem é porque a condicao é verdadeira!");

};

console.log("\nExemplo 2");


let aluno = "joao";
let idade = 15;


if (idade < 18) {

    console.log("aluno é menor de idade");

}

else {

    console.log("maior de idade");

}


console.log("\nExercicio");


/*1. Crie duas variáveis conforme a seguir:
 
- Nota 1 (contendo um valor de 0 a 10)
- Nota 2 (contendo outro valor de 0 a 10)
 
2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
 
3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
Caso contrário, mostre "reprovado".*/




let nota1 = 3;
let nota2 = 2;

let media = nota1 + nota2 / 2;

if (media >= 7) {

    console.log("Aluno aprovado");
}

if (media == 5) {

    console.log("Aluno de Recuperação");

}

if (media < 5) {

    console.log("Aluno reprovado");

}










