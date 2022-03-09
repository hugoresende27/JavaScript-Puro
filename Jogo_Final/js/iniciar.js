function iniciar() {
  movimentos = 0;
  
  DistribuirCartas(niveis[nivelAtual].cartas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector(".seleciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#sobeNivel").classList.remove("visible");

  document.querySelectorAll(".carta").forEach(function(element) {
    element.addEventListener("click", descobrir);
  });

  if (!modoRelax) {
    iniciaCronometro();
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  }
}

function reiniciar() {
  nivelAtual = 0;
  atualizaNivel();
  iniciar();
}

function iniciaJogoNormal() {
  modoRelax = false;
  document.querySelector("#bemvindos").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJogoRelax() {
  modoRelax = true;
  document.querySelector("#bemvindos").classList.remove("visible");
  iniciar();
}
