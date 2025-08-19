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




let nota1 = 4;
let nota2 = 4;

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

console.log("\nExercicio Condicional Encadeada");

/*Condicional Encadeada / Sucesssiva


verificar o desempenho do aluno

- media acima de 9? ótimo
- media acima de 7? bom
- media até de 5? ruim
*/


if (media > 9) {
   
console.log("Ótimo");
}

else if (media > 7) {
   
console.log("bom");
}

else if (media > 5) {
   
console.log("Ruim");
}

else{

    console.log("Péssimo");
    
}
console.log(media);


console.log("\nCondicional composta com oprador ternario");



/*Condicional composta com oprador ternario

usados em ternario
?  :   

*/

let situacao = idade >=18 ? "maior" :"menor";

console.log(situacao);
















