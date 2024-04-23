/*
    2) Formula do IMC = peso / (altura * altura);
    altura ao quadrado por isso altura * altura;

    Elabore um algoritmo que dado o peso e altura de um adulto, 
    mostre sua condição de acordo com a tabela abaixo.
    IMC em adultos, condição:
        - abaixo de 18.5 = Abaixo do peso;
        - Entre 18.5 e 25 = Peso normal;
        - Entre 25 e 30 = Acima do peso;
        - Entre 30 e 40 = Obeso;
        - Acima de 40 = obesidade grave.
*/

const peso = 130;
const altura = 1.75;

//const imc = peso/(altura * altura);
const imc = peso/ Math.pow(altura, 2); // math.pow = biblioteca (math) utiliza a função (pow) para realizar potenciação de numeros
console.log(' IMC = ', imc.toFixed(2));

if(imc < 18.5){
    console.log(' Abaixo do peso.')
} else if ( imc >= 18.5 && imc <= 25){
    console.log(' Peso Normal.');
} else if (imc >= 25 && imc <= 30){
    console.log(' Acima do peso');
} else if (imc >= 30 && imc <= 40){
    console.log(' Obeso.');
} else {
    console.log(' Obesidade grave.');
}
