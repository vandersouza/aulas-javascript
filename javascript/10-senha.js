'use strict';


/*variavel que recebe o campo senha */
const campoSenha = document.querySelector("#senha");

/*variavel usada recebe o botão mostrar */
const btnMostrar = document.querySelector("#mostrar");

/*declarando função para receber evento do botão presionado */
btnMostrar.addEventListener("pointerdown", function(){

    campoSenha.type = "text";
});

/*declarando função para receber evento do botão soltar */
btnMostrar.addEventListener("pointerup", function(){

campoSenha.type = "password";

});

/*declarando função para receber evento de mexer mouse */
btnMostrar.addEventListener("pointerout", function(){

campoSenha.type ="password"

});