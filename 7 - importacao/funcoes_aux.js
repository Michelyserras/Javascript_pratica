
const entradas = [5, 50, 10, 98, 23, 99, 100];
let i = 0; 

function gets() {
    const valor = entradas[i];
    i++;
    return valor;

}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print};

//outro jeito
//module.export.gets = gets
//mocked == simulação

/*
Como é o ciclo desse código? como ele funciona?
R: Primeiro o node.js irá executar as funções e em seguida preparar elas para serem exportadas,
 após isso entende-se que o arquivo funcoes_aux esta exportando as funçoes gets e print
 */

/*const alunos = [];

 function sorteio(numero){
   return alunos.push(numero);
 }

 function maiorNum(){
    let maior = 0;
    for(let i = 0; i <= entradas.length; i++){
        if(entradas[i] >= maior)
            maior = entradas[i];
            
    }
    return maior;
 }

/*
console.log('Inicio do sorteio', alunos);
console.log('tamanho da lista: ', alunos.length);

 sorteio(5);
 sorteio(50);
 sorteio(10);
 sorteio(98);
 sorteio(23);

 console.log('Numeros sorteados: \n',alunos);

console.log('O maior numero sorteado foi: ', maiorNum(alunos));
console.log('tamanho da lista: ', alunos.length);
*/