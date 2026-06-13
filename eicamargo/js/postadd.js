function publicarSugestao() {

    const input = document.getElementById("sugestaoInput");
    const texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma sugestão!");
        return;
    }

    const post = document.createElement("div");
    post.classList.add("post");

    post.innerHTML = `
        <div class="avatar-post"></div>
        <div class="conteudo-post">
            <h4>Nome do Usuário</h4>
            <span>@usuario · agora</span>
            <p>${texto}</p>
        </div> 
    `;

    document.getElementById("listaSugestoes").prepend(post);

    input.value = "";
}
//eu e melquiades colocamos o que a julia fez em um arquivo separado