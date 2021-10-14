//operadores aritmeticos --> sinais para executar operações matemáticas ou concatenar strings

var x = 10, y = 20;
x += y ; // x = 30

//operadores de comparação --> para comparar variáveis ou valores, são usados em mecanismos de decisão de fluxo

/*
==      igual a valor
===     igual em valor e em tipo
!=      diferente de valor
!==     diferente em valor ou em tipo
?       operador ternário

*/

var nome = 'Hugo';

function teste()
{
    var x = 10;
    var y = '10';
    document.getElementById('vars').innerHTML= "VAR X:: "+x+" <br>VAR Y:: "+y;
   
    if ( x == y )
    {
        document.getElementById('info').innerHTML = "É igual ==";       //10 é == a '10'
    }
    else
    {
        document.getElementById('info').innerHTML = "As var são DIFERENTES";
    }

    if ( x === y )
    {
        document.getElementById('info2').innerHTML = "É igual ===";     //10 não é === a '10'
    }
    else
    {
        document.getElementById('info2').innerHTML = "As var são DIFERENTES ===";
    }
}

  