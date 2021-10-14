function teste()
{
    var data = new Date();

    document.getElementById('vars').innerHTML = data;
    document.getElementById('date1').innerHTML = "getDay() --> " + data.getDay();
    document.getElementById('date2').innerHTML = "getDate() --> " + data.getDate();
    document.getElementById('date3').innerHTML = "getTime() --> " + data.getTime();

    //var data_nascimento = new Date (ano , mes , dia , hora , minuto , segundo , milisegundo);
    var data_nascimento = new Date (1988, 10 , 2 );
    data_nascimento.setHours (11,59,33);

    document.getElementById('date4').innerHTML = ".getMonth() data de nasc --> " + data_nascimento.getMonth();
    document.getElementById('date5').innerHTML = ".getHours() data de nasc --> " + data_nascimento.getHours();
    document.getElementById('date6').innerHTML = ".getMinutes() data de nasc --> " + data_nascimento.getMinutes();
}