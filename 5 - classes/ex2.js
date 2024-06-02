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
        return console.log(`O IMC do(a) ${this.nome} é igual a: ${IMC}`);
    }
}

const pessoa1 = new Pessoa('Michely', 55, 1.65);
console.log(pessoa1);

pessoa1.calcularImc();


const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose);
jose.calcularImc();