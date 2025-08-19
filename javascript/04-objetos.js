'use strict';


//exemplo 1 objeto com dados de uma pessoa

//prototipo de um objeto

console.log("Exemplo de Obejto\n")
const pessoa ={

nome: "Chaves",
idade: 8,
cidade: "São Paulo",
estado: "SP"


};

console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos.`);


//exemplo 2 objeto com array

const livro ={


    titulo: "senhor dos aneis",
    autor:"J.R.R. Tolkien",
    volumes: ["A sociedade do Anel"," As duas Torres, O retorno do ", "Oretorno do Rei"]
    
};

//para acessar alguns dos volumes passamos pela propriedade (volumes) usando 'ponto' e chegando nela usamos os colchetes com indice pois se trata de um array

console.log(livro.volumes[1]);

// exemplos 3: array de objetos
console.log("\nExemplos");



const livros = [
    
{

    titulo: "Pai  e Pai Pobre",
    autor: "vanderlei"
},


 {                                  
    titulo: "Rico e Pai Pobre",
    autor: "vanderlei"
 },

 {
    titulo: "Pai Rico e Pai Pobre",
    autor: "vanderlei"

},



]

//console.log(livro[2].cidade);

//Vimos aqui que podemos colocar um objeto dentro de um array
// sendo assim o array na sua posição guarda o objeto com suas propriedades que pode ser acessando pelo array.



const aluno = {

    nome: "Vanderlei Souza",
    dataNascimeno: "29/09/1980",
    listaContato:['11-99447-2586','1197668-2584'],
    
    endereco:{

        rua: "Rua esteban araciel",
        numero: 64,
        bairro:"Parque bancario"

    }
};

console.log(`O ${aluno.nome} esta com ${aluno.dataNascimeno}
    
    o telefone é ${aluno.listaContato[0]} mora na ${aluno.endereco.rua}${aluno.endereco.numero}${aluno.endereco.bairro} `);






