function meuNomeeh(nome){
    return 'Seu nome é: ' + nome;
}
function verificarIdade(idade){
    if(idade >= 18){
        return console.log(meuNomeeh('Joao'), ' e vc já pode comprar bebida. :D');
    } else{
        return console.log(meuNomeeh('joao'),'e vc ainda não pode comprar bebida T-T.');
    }

}

(function (){
    verificarIdade(16);
})();