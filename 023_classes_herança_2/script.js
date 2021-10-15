function teste()
{
    class Humano
    {
        //contrutor
        constructor ( n , i )
        {
            this._nome = n;
            this._idade = i;
        }
        //getters e setters
        get Nome()
        {
            return this._nome;
        }
        set Nome(valor)
        {
            this._nome = valor;
        }
        get Idade()
        {
            return this._idade;
        }
        set Idade(valor)
        {
            this._idade = valor;
        }

    }

    let homem = new Humano('Hugo', 33);
    document.getElementById('info1').innerHTML = homem.Nome;        //no metodo get e set não uso ()
    homem.Nome = 'Cenobitas' ;                                      //no set uso = e não homem.Nome('Cenobitas')
    document.getElementById('info2').innerHTML = homem.Nome;
    homem.Idade = 99;
    document.getElementById('info3').innerHTML = homem.Idade;


}