//VARIÁVEIS
//---------
// var - escopo de função
// let - escopo de bloco de código
//const - valor não pode ser alterado

function testeVar()
{
    var valor = 10;
    if (true)
    {
        var valor = 20;     //ao alterar valor para 20 aqui vai alterar em toda a função
    }
    document.write(valor);
}
/////////////////////////////////////////////////////////////////////////////
function testeLet()
{
    let valor = 99;
    if (true)
    {
        //valor = 55;      
        let valor = 66; //este valor é diferente do valor de  cima, porque nasce e morre dentro do bloco
        document.write(valor);
    }
    document.write(valor);
}
////////////////////////////////////////////////////////////////////////////
function testeConst()
{
    const valor = 100;
    //valor = 99;     //não mostra nenhum valor porque entra em conflito, const não pode ser alterada
    document.write(valor);      
}
////////////////////////////////////////////////////////////////////////////
function testeConst2()
{
   const pessoa = {
       nome:'Hugo',
       idade: 33
   }    ;

   pessoa.nome ="Cenobitas";        //no caso dos objetos consigo alterar os seus atributos, apesar de ser const
   document.write("Nome é "+ pessoa.nome + " e tem " + pessoa.idade + " anos de idade");
}