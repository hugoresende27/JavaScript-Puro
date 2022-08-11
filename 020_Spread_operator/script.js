function teste()
{
    let nomes1 = ['Hugo' , 'Rita'];
    let nomes2 =['Carlos', 'Antonio'].concat(nomes1) ;

    document.getElementById('info').innerHTML = nomes2;
}

function teste2()
{
    let nomes1 = ['Hugo' , 'Rita'];
    let nomes2 =['Carlos', 'Antonio', ...nomes1];

    document.getElementById('info2').innerHTML = nomes2;
}

function teste3()
{
    let frase = 'Esta é uma frase...';
    let carateres = frase.split("");
    let carateres2 = [...frase];

    document.getElementById('info3').innerHTML=carateres;
    document.getElementById('info4').innerHTML=carateres2;
    

}

function teste4()
{
    let dados = [50,60,70];
    let res = adicao(10,20,30);
    let res2 = adicao(...dados);        //spread operator em uso ... para somar os dados do array dados
    document.getElementById('info5').innerHTML = res;
    document.getElementById('info6').innerHTML = res2;

    document.getElementById('info7').innerHTML = sub(10);       //resultado NaN porque só passei um parametro
    document.getElementById('info7').innerHTML += sub(10,5);     //aqui funciona porque por defeito o parametro z tem valor 100

}

function adicao( x , y , z )
{
    return x + y + z;
}

function sub( x , y , z = 100 )     //parametro com valor por defeito
{
    return x - y - z;
}

function teste5()
{
    let pessoa = {
        nome:'Hugo',
        idade:33,
        falar:function (){              //pode ser falar() { } a partir do ecma6 deixou de precisar da palavra function
            return 'Olá hugo...';
        }
    };
    document.getElementById('info7').innerHTML = pessoa.falar();
}