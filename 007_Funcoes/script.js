function teste()
{
    var x = 10;
    var y = 20;
    var res = x + y;
    document.write(res);        //com document.write toda a estrutura HTML desparece e fica só o res 
}

function teste2()
{
    var final = adicionar(120,200);
    document.getElementById('info2').innerHTML = final;
}

function adicionar( x , y )
{   
    var res = x + y;
    //document.write (res);
    return res;
}
