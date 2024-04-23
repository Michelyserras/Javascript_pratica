// objeto é uma coleção  de valores, e funciona através de chave e valor;
// coleção dinâmica de chave e valor;

const pessoa = {
    nome: 'Michely',
    idade: 25,

    // função dentro de um objeto é chamado de método, e é possivel usar os valores determinados no objeto
    descrever: function(){
        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// michely.altura = 1.63; // adiciona um novo valor ao objeto
// michely.peso = 55.9;
// delete michely.nome; // exclui um valor do objeto

// console.log(michely.nome);
// console.log(michely.idade);
// console.log(michely);

// pessoa.descrever();
// pessoa.nome = 'Aline';
// pessoa.idade = '23';

// pessoa.descrever();

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
}
pessoa.descrever();
