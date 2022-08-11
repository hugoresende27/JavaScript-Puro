
function descobrir() {
  var mostra;
  var cartaPendente;
  var totalDescobertas = document.querySelectorAll(".descoberta:not(.sucesso)"
  );

  if (totalDescobertas.length > 1) {
    return;
  }

  this.classList.add("descoberta");
  document
    .querySelector("#sons-carta")
    .cloneNode()
    .play();

    mostra = document.querySelectorAll(".descoberta:not(.sucesso)");
  if (mostra.length < 2) {
    return;
  }

  comparar(mostra);
  atualizaContador();
  cartaPendente = document.querySelectorAll(".carta:not(.sucesso)");
  if (cartaPendente.length === 0) {
    setTimeout(finalizar, 1000);
  }
}

function comparar(mostra){
  if(mostra[0].dataset.value===mostra[1].dataset.value){
      certo(mostra);
      }
      else{
          errado(mostra);
      }
}

