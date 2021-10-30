let estudante = {
    nome: "Hugo",
    idade: 33,
    curso: "Informática",
    ano: 2,

    mostrar()
    {
        return "Nome:: " + this.nome + "\nIdade:: " + this.idade;     //this refere se ao objeto que chama o metodo, instancia do objeto
    },

    mostrarCurso()
    {
        return "Curso : " + this.curso;
    },
    
    passarAno()
    {
        this.ano = this.ano+1;
    }
};

console.log (estudante.mostrar());
console.log (estudante.mostrarCurso());
estudante.passarAno();
console.log (estudante.ano);
