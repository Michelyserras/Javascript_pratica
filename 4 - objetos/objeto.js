// objeto é uma coleção  de valores, e funciona através de chave e valor;
// coleção dinâmica de chave e valor;
// dinamica pq posso sempre adicionar ou remover valores

const pessoa = {
    // valores determinados dentro do objeto
    nome: 'Michely',
    idade: 25,

    // a função dentro de um objeto é chamada de método, e é possivel usar os valores determinados no objeto
    descrever: function(){
        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// michely.altura = 1.63; // adiciona um novo valor ao objeto
// michely.peso = 55.9;
// delete michely.nome; // exclui um valor do objeto

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

// pessoa.descrever();
// pessoa.nome = 'Aline';
// pessoa.idade = '23';

pessoa.descrever();

/*pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
}
pessoa.descrever();*/

// acessando dinamicamente os valores dentro do objeto

const atributo = 'nome';

// notação de coleção
console.log(pessoa[atributo]);
pessoa['nome'] = 'patati';

console.log(pessoa);
