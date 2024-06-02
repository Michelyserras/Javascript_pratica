/* 
    1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre de uma faculdade, calcule e imprima 
    a sua media e sua classificação conforme a tabela a baixo.

    media = (nota1 + nota2 + nota3) / 3;

    Classificação :
        - media menor que 5 = reprovado;
        - media entre 5 e 7 = recuperação;
        - media acima de 7 = aprovado.
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

console.log(' Media:', media.toFixed(2));

if (media < 5) {
    console.log(' Aluno Reprovado');
} else if (media >= 5 && media <= 7) { // ((media === 5) || (media <=7))
    console.log(' Aluno em Recuperação');
} else {
    console.log(' Aluno Aprovado');
}