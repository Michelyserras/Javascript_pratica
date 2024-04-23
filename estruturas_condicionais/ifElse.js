const num = 0;
const isDivisivelPor5= (num % 5) === 0;

console.log(isDivisivelPor5);

if(num === 0){
    console.log('Número inválido'); 
} else if (isDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}
/*if(!epar){
    console.log('impar');
}*/