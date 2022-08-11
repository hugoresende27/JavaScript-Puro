function teste()
{
    
    var nome = 'Hugo Resende';
    document.getElementById('info').innerHTML = "Length = " + nome.length;
    document.getElementById('info').innerHTML += "<br>charAt (5)= " + nome.charAt(5);//char no index 5
    document.getElementById('info').innerHTML += "<br>includes ('H','R')= " + nome.includes('H','R');//verifica se var tem 'Hu'
    document.getElementById('info').innerHTML += "<br>repeat(3)= " + nome.repeat(3);//repete var x3
    document.getElementById('info').innerHTML += "<br>slice(1,6)= " + nome.slice(1,6);      //slice intervalo do 1 a 5
    document.getElementById('info').innerHTML += "<br>toUpperCase= " + nome.toLocaleUpperCase();

    document.getElementById('vars').innerHTML = nome;
    document.getElementById('vars').innerHTML += '<br>' + '#'.repeat(100);
}