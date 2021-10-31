class Veiculo       //SUPER CLASSE
{
    constructor(marca, modelo, ano)
    {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrar()
    {
        console.log(`Marca:: ${this.marca}`);
        console.log(`Modelo:: ${this.modelo}`);
        console.log(`Ano:: ${this.ano}`);
    }
}

class Carro extends Veiculo     //CLASSE CARRO CLASSE FLHA
{
    constructor(marca,modelo,ano,nportas)
    {
        super(marca,modelo,ano,nportas);     //PALAVRA RESERVADA SUPER
        this.nportas = nportas;
    }
    mostrar ()      //POLIMORFISMO, REESCREVER O METODO
    {
        console.log(`*******Dados de Carro******* `);
        super.mostrar();                //PALAVRA RESERVADA SUPER
        console.log(`Portas:: ${this.nportas}`);
    }
}

class Camiao extends Veiculo
{
    constructor(marca,modelo,ano, peso)
    {
        super(marca,modelo,ano,peso);
        this.peso = peso;
    }
    mostrar()       //POLIMORFISMO NO METODO MOSTRAR()
    {
        console.log(`*******Dados Camião***********`);
        super.mostrar();//reescreve o mostrar da superclasse
        console.log(`Peso:: ${this.peso}`);
    }
}
//////////////////////////////////////////////////////
let carro = new Carro ("Audi", "A1", "2012", 5);
let camiao = new Camiao ("Volvo", "F12", "1995", 2);


carro.mostrar();        //metodo mostrar() de carro
camiao.mostrar();       //metodo mostrar() de camião

