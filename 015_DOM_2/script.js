function teste()
{
    //modificar um elemento
    document.getElementById('p1').innerHTML ="Parágrafo 1 modificado com innerHTML"
////////////////////////////////////////////////////////////////////
    //modificar o estilo de um elemento
    var x = document.getElementById('p2');
    x.style.fontWeight = "bold";
    x.style.color ="red";
    x.innerHTML = "Alterado para cor vermelha e texto bold. color e fontWeight";
/////////////////////////////////////////////////////////////////////
    //modificar visibilidade de um elemento
    var p3 = document.getElementById('p3');
    var p4 = document.getElementById('p4');
    p3.hidden = true;
    p4.innerHTML = 'O parágrafo 3 foi hidden'
/////////////////////////////////////////////////////////////////////
    //modificar o atributo de um elemento
    var link = document.getElementById('link');
    link.setAttribute("href","http://www.imdb.com");
    //adicionar uma atributo
    link.setAttribute ("target", "_blank");
////////////////////////////////////////////////////////////////////
    //adicionar um novo elemento à página
    var novo = document.createElement('p');     //cria um novo elemento <p>NOVO!</p>
    document.body.appendChild(novo);
    novo.innerHTML = "NOVO!";
////////////////////////////////////////////////////////////////////
    //trocar o conteudo da div1 para div2
    var foto = document.getElementById('imagem');         //crio var imagem com getElementById com id da imagem
    document.getElementById('div2').appendChild(foto);        //vou buscar a div de destino ('div2'), appendChild(variável criada)
}