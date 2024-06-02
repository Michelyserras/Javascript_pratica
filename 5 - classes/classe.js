class Pessoa{
    nome;
    idade;
    anoNascimento;

    // supondo que o nome e a idade sejam obrigatorios
    // é necessario usar o constructor para poder acessar e alterar os valores instanciados
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// classe é a definição e a instancia é a ocorrencia

// sem implementar o constructor a instancia seria dessa forma:
const Davi = new Pessoa();
Davi.nome = 'Davi';
Davi.idade = 22;

console.log(Davi);

Davi.descrever();

// apos implementar o constructor

const milena = new Pessoa('Milena', 16);
const michely = new Pessoa('Michely', 22);
console.log(milena);
console.log(michely);

// a partir disso é possivel criar novas instancias que sempre seguirão o modelo criado dentro da classe

function compararPessoa(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if( p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else{
        console.log(`${p1.nome} e ${p2.nome} possuem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoa(vitor, renan);
