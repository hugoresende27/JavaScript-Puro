function teste()
{
    let pessoa = {
        nome:'Hugo'
    };

    let carro = {
        marca : 'Audi',
        ano : 2012
    };

    let frase = "Olá Mr. "+ pessoa.nome+ " o automóvel da marca "+carro.marca+" do ano "+carro.ano+" está pronto";
    let frase2 = `Olá Sr. ${pessoa.nome} o automóvel da marca ${carro.marca} do ano ${carro.ano} está pronto`;

    document.getElementById('info1').innerHTML = frase;
    document.getElementById('info2').innerHTML = frase2;
    document.getElementById('info3').innerHTML = `Olá
                                                        
                                                            Mundo`;//usando o acento agudo ` posso usar paragrafo, com "" não
    
}