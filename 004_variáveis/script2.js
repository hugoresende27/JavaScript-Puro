function teste()
{
    var nome = 'Hugo';
        apelido = 'Resende';
    document.getElementById('info').innerHTML = nome + ' ' + apelido;
}
function teste2()
{
    var nome ;  //undefined
    document.getElementById('info2').innerHTML = nome;
}
function teste3()
{
    var preco = 12.5;
        quantidade = 12;
        total = preco * quantidade;
        document.getElementById('info3').innerHTML = total;
}

function teste4()
{
    var alunos = ['Hugo', 'Zé', 'Rita'];
        document.getElementById('info4').innerHTML = alunos + ' <br> pelo index --> ' + alunos [1] + alunos[5];
                                                            //alunos [5] não existe vai dar indefinido
}

function teste5()
{
    var carro = {
        marca : 'BMW',
        ano : 2020,
        cor : 'vermelho'
    }
        document.getElementById('info5').innerHTML ='MARCA:: '+ carro.marca + '<br> ANO:: ' + carro.ano + '<br> COR:: ' + carro.cor;
}