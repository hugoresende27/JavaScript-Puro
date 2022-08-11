function ciclofor()
{
    var valores = [1,2,3,4,5,6,7,8,9];
    var res='';
    //var i = 0;
    for (i = 0; i< valores.length; i++)       //( ; i < valores.length ; )  
    {                                               //i++;
        if (i==5) continue; //(valores[i]==6) continue;        //if (valores[i] != 2)
        {
            res += valores[i] + ' | ';                                     
        }
    }

    document.getElementById('infofor').innerHTML=res;
}

function cicloforin()
{
    var automovel = {
        marca:'AUDI',
        cor:'preto',
        ano:2018
    };

    var res='';
    var item;
    for (item in automovel){
        res += automovel[item] + ' ';
    }
    document.getElementById('infoforin').innerHTML=res;
}

function ciclowhile()
{
    var valor = 1;
    var valor2 = 1;
    var res = '';
    var res2 = '';

    while (valor < 10)
    {
        
        res += valor + ' | ';
        valor++;
        if (valor==6) break;
    }
    document.getElementById('infowhile').innerHTML = res;
    do
    {                                                     //do while vai fazer o ciclo pelo menos 1x antes de verificar a condição
        res2 +=valor2 + ' * ';
        valor2++;
        
    }while (valor2 <1);
    document.getElementById('infowhile2').innerHTML = res2;
}