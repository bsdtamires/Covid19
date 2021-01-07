document.getElementById("enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if (document.getElementById("nome").value != "" && 
      document.getElementById("email").value != "" && 
      document.getElementById("mensagem").value != ""){
        alert("Sua mensagem foi enviada! Aguarde nosso retorno.")
  }else{
        alert("Por favor, preencha os campos nome, email e mensagem!")
  }
}