function teste()
{
    class Pessoa
    {
            //contrutor
            constructor( no , id )
            {
                this.nome = no;
                this.idade = id;
            }
        

        //metodos da classe
        falar()
            {
                return 'Eu falei';
            }
        falar2(texto)
        {
            return texto;
            //document.write(texto);
        }

        adicionar(x,y)
        {
            return x+y;
        }
    }
    let eu = new Pessoa('Hugo',33);
    document.getElementById('info1').innerHTML = eu.nome + ' tem '+eu.idade+' anos de idade';
    document.getElementById('info2').innerHTML = eu.falar();
    document.getElementById('info3').innerHTML = eu.falar2('Quem és tu??');
    document.getElementById('info4').innerHTML = eu.adicionar(10,20);       //vai devolver a adição de 10 com 20, metodo adicionar(x,y) escrito dentro da classe pessoa, eu é um objeto criado com base na classe pessoa
    //document.write(eu.nome + ' tem '+eu.idade+' anos de idade');

}