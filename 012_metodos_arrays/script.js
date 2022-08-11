function teste()
{
    var frutos = ['banana', 'uva', 'kiwi', 'maça', 'perâ'];
    var marcas = Array('BMW', 'AUDI', 'MERCEDES', 'OPEL', 'RENAULT');
    var nomes = Array.of('Marco', 'Hugo', 'Rita', 'Lola', 'Lua');        //3 maneiras de definir arrays

    document.getElementById('array').innerHTML = "frutos: "+ frutos + "<br>marcas: "+ marcas + "<br>nomes: "+ nomes ;

    //metodos 

    document.getElementById('array2').innerHTML = "frutos.concat(marcas) = " + frutos.concat(marcas);
    document.getElementById('array3').innerHTML = "frutos.join('#') = " + frutos.join('#');
    frutos.push(666);
    document.getElementById('array4').innerHTML = "frutos.push(666) = " + frutos;
    frutos.pop();
    document.getElementById('array5').innerHTML = "frutos.pop() = " + frutos;
    frutos.shift();
    document.getElementById('array6').innerHTML = "frutos.shift() = " + frutos;
    frutos.unshift('Morangos');
    document.getElementById('array7').innerHTML = "frutos.unshift('Morangos') = " + frutos;

}