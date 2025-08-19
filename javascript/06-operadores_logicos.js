'use strict';

/*Operadores Logicos

&& -> E and
|| -> ou or

! -> não negação not

*/

console.log("\nOperadores Logicos E &&");

let idade = 20;
let temCarta = false;



if (idade >= 18 && temCarta) {
    

    console.log("pode Dirigir");
        
}

else{

    console.log("Não pode");
    
}

/*Sobre  e triplo sinal de igual

quando é usado triplo é analisado qual tipo de dado que esta sendo analisado texto ou inteiro

let resultadoCompracao = a === b; false

let a = 10; inteiro
let b = '10'; string

Duplo sinal de igual olha como a mesmo coisa

let resultadoCompracao = a == b; true

let a = 10; inteiro
let b = '10'; string
*/

console.log("\nOperadores Logicos OU ||");


let feriado = true;
let fimDeSemana = true;

if (feriado || fimDeSemana ) {

    console.log("nao tem aula");
    
}

else{

    console.log("tem aula");
  
}











