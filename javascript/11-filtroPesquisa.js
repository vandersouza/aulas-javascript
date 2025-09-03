'use strict';

const buscaNomes = document.querySelector('#busca');

const clientes = document.querySelectorAll("#clientes li")


buscaNomes.addEventListener("input", function(){


   const termoDigitado = buscaNomes.value.toLowerCase();

    for(const cliente of clientes){

        if (cliente.textContent.toLowerCase().includes(termoDigitado)) {

            cliente.style.display = "list-item";
            
        } else {
            
            cliente.style.display = "none";
        }



    };



});
