function teste()
{
  //=================================================================================================
    class Veiculo
    {
        //contrutor
        constructor(t)
        {
            this.tipo = t;
        }

        //metodos
        identificador ()
        {
            return 'Tipo de veiculo :: ' + this.tipo;
        }
    }
  //=================================================================================================
  class Auto extends Veiculo        //classe filha Auto extende a superClasse Veiculo
  {
      //metodos da subclasse
      mudarVelocidade()
      {
          return 'Shift UP!';
      }

  }
//====================================================================================================
  class Aviao extends Veiculo
  {
    definirAltitude(valor)
    {
        return 'Altitude vai se '+ valor + ' pés de altitude....';
    }
  }

    let automovel = new Auto('carro');
    document.getElementById('info1').innerHTML = automovel.identificador();
    document.getElementById('info2').innerHTML = automovel.mudarVelocidade();

    let c747 = new Aviao('Cesna');
    document.getElementById('info3').innerHTML = c747.identificador();
    document.getElementById('info4').innerHTML = c747.definirAltitude(100);
}