function teste()
{
    
    var valor = 4.99;
    document.getElementById('vars').innerHTML = valor;

   document.getElementById('pi').innerHTML="PI::"+ Math.PI;     //Math.PI é uma propriedade
   document.getElementById('abs').innerHTML="abs::"+ Math.abs(valor);     //abs devolve valor positivo
   document.getElementById('sqrt').innerHTML="sqrt::"+ Math.sqrt(valor);     
   document.getElementById('pow').innerHTML="pow(valor,3)::"+ Math.pow(valor,3);     
   document.getElementById('ceil').innerHTML="ceil::"+ Math.ceil(valor);     
   document.getElementById('floor').innerHTML="floor::"+ Math.floor(valor);     
   document.getElementById('round').innerHTML="round::"+ Math.round(valor);     
   document.getElementById('trunc').innerHTML="trunc::"+ Math.trunc(valor);     
   document.getElementById('random').innerHTML="random::"+ Math.trunc( Math.random()*10000 );     //faz random de 0 a 10000 inteiro

   var min = 90;
   var max = 100;                     //(100 - 90) + 90 =  
   var x = Math.trunc ((Math.random() * (max - min))) + min + 1;       //vai calcular random entre 90 e 99 + 1para sair o 100
   document.getElementById('random2').innerHTML ="random 2:: "+ x;

}