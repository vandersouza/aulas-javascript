'use strict';


//Declarando um array (vetor)


let nomes = ['joao','pedro','maria','joaquim']



console.log(nomes);




for (let i = 0; i < nomes.length; i++) {
  
  console.log(nomes[i]);
  console.log(i);


  


};

//relembrando como montar um array
const coisas = [10, 'senac', "<h2>Oie</h2>", 1.88];



console.log(coisas[3]);
console.log(coisas[2]);
console.log(coisas[1]);
console.log(coisas[0]);


/* Exercícios (FAÇA AQUI MESMO!) */

// 1) Crie um array contendo o nome de 7 coisas que vc gosta (exemplos: artistas, músicas, livros, comida... sei lá, inventa!)

// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.



const gostos =['carro','trabalho','moto','dinheiro','viagens','familia','estudos']; 


console.log(gostos);

for (let i = 0; i < 1; i++  ){

  console.log(`Gosto muito de fazer, ${gostos[1]}, pois fico inspirado`);
  console.log(`Gosto muito de, ${gostos[5]}, Os  ${gostos[6]} me motiva,  pois fico inteligente`);
  
};

//Array de matriz de duas dimensoes 

const tecnologias = [

["html","css","javaScripit"],

["FIGMA", "PHOTOSHOP"],

["PHP","NODJS","SQL","EXPRESS"]

];

console.log(tecnologias);


                    //linhas colunas arrai by dimensional
console.log(tecnologias [2] [3]);





