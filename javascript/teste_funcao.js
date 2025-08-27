'use strict';


//Como criar uma função em JavaScript:
// Criando uma função
function dizerOla() {
  console.log("Olá, mundo!");
}

// Chamando (usando) a função
dizerOla(); 

/*Explicando:

function → palavra-chave para criar a função.

dizerOla → nome da função (você escolhe).

{ ... } → bloco de código que será executado quando a função for chamada.

dizerOla(); → é assim que você chama a função.*/

console.log("\nExemplo 2: Funções com parâmetros");

/*Podemos passar informações para a função:*/

function dizerNome(nome){

    console.log("Olá " + nome + "!");
    
}

dizerNome("maria");
dizerNome("João");


console.log("\nExercicio 1: Funções");

/*Crie uma função chamada saudacao que receba um nome como parâmetro e escreva no console:*/

function saudacao (nome){

    console.log("Olá "+ nome + ", seja  bem vindo !");
      
}
saudacao("Calos");

console.log("\nExercicio 2: Funções");

/*Crie uma função chamada dobro que receba um número e mostre no console o dobro dele.*/

function dobro (numero){

      console.log("O resultado é, " + numero);
      return numero * 2
    
            
}
 dobro(10);

 /*Duas formas possíveis:
1. Só mostrar o resultado no console (mais simples):*/

function dobro(numero) {
    console.log("O dobro é " + (numero * 2));
}

dobro(10); // O dobro é 20

/*2. Retornar o resultado para usar depois (um pouquinho mais avançado):*/

function dobro(numero) {
    return numero * 2;
}

let resultado = dobro(10);
console.log("O dobro é " + resultado); // O dobro é 20



/*Top!  Então bora subir um nível e trabalhar com return.

Diferença importante

console.log() → só mostra o resultado na tela.

return → entrega o valor de volta pra quem chamou a função (assim podemos guardar em variáveis e usar em outros cálculos).*/

function dobro (numero){

    return numero * 2;

}
let resposta = dobro(10);

console.log("O Resultado é, " + resposta);



/*Outro exemplo (usando o valor retornado em cálculos):*/

function soma(a, b){
     return a + b; 
}

let somaTotal = soma(10,35)

console.log("A soma é, "+ somaTotal);
console.log("O dobro é, "+ dobro (somaTotal));

/*Exercício com return

Crie uma função chamada quadrado que recebe um número e retorna o número elevado ao quadrado (ou seja, multiplicado por ele mesmo).*/

function quadrado(numero){

    return numero * numero
}

let mostraQuadrado = quadrado(10);

console.log("O resultado é, "+ mostraQuadrado);

/*Depois, use essa função dentro de outra chamada somaQuadrados, que recebe dois números, calcula o quadrado de cada um e retorna a soma. */

function somaQuadrados(numero1, numero2){

    return quadrado(numero1) + quadrado(numero2); 
    
   
}

let tot = somaQuadrados(3,5);
console.log("Total é:, "+tot);


/* Exemplo 1: dobrar + mostrar*/

function dobrar(numero){

    return numero * 2
}

function mostraDobrado(numero){

    let total = dobrar(numero);

    console.log("O dobro de, "+numero +"é" + total);
    
}

mostraDobrado(4);

/*Exemplo 2: triplo + mostrar*/

function triplo(numero){

    return numero * 3
}

function mostraTriplo(numero){

    console.log("O triplo de, " + numero +"é, " + triplo(numero));
    

}

mostraTriplo(10)

/*Exercício: área do retângulo

Crie uma função chamada area que recebe largura e altura e retorna a área do retângulo (largura × altura). */


function area(largura, altura){


    return largura * altura
}

let areaTotal = area(12, 25);

console.log("A área do retângulo é:"+ areaTotal);

/*Crie uma função chamada mostrarArea que recebe largura e altura, chama a função area e mostra no console: */

function area(largura, altura) {
    return largura * altura;
}

function mostrarArea(largura, altura) {
    let resultado = area(largura, altura); // chamando a função 'area'
    console.log("A área do retângulo é: " + resultado);
}

// Testando
mostrarArea(12, 25); // A área do retângulo é: 300
mostrarArea(5, 10);  // A área do retângulo é: 50