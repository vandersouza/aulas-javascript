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















