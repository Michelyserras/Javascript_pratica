/* criar uma classe pessoa com os atributos nome, peso e altura
    e tambem um metodo que calcule o IMC 
*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        const IMC = this.peso/(this.altura * this.altura);
        return IMC;
    }

    classificandoIMC(){

        const imc = this.calcularImc();

        if(imc < 18.5){
            return (' Abaixo do peso.');
        } else if (imc >= 18.5 && imc < 25){
            return (' Peso Normal.');
        } else if (imc >= 25 && imc < 30){
            return (' Acima do peso');
        } else if (imc >= 30 && imc < 40){
           return (' Obeso.');
        } else {
           return (' Obesidade grave.');
        }

    }
}

const pessoa1 = new Pessoa('Michely', 55, 1.65);
console.log(pessoa1.classificandoIMC());
console.log(pessoa1.calcularImc());

const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificandoIMC());