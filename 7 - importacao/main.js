//importando funções
//const funcoes = require('./funcoes_aux');

const { gets, print}= require('./funcoes_aux');

const qtd = gets();

/*const pessoa = {
    nome: 'vitor'
};

// esses dois códigos são equivalente
// destructing
const { nome } = pessoa;
const nome = pessoa.nome;
*/

/*const numSorteados = [];

for(let i = 0; i<5; i++){
   const numerosSorteado = gets();
   numSorteados.push(numerosSorteado);
}

print(numSorteados);
*/
let maior = 0;
/*
for(let i=0; i<=numSorteados.length; i++){
    if(numSorteados[i] > maior)
        maior = numSorteados[i];
}

*/
// outra forma


for(let i = 0; i <= qtd; i++){
    const numerosSorteado = gets();
    if(numerosSorteado > maior){
        maior = numerosSorteado;
    }
}

print(maior);


