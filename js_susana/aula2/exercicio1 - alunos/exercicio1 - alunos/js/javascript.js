var mensagem = "Hugo";

var idade = +33;
console.log(mensagem+idade);

let num1 = 10;
let num2 = "10";
let num3 = 10;

if (num1 == num2) console.log('iguais ==');
if (num1 === num3) console.log('iguais ===');





let nm = document.getElementById('nome').value;
console.log(nm);



// console.log(curr_year-nm);

function recolheDados(Event){

    Event.preventDefault();
    
    var nome = document.querySelector('#nome').value;
   
    let curr_year = new Date().getFullYear();

    var idade = curr_year-document.querySelector('#anonasc').value;

    console.log("ano de "+  curr_year);
    console.log(nome);
    console.log(idade);
    var boasVindas = document.querySelector('#bemvinda');
    // boasVindas.textContent = nome  + " " + idade;
    var facha = "";
    if (idade > 65) facha = "Velho";
    else if (idade > 18) facha = "Adulto";
    else facha = "Criança";
    boasVindas.innerHTML = "<h1>"+nome  + " " + idade+" anos<p> "+facha+"</p></h1>";

}


function sucesso(){
    console.log("Enviado OK");
}
// recolheDados();

// var meuform = document.querySelector('#formulario').addEventListener("click",sucesso);
var meuform = document.querySelector('#formulario').addEventListener("submit",recolheDados);