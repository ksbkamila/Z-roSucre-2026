var botaoEnviar = document.querySelector("#enviar");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();

    //captura o formulario 
    var form = document.querySelector("#frmContato");

    //verifica se o usuario preencheu e-mail ou telefone
    if(form.email.value=='' && form.telefone.value==''){
        return alert('Por favor, preencha um e-mail e/ou um telefone para que possa retornar o seu contato.');
    }else{
        //monta o texto de retorno
        msgRetorno=form.nomesobrenome.value + ",agradecemos o seu contato! <br><br>Vamos avaliar sua considerações e retornaremos"

        //abre a div de retorno
        document.getElementById('formRetorno').style.display="block";
        //efetua o retorno
        document.getElementById('textoRetorno').innerHTML=msgRetorno;
        //fecha formulario
        document.getElementById('formulario').style.display="none";
    }
    
});