/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta
    e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual condição de pagamentos e efetuar o calculo adequado.

    Código Condição de pagamento:
        - À vista Débito = 10% de desconto;
        - À vista pix = 15% de desconto;
        - Em duas vezes = Preço normal sem juros;
        - Acima de duas vezes = Preço normal mais juros de 10%;
*/

const precoProduto = 100.00;
const tipoPagamento = 3;

/*
if (tipoPagamento === 'Débito') {
    console.log('Valor da etiqueta = ', precoProduto)
    const desconto = precoProduto * (10 / 100);
    console.log('Desconto = ', desconto);
    const precoAtual = precoProduto - desconto;
    console.log('Valor a ser pago = ', precoAtual);

} else if (tipoPagamento === 'Pix' || tipoPagamento === 'Dinheiro'){
    console.log('Valor da etiqueta = ', precoProduto);
    const desconto = precoProduto * (15 / 100);
    console.log('Desconto = ', desconto);
    const precoAtual = precoProduto - desconto;
    console.log('Valor a ser pago = ', precoAtual);

} else if(tipoPagamento === 2){
    console.log('Valor da etiqueta = ', precoProduto);
    const parcelas = precoProduto / tipoPagamento;
    console.log('Valor a ser pago p/ parcela = ', parcelas);

} else if(tipoPagamento > 2){
    console.log('Valor da etiqueta = ', precoProduto)
    const juros = precoProduto * (10 / 100);
    console.log('Juros = ', juros);
    const precoAtual = precoProduto + juros;
    console.log('Valor a ser pago por parcela = ', precoAtual/tipoPagamento);
} else {
    console.log('Forma de pagamento inválida!')
}
*/

if (tipoPagamento === 1) {
    /*
    console.log('Valor da etiqueta = ', precoProduto)
    const desconto = precoProduto * 0.1;
    console.log('Desconto = ', desconto);
    const precoAtual = precoProduto - desconto;
    console.log('Valor a ser pago = ', precoAtual);
    */
    console.log('Valor a ser pago = ', precoProduto - (precoProduto * 0.10));

} else if (tipoPagamento === 2) {
   /* console.log('Valor da etiqueta = ', precoProduto);
    const desconto = precoProduto * 0.15;
    console.log('Desconto = ', desconto);
    const precoAtual = precoProduto - desconto;
    console.log('Valor a ser pago = ', precoAtual); */
    console.log('Valor a ser pago = ', precoProduto - (precoProduto * 0.15));

} else if (tipoPagamento === 3) {
    /*console.log('Valor da etiqueta = ', precoProduto);
    const parcelas = precoProduto / 2;*/
    console.log('Valor a ser pago = ', precoProduto);

} else {
    /*console.log('Valor da etiqueta = ', precoProduto)
    const juros = precoProduto * (10 / 100);
    console.log('Juros = ', juros);
    const precoAtual = precoProduto + juros; */ 

    console.log('Valor a ser pago  = ', precoAtual + (precoProduto * 0.10));
}


