/*Faça um programa para calcular o valor de uma viagem.
Você terá 3 variaveis. Sendo eles:
    1- Valor do combustível;
    2- Gasto médio de combustível do carro po KM;
    3- Distância em km da viagem;
Imprima no console o valor que será gasto em combustível para realizar essa viagem. */

const preco = 5.79; 
const kmPorLitros = 12; // em média um carro faz 10 km por litro; por isso 10 é atribuida a variavel
const distancia = 1580;

const litrosDistancia = distancia / kmPorLitros; // declarar variavel para descobrir o valor gasto em litros e depois poder imprimir
const valorGasto = preco * litrosDistancia;

// carro = 11km com 1 litro, quantos litros ele vai gastar em 44km? 
// fazemos a multiplicação do preço pela distância que será percorrida
//console.log(litrosDistancia * preco);
console.log(valorGasto.toFixed(2)); //to fixed arredonda os numeros após a virgula