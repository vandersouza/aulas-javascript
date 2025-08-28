'use strict';

/*Exemplo 01*/

//Procurando (querySelector) por um elemento chamado exemplo1
const exemplo1 = document.querySelector("#exemplo1");
const mensagem1 = document.querySelector("#mensagem01");
const corpo = document.querySelector("body");

/*Para sellecionar varios elementos, use queryselectorAll
o resultado é uma espécie de array de lementos (NodeList)*/


const paragrafo = document.querySelectorAll("p")

console.log(paragrafo);

/*Um evento é acontecimentos ou fenômeno que, quando acontece, dispara ações em nosso programa /site/aplicação

O javaScript suporta centenas de tipos de enventos.

Exemplos:

Cliques do mouse, precionar teclas, tocar na tela, rolagem da pagina, carregamento da pagina e etc.

*/

/*Ao clicar 1x, adciona um texto ao paragrafo de mensagem */
exemplo1.addEventListener("click", function(){
// Exemplo detectando eventos 
    mensagem1.textContent = "Opa evento funcionou";
    
    //adiciona classe destaque
    mensagem1.classList.add("destaque")


});

/*Ao clicar 2x, retira o texto do paragrafo de mensagem */
mensagem1.addEventListener("dbclick", function(){

    mensagem1.textContent = "";

    //remove classe destaque
    mensagem1.classList.remove("destaque")
});


/*Exercícios
 
1) Crie uma constante nova e selecione o h1 da sua página

2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.

3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão). 

*/


const paraHum = document.querySelector(".paragrafo");


/*paraHum.addEventListener('mouseover', function() {
  
    paraHum.textContent = "Praticando Eventos!";

   // paraHum.classList.add("centralizar")

   paraHum.style.textAlign = "center"
       
});

const ref = document.getElementById("referencias")
ref.addEventListener("click",function(){

 paraHum.textContent = "Eventos!";

   // paraHum.classList.add("centralizar")

   paraHum.style.textAlign = "left"


});*/




paraHum.addEventListener("mouseover",(event) => {
    // highlight the mouseover target
    event.target.style.color = "orange";
    event.target.style.textContent = "Eventos";
    event.target.style.textAlign = "center"


})

const refe = document.querySelector("#referencias");

refe.addEventListener("click",(eventos) =>{






})


/*Exemplo 3 Modo noturno*/

const botaoModoNoturno = document.querySelector("#noturno");


/*botaoModoNoturno.addEventListener("click", function(){

corpo.classList.toggle("modo-noturno");

if(corpo.classList.toggle("modo-noturno" == false)){

    botaoModoNoturno.textContent = "Desativar"
}
else{

     botaoModoNoturno.textContent = "Ativar"
}

});*/

//Outro mode de fazer

botaoModoNoturno.addEventListener("click", function() {
    corpo.classList.toggle("modo-noturno");

    if (corpo.classList.contains("modo-noturno")) {
        botaoModoNoturno.textContent = "Desativar";
    } else {
        botaoModoNoturno.textContent = "Ativar";
    }
}); 

/* DESAFIOS!
    1) Faça a mudança de cores acontecer gradualmente (use o transition!)
    2) Se o modo noturno estiver ativado, ou seja, se a classe modo-noturno
    estiver aplicada à página, faça o texto do botão mudar para "Desativar".
    Caso contrário, faça o texto do botão exibir "Ativar". */