function sobeNivel() {
  nivelAtual++;
}

function atualizaNivel() {
  var nivelTexto = nivelAtual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
}

function NovoNivel() {
  sobeNivel();
  atualizaNivel();
  iniciar();
}
