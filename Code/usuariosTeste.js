$(document).ready(function () {
    verificarLogin();
    $("#linkCadastro").on("click", function () {

    $("#loginArea").hide();
    $("#cadastroArea").show();

});

$("#linkLogin").on("click", function () {
    $("#cadastroArea").hide();
    $("#loginArea").show();

});

$("#btnCriarConta").on("click", function () {
    let user = $("#usuarioCadastro").val().trim();
    let pass = $("#senhaCadastro").val().trim();

    if (user === "" || pass === "") {
        alert("Preencha todos os campos.");
        return;
    }
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    if (usuarios[user]) {
        alert("Nome de usuário já existe!");
        return;
    }
    usuarios[user] = pass;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Conta criada com sucesso!");

    $("#cadastroArea").hide();
    $("#loginArea").show();
});

$("#btnLogin").on("click", function () {
    let user = $("#usuarioLogin").val().trim();
    let pass = $("#senhaLogin").val().trim();
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[user] && usuarios[user] === pass) {
        localStorage.setItem("logado", user);
        localStorage.setItem("usuarioLogado", user);
        mostrarConteudo();
    } 

    else {
        alert("Usuário ou senha incorretos.");
    }
});

$("#btnLogout").on("click", function () {
    localStorage.removeItem("logado");
    mostrarLogin();
    });
});

function verificarLogin() {
    if (localStorage.getItem("logado")) {
        mostrarConteudo();
    } 

    else {
        mostrarLogin();
    }
}

function mostrarConteudo() {
    $("#loginArea, #cadastroArea").hide();
    $("#conteudoArea").show();
}

function mostrarLogin() {
    $("#conteudoArea, #cadastroArea").hide();
    $("#loginArea").show();
}
