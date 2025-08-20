'use strict';

/* loops ou estrturas de reptição

São Comandos que, baseados em algumas condição logica são programados para executar ações repetidas vezes.

Comando mais tradicionais: while (Enquanto) e for (para)

Normalmente os loops são controlados atraves de uma variavel contadora
*/


console.log("Exemplo 1: While (enquanto)")

let i = 1;

while( i <= 5){


/*Incremento como funciona i = i + 1

i++; padrão de uso

i+= 2; conta de dois em dois

*/

console.log("passagem do loop"+i);
i++;

}





console.log("\nExemplo 2: for (para)");

/*For (inicialização de variavel condição e atualização)

decremento
for(let j = 50; j >= 1; j--)

Incremento
for(let j = 1; j <= 10; j++)
{

*/

for(let j = 1; j <= 10; j++){



    console.log("J vale agora"+j);
}

console.log("\nExemplo 4: loop e array");


const bandas = ["maria","joao","pedro","joana","teresa","jacinto"];

for(let i = 0; i <= bandas.length; i++ ){

    console.log(i +bandas[i]);
    
}

console.log("\nExemplo 5: loop e array com forOf");


/*Utilizado exclusivamente pata JS for/of*/
for(const banda of bandas){

    console.log(banda);

}

console.log("\nExemplo 5: loop com objeto");


const pessoa = {

    nome:"Joao santana",
    idade: 40,
    cidade: "São Paulo",
    estado:"SP"
};


/*console.log(pessoa.nome);/*Exemplo de um a 1*/

/*Usando o loop for/in para objetos (exclusivos em JS)*/

for(const prop in pessoa){

    console.log(pessoa[prop]);
   
}


console.log("\nExemplo 7: Exercicio laços");


/*1. Faça um array chamado "clientes" contendo 3 objetos.
 
Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").
 
2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
 
- Cliente: Dio, id: 1
- Cliente: Ozzy, id: 2
- Cliente: Ian, id: 3 

*/

const clientes = [
    
{

    nome: "Dio",
    id: "01",
    idade:24
},


 {                                  
    nome: "Ozzy",
    id: "02",
    idade:42
 },

 {
    nome: "Ian",
    id: "03",
    idade:52

},

]


/*Usando for/of para para mostrar array de objetos/*

/*for(const cliente2 of clientes){

    /*console.log("Cliente: "+cliente2.Cliente + ",ID:"+cliente2.id);*/

   /* console.log(`Cliente:${cliente2.Cliente}ID:${cliente2.id}`);
  }*/

 /*Usando for puro para percorrer um array de objetos*/
 
   /*let quantidade = clientes.length;*/
   /*for(i = 0; i < quantidade ; i++){


    console.log(`Clientes:${clientes[i].nome} ID:${clientes[i].id} Idade: ${clientes[i].idade}`);
   
   }*/


   
/*Usando While para percorrer o Array de objetos*/

let z = 0;

let quantidade = clientes.length;

while (z < quantidade) {
    console.log(`Cliente: ${clientes[z].nome} | ID: ${clientes[z].id} | Idade: ${clientes[z].idade}`);
    z++;
}

    



   





    


    





















