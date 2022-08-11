let jogador = {
    nome: "Zecas",
    idade: 22,
    equipa: "SLB",
    posicao: "DC",
    salario: 5.500,
    mostrar()
    {
        return "Nome: " + this.nome + "\nIdade: " + this.idade + "\nTeam: "+ this.equipa + "\nPos: " + this.posicao + "\nSal: "+ this.salario.toFixed(2);
    },
    aumento()
    {
        this.salario = this.salario *1.10;
    },
    transfer(nova_equipa)
    {
        this.equipa = nova_equipa;
    }
}

console.log(jogador.mostrar());
jogador.aumento();
console.log(jogador.mostrar());
jogador.transfer("PORTO");
console.log(jogador.mostrar());

