class Jogador
{
    constructor (nome,idade,modalidade)
    {
        this.nome = nome;
        this.idade = idade;
        this.modalidade = modalidade;
    }
    mostrar ()
    {
        console.log (`NOME::${this.nome}`);
        console.log (`IDADE::${this.idade}`);
        console.log (`MOD::${this.modalidade}`);
    }

}

class JFtutebol extends Jogador
{
    constructor(nome,idade,modalidade,modeloChuteiras)
    {
        super(nome,idade,modalidade,modeloChuteiras);
        this.modeloChuteiras=modeloChuteiras;
    }
    mostrar()
    {
        console.log("JOGADOR DE FUTEBOL");
        super.mostrar();
        console.log(`Chuteiras-> ${this.modeloChuteiras}`);
    }
}

class JBasquete extends Jogador
{
    constructor(nome,idade,modalidade,altura,equipa)
    {
        super(nome,idade,modalidade,altura,equipa);
        this.altura=altura;
        this.equipa=equipa;
    }
    mostrar()
    {
        console.log("JOGADOR DE BASQUETE");
        super.mostrar();
        console.log(`Altura-> ${this.altura} metros`);
        console.log(`Equipa-> ${this.equipa}`);
    }
}

////////////////////////////

let x = new JFtutebol("Hugo", 33, "Futebol", "Nike");
x.mostrar();

let y = new JBasquete("Zecas",22,"Basquete", 2.20, "Benfica");
y.mostrar();