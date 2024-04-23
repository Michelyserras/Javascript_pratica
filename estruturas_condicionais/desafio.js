/*Faça um programa para calcular o valor de uma viagem.
Você terá 5 variaveis. Sendo eles:
    1- Valor do etanol;
    2- Valor da gasolina;
    3- Tipo do combustivel;
    4- Gasto médio de combustível do carro po KM;
    5- Distância em km da viagem;
Imprima no console o valor que será gasto em combustível para realizar essa viagem. */

const carro = 'etanol'; // para definir uma string como variavel é só escrever entre aspas simples

const valorEtanol = 5.79;
const valorGasolina = 6.66;
const kmPorLitros = 10;
const distanciaKm = 100;

const gastoMedio = distanciaKm / kmPorLitros;
/*const gastoGaso = gastoMedio * valorGasolina;
const gastoEta = gastoMedio * valorEtanol

if (carro === 'etanol') {
    console.log(gastoEta.toFixed(2));
} else if (carro === 'gasolina') {
    console.log(gastoGaso.toFixed(2));
} else {
    console.log('selecione um tipo de combustível válido');
}*/

// ao declarar uma variavel dentro de um bloco de condição ela ira existir apenas nesse lugar, portanto é necessário usar um console.log dentro de cada um para poder imprimir o valor
if (carro === 'etanol') {
    const valorGasto = gastoMedio * valorEtanol;
    console.log(valorGasto);
} else {
    const valorGasto = gastoMedio * valorGasolina;
    console.log(valorGasto);
}