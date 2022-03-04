var total = 0;

function descobrir(){

    

    var totalDescobertas=document.querySelectorAll(".descoberta:not(.sucesso)");
   
    if(totalDescobertas.length>1){
        return;
    }
    
    this.classList.add("descoberta");
    
    var mostra=document.querySelectorAll(".descoberta:not(.sucesso)");
    if(mostra.length<2)
    {
        return;
    } 

    console.log("ronda")
    
    document.getElementById('total').innerHTML = total;
    comparar(mostra);
 
 }

 function comparar(mostrar){
    
    if(mostrar[0].dataset.value===mostrar[1].dataset.value)
    {
        total +=1;
        certo(mostrar);
        
    }
    else
    {
        errado(mostrar);
    }
}