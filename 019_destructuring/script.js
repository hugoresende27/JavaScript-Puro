function teste()
{
    var nomez =['Hugo','Rita','Ines','Carla'];
  /*var n1 = nome[0];
    var n2 = nome[1];
    var n3 = nome[2];
    var n4 = nome[3];*/

    var [n1,n2,n3,n4] = nomez;      //em vez de ter uma var para cada posição no array nome, usando o destructuring

    
    document.write(n1+" - " +n2+" - "+n3+" - "+n4);


    let pessoa = {
        nome:'Hugo',
        idade:33,
        profissao:'estudante'
    };

/*  let nome = pessoa.nome;
    let idade = pessoa.idade;
    let profissao = pessoa.profissao;   */

    let {nome,idade,profissao} = pessoa;        //usando as { } do objeto
    
    document.write(nome, idade, profissao);

 

}

function teste2()
{
    let namzz =['Hugo','Rita','Ines','Carla'];

    let [a,b]=namzz;
    document.write(a+" - "+b);      //deconstrução de um array
}

function teste3()
{
    let abc = [1,2,3];

    let [a=10, b=10 , c , d=99 , e,  f , g=66] = abc;      //apesar de não haver d nem e 

    document.write(a + " - "+ b + " - " + c +" - "+ d +" - " + e + " - " + f + " - "+ g);     //vai aparecer como undefined o e o f 
}