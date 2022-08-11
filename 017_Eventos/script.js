document.getElementById('botao').onclick = apresentarData;

function iniciar()
{
    document.getElementById('botao2').onclick = apresentarData3;
}

function teste()
{
    document.write("Olá Hugo!!!!!");
}

function alterar(elemento)
{
    elemento.innerHTML =" ---------------- HR --------------- ";
}

function apresentarData()
{
    document.getElementById('info').innerHTML = Date();
}
function apresentarData3()
{
    document.getElementById('info3').innerHTML = Date();
}

function mouseover(e)
{
    e.style.backgroundColor = "yellow";
    e.style.color ="brown";
    e.style.fontWeight = "bold";
}
function mouseout(e)
{
    e.style.backgroundColor = "red";
    e.style.color ="green";
    e.style.fontWeight = "bold";
}
function mouseclick(e)
{
    e.innerHTML = "Mais texto";

}

