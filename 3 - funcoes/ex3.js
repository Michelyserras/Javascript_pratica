function desconto(valor, percentual){
    return (valor - (valor * (percentual / 100)));
}
function calcularJuros(valor, juros){
    return (valor + (valor *(juros / 100)));
}

(function () {
    const precoEtiqueta = 100;
    const formaPagamento = 4;

    if(formaPagamento === 1){
        console.log(desconto(precoEtiqueta, 10));
    } else if(formaPagamento === 2){
        console.log(desconto(precoEtiqueta, 15));
    } else if(formaPagamento === 3){
        console.log(precoEtiqueta)
    } else {
        console.log(calcularJuros(precoEtiqueta, 18));

    }
})();

// console.log(200 * (10/100));