
function certo(acertar){
    acertar.forEach(function(element){
        element.classList.add("sucesso");
    }
     );
}


function errado(errar)
{
    errar.forEach(function(element)
    {

        element.classList.add("erro");
    });

    setTimeout(
        function()
        {
            errar.forEach(function(element)
            {
                element.classList.remove("descoberta");
                element.classList.remove("erro");
            });
          
        },1500)
}


