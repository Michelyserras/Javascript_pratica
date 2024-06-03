let numero = [];

for(let i=0; i<=5; i++){
    numero.push(i);
}
console.log(numero)

for( let i = 0; i<= numero.length; i++){
    if(numero[i] % 2 === 0){
        par = console.log(`${i} =`, numero[i]);
    }
}