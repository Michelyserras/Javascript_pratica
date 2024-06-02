/* O que é uma array?
    conjunto de dados dinamicos armazenados em uma variavel
*/

const alunos = ["João", "Vitor", "Marina"];
console.log(alunos);
console.log(alunos[2]);

// como adicionar em uma array;

alunos.push('Renan'); // metodo push insere um novo elemento no fim da array
alunos[4] = 'Lucas'; // forma não dinamica de inserir um novo dado na array tambem serve para substituir 
console.log(alunos);

// Como remover em uma array;
alunos.pop(); //remove o ultimo item 
alunos.shift(); //remove o primeiro
console.log(alunos);


const notas = [];
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(5);
notas.push(8);

console.log(notas.length);


/*function media(notas){
    let soma = 0
    for (let i=0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma/notas.length;
}
 
console.log(media(notas));

*/
let soma = 0;
for( let i = 0; i<notas.length; i++){
    let nota = notas[i];
    soma = soma + nota;
}
const media = soma/notas.length;







