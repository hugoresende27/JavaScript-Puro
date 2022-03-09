// Escrevemos os níveis dinamicamente
escreveNiveis();

// Atribuímos eventos iniciais
document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});

document
  .querySelector("#jogo-normal")
  .addEventListener("click", iniciaJogoNormal);
document
  .querySelector("#jogo-relax")
  .addEventListener("click", iniciaJogoRelax);

document
  .querySelector("#control-nivel")
  .addEventListener("click", mostraMenuNiveis);
document
  .querySelector("#fecha-niveis")
  .addEventListener("click", ocultaMenuNiveis);

document.querySelectorAll(".nivel").forEach(function(elemento) {
  elemento.addEventListener("click", mudaNivel);
});

document.querySelector("#subir").addEventListener("click", NovoNivel);

document.querySelector("body").addEventListener("click", ForaDeMenu);

document.addEventListener("keydown", teclaEscFechaMenu);

//Mostramos a tela de boas-vindas
document.querySelector("#bemvindos").classList.add("visible");
