function teste(){
    //document.getElementById('primeira').innerHTML =" Primeiro atributo innerHTML..."
    //document.getElementsByClassName('uma').innerHTML += "getElementsByClassName.innerHTML += elemento por classe..."

    var elemento = document.getElementById('primeira');     //para alterar o texto o mais correcto é passar o texto para uma variavel e depois usar o innerHTML na var
    elemento.innerHTML = "Nova frase";

    var elementos2 = document.getElementsByClassName('uma');
    elementos2[2].innerHTML = "Texto Novo";             //vou alterar o texto do objeto com a classe uma no index [2]

    var elemento3 = document.getElementById('segundo');
    elemento3.style.backgroundColor = "grey";
   //com style. uso as funções de CSS 
}