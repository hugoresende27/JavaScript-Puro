class Veiculo
{
    static nVeiculos = 0;//contador a 0
    constructor (marca, modelo, ano)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        Veiculo.nVeiculos++;        //atributos static usa se o nome a classe (Veiculo) contador de veiculos criados
    }

    static mostraNVeiculo()         //metodo para contar numero de veiculos criados na classe      
    {
        console.log (`Existem ${Veiculo.nVeiculos} veiculos criados...`);
    }
}

let vei1 = new Veiculo("Audi","A2",2000);
let vei2 = new Veiculo("Audi","A5",2005);
let vei3 = new Veiculo("Audi","A6",2015);
Veiculo.mostraNVeiculo();           //classe.metodo()