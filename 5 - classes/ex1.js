class Carro{
    marca;
    cor;
    gastoMedioKM;

    constructor(marca, cor, gastoMedioKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKM = gastoMedioKM;
    }

    gastoPercusso(km, combustivel){
        const gastoM = (km * this.gastoMedioKM) * combustivel;
     // const gaso = gastoM * combustivel
        return console.log(`o valor gasto para realizar o percusso foi: R$ ${gastoM}`);
    
    }
}

const fusca = new Carro('volkswagen', 'azul', 1/12);
console.log(fusca);

fusca.gastoPercusso(70, 5);

const palio = new Carro('fiat', 'prata', 1/10);
console.log(palio);

palio.gastoPercusso(70, 5);