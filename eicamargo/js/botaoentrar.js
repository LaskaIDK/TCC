const formulario = document.getElementById("form-login");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    window.location.href = "pags/sugestoes.html";

});
//FUNÇÃO PARA O BOTAO ENTRAR DA ABA DE LOGIN ENTRAR NA PAGINA INICIAL DO SITE