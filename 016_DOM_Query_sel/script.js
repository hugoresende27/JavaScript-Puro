function teste()
{
    var ele = document.querySelectorAll('h3.titulo');       //associar com tags tipo h3 com classe titulo
    ele[0].innerHTML = 'texto novo';                        //os elementos estão numa estrutura parecida com um array, vai mudar a primeira tag h3

    var ele2 = document.querySelectorAll('h3');
    ele2[1].innerHTML +="...teste";     //para adicionar ...teste à segunda tag h3, ele2[1]
}