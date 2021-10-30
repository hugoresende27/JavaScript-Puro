//////////////////////////// CRIAR OBJETO ///////////////////////
// nome = { atributo : valor, ...}
let estudante = {
    nome: "Hugo",
    idade: 33,
    curso: "Informática",
    ano: 2
};

console.log(estudante.curso);  // devolve o atributo curso do objeto estudante
estudante.turma = 'C'; //adiciona o atributo turma ao objeto estudante
delete estudante.idade; //delete do atributo idade

console.log(estudante.turma);
console.log(estudante.idade);

//////////////////////////// EXERCICIO ///////////////////////
let jogador = {
    nome: "Zecas",
    idade: 22,
    equipa: "SLB",
    posicao: "DC"
}
jogador.salario = 5.500;
delete jogador.idade;

console.log(jogador);