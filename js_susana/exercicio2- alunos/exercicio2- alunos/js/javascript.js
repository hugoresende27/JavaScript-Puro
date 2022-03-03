var all_deck = "🐎";
var grupoCartas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺" ];
var grupoCartas2 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺" ];
var grupoCartas3 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺" ];

/// CONCATENAR ARRAYS array aninhado ////////////////////////////////////

var total_cartas = grupoCartas.concat(grupoCartas2,grupoCartas3);
var tot_cartas = grupoCartas.concat(grupoCartas);

// console.log(total_cartas);

var arr_aninhado = [ ["🌈", "👽"]
                    ,["👹", "👺"]
                    ,["🍦", "👽"]
                    ];


// console.log(arr_aninhado);


/// MEUS APONTAMENTOS /////////////// ////////////////////////////////////


function clica_mesa(){

}

/// FOREACH DOCUMENTATION //////////////// ////////////////////////////////////

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));


/// FOREACH susana //////////////// ////////////////////////////////////


// grupoCartas.forEach((e,i) => console.log(e+"="+i));

grupoCartas.forEach(function(ele, index)
    {
        
        // console.log(index+"->"+ele)
    });

/// function  cartas baralhadas //////////////// ////////////////////////////////////


function cartas_baralhadas(){
    var baralho;
    baralho = tot_cartas.sort(function()
        {
            return 0.5-Math.random();
        }
    );
    return baralho;
}

/// function distribuir cartas //////////////// ////////////////////////////////////
function distribuir_cartas(){

    var baralhar = cartas_baralhadas();

    var mesa = document.querySelector('#mesa');
    mesa.innerHTML =  "";
    
    baralhar.forEach(function(ele, index)
    {
        var carta = document.createElement('div');
        // carta.innerHTML = ele;
        carta.innerHTML = 
        
       " <div class='carta' data-value="+ele+"> "+
            " <div class='carta__conteudo'> "+
             ele+ 
          "  </div>"+
         "</div>"
     
        ;
        mesa.appendChild(carta);       
        // console.log(index+"->"+ele)
    });

   

}

distribuir_cartas();

/// function descobrir /////////////// //////////////// ////////////////////////////////////
function descobrir()
    {
        //totalDescobertas vai buscar todas as divs com classe .descoberta
        var totalDescobertas = document.querySelectorAll('.descoberta');
    
        //para apenas permitir virar 1 carta
        if (totalDescobertas.length > 1){
            return;     //para sair da função se comprimento maior do que 1
        }

        this.classList.add('descoberta');

        //vai criar o array mostra com as 2 classes viradas
        var mostra = document.querySelectorAll('.descoberta');
        if (mostra.length<2){
            return;
        }

        if(mostra[0].dataset.value === mostra[1].dataset.value){ //vai comparar se textContent(emoji) iguais se sim certo
            console.log("ceerto");
        } else {
            console.log("ERRADO")
        }
         console.log(mostra)
      
    }


teste =  document.querySelectorAll('.carta');

teste.forEach( function (e){
    e.addEventListener("click", descobrir);
})
   console.log(teste);


