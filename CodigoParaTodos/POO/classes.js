/*
class NomeClass {
    construtor(){...}
    metodo1(){...}
    metodo2(){...}
    metodo3(){...}
}
*/

class Veiculo       //classe funciona como um molde para criação de objetos
{
    constructor(marca, modelo, ano)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
/////////////////////////////////////////////////DEVOLVE A marca
    get Marca()
    {
        console.log("METODO GET");
        return this.marca;
    }
////////////////////////////////////////////////SET DE MARCA com parametro m
    set Marca(m)
    {
        console.log("METODO SET");
        this.marca = m;
    }
}

let carro1 = new Veiculo("Toyota","Yaris",2012);
let carro2 = new Veiculo("Audi","A8",2020);
let carro3 = new Veiculo("BMW","M3",2005);
carro1.Marca = "Honda";
console.log(carro1.Marca);