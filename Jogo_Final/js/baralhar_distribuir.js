function cartasBaralhadas(cartas){
  var baralho;
  var totalCartas=cartas.concat(cartas);
  baralho=totalCartas.sort(function(){
      return 0.5-Math.random();
  } );
  return baralho;
  }

function DistribuirCartas(cartas){

  var baralhar=cartasBaralhadas(cartas);
  var mesa=document.querySelector("#mesa");
  mesa.innerHTML= "";
 
  baralhar.forEach(
  function (element){
     var carta=document.createElement("div");
     carta.innerHTML=
     "<div class='carta' data-value="+element+">"+
           "<div class='carta__conteudo'>"+
           element+
          "</div>"+
       " </div>";
     
mesa.appendChild(carta);
});
}