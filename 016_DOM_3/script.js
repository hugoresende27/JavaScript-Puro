//https://cdn.pixabay.com/photo/2015/03/26/09/41/chain-690088_960_720.jpg
// TRUE :: https://w7.pngwing.com/pngs/38/204/png-transparent-computer-icons-check-mark-true-or-false-miscellaneous-company-logo.png
// FALSE :: https://w7.pngwing.com/pngs/568/635/png-transparent-graphy-postage-stamps-rubber-stamp-fake-shemp-text-rectangle-logo.png

var valor = true;//para mudar a imagem a cada clique

function teste()
{
    var novo = document.createElement('p');     //cria um novo elemento <p>NOVO!</p>
    document.body.appendChild(novo);
    novo.innerHTML = "NOVO!";


    var y = document.getElementById('imgA');        //muda a imagem com id imgA para esta source
    //analisa a imagem
    if (valor)      //se valor true muda imagem
    {
        y.setAttribute("src", "https://media.istockphoto.com/photos/freedom-concept-picture-id1043441246?b=1&k=20&m=1043441246&s=170667a&w=0&h=br2os6gWy0BVGoT7ETv3ZJ1nSxSsfAVbajBPjO5NBYY=")
        valor = false;      //muda valor para false
    }
    else
    {           //como valor false mostra a segunda imagem
        y.setAttribute("src", "https://cdn.pixabay.com/photo/2015/03/26/09/41/chain-690088_960_720.jpg");
        valor = true;
    }

    var elemento = document.getElementById('div1');     //criei elemento que vai buscar o que está em div1
    var numero_img = elemento.getElementsByTagName('img').length;       //vai contar quantas tag's img existem em div1
    document.getElementById('info').innerHTML = "::::::: div1 ::::::::: "+numero_img;

    var elemento = document.getElementById('div2');     //criei elemento que vai buscar o que está em div2
    var numero_img = elemento.getElementsByTagName('img').length;       //vai contar quantas tag's img existem em div2
    document.getElementById('info').innerHTML += "::::::: div2 ::::::::: "+ numero_img;
  
}