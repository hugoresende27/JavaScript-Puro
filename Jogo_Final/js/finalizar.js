function finalizar() {
  clearInterval(cronometro);
  if (nivelAtual < niveis.length - 1) {
    document.querySelector("#sobeNivel").classList.add("visible");
  } else {
    document.querySelector("#endGame").classList.add("visible");
  }
}
