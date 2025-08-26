'use strict';

const pessoa = ["pedro","joao","carlos"] /*Declaração do array em sua forma literal*/

for(let i = 0; i < pessoa.length; i++ ){ /* Quando usamos For como laço essa é a forma padrão de declarar para que 
 ele faça seu trabalho, Aqui podemos observar diferente do While tudo é declarado em uma linha*/

    console.log(`Nomes de Clientes ${pessoa[i]}`); /*saida com as informações fornecidas pelo array*/
    
}




/*Percorrendo o Arrai utilizando o laço While aqui podemos observar que as declarações tanto da variavel usada para indice, quanto a variavel auxilixar receber os valores do array.

Neste tipo de laço fazemos a declaração da variavel fora de parentesses

e utilizamos uma variavel auxiliar para receber o valor a ser percorrido

*/

let i = 0; /* variavel do indice do laço*/

let contador = pessoa.length  /* variavel auxiliar (Contatdor) que recebe o valor do array*/

    while(i < contador){ /*Condição para que o laço execute até atigir o valor passado pelo array*/

    console.log(`Nome de Clientes com While: ${pessoa[i]}`); /*saida com as informações fornecidas pelo array*/

    i++; /*Incrementador utilizado no laço while*/
    
}


/*Neste Array com Objetos Primeiramente: Declaramos um array de nome "cadastroPessoa"

dentro deste array criamos 3 objetos com as seguintes propriedades:(nome, idade, altura, peso, cor_da_pele)

na saida apresentamos a seguintes estruturas:

Cliente:João  | Idade: 42 | Atura: 190 | Peso:115| branca
Cliente:Pedro | Idade: 24 | Atura: 160 | Peso:75 | preta
Cliente:Judas | Idade: 52 | Atura: 185 | Peso:98 | parda

*/

const cadadastroPessoa = [ /*Declaração Literal do array em array para declarar usamos []*/

   {

    nome: "João",  /*Declaração literal de um objeto dentro de um array para declarar usamos {}*/
    idade: 42,     /*Não podemos esquecer de utilizarmos a , para separação das propriedades */
    altura: 190,           
    peso: 115,
    cor_da_pele: "branca"
    
   },

   {

    nome: "Pedro",
    idade: 24,
    altura: 160,
    peso: 75,
    cor_da_pele: "preta"
    
   },

   {

    nome: "Judas",
    idade: 52,
    altura: 185,
    peso: 98,
    cor_da_pele: "parda",
    
   },



]


/*Laço for Utilizado para percorrer o array com objetos aqui foi usado a forma literal do laço For*/


for(let i = 0; i < cadadastroPessoa.length; i++){ /* Declaração do laço em sua forma literal*/

        /*Saida dos dados trazidos pelo laço For*/
            console.log(`Cliente:${cadadastroPessoa[i].nome} | Idade: ${cadadastroPessoa[i].idade} | Atura: ${cadadastroPessoa[i].altura} | Peso:${cadadastroPessoa[i].peso} | ${cadadastroPessoa[i].cor_da_pele}`);
    



}

/*const cadastroAparelhoCelular = {
    marca: "IPHONE",
    modelo: "16 PROMAX"
}

for(let recebe in cadastroAparelhoCelular){

    console.log(`${recebe} ${cadastroAparelhoCelular[recebe]}`);
    
}*/


const cadastroAparelhoCelular = {
    marca: "IPHONE",
    modelo: "16 PROMAX"
}

let j = 0;
let chaves = Object.keys(cadastroAparelhoCelular); // Object.keys pega as propriedades do objeto e transforma em um array (chaves) 


let percorre = chaves.length;

while (j < percorre) {
    console.log(`${chaves[j]}: ${cadastroAparelhoCelular[chaves[j]]}`);
    j++;
}

