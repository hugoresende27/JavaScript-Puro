function teste()
{
    //tratamento de erros try catch
    try{
        somar (19,29);
        document.write(10+20);
    }catch (error)
    {
        document.write('Ocorreu um erro ....' + error);
    }
    //throw
    var x = 11;
    try{
        if (x < 10) throw '<br>Inválido, menor do que 10';      //o throw vai mostrar a mensagem de erro da condição verdadeira
        if (x > 10) throw '<br>Inválido, maior do que 10';       
        document.write('<br>Valor certo');
    }catch (error){
        document.write(error);      //error recebe o valor impresso no throw
    }
    //finally
    try{
        somar(10,20);
        document.write('Estou dentro do try, quando sou executado correctamente');
        
    } catch (error)
    {
        document.write('Aconteceu um erro, vou aparecer eu , catch');
       
    } finally 
    {
        document.write(' Sou sempre executado, independente do resultado, finally');
    }

}