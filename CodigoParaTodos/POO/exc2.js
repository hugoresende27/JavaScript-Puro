class Jogador 
{
    constructor( nome, idade, equipa, posicao, salario)
    {
        this.nome = nome;
        this.idade = idade;
        this.equipa = equipa;
        this.posicao = posicao;
        this.salario = salario;
    }
    get Salario()
    {
        return `O ${this.nome} tem um salário de ${this.salario}`;
    }
    set Salario(s)
    {
        if (s<1000)
        {
            this.salario = s;
        }
        else
        {
            console.log("Tem de ser menos de 1000");
        }
        
    }
}

let jog1 = new Jogador ("Robinho", 33, "Santos", "MC", 1575.50);
let jog2 = new Jogador ("Hulk", 38, "Corintias", "AC", 2200.25);

console.log(jog1);
console.log(jog2);
console.log(jog1.Salario);
jog1.Salario = 1999;
console.log(jog1.Salario);
