function certo(acertar){
  acertar.forEach(function(element){
      element.classList.add("sucesso");

  });
  document.querySelector("#sons-certo").play();
}



function errado(errar){
  errar.forEach(function(element){
      element.classList.add("erro");
});
    document.querySelector("#sons-erro").play();  

setTimeout(
  function(){
      errar.forEach(function(element){
          element.classList.remove("descoberta");
          element.classList.remove("erro");
       
       });
      
  }, 1500);
}

