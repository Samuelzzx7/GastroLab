function mostrarConteudo() {
    $("#loginArea, #cadastroArea").hide();
    $("#conteudoArea").show();
}

function mostrarLogin() {
    $("#conteudoArea, #cadastroArea").hide();
    $("#loginArea").show();
}

function verificarLogin() {
    if (localStorage.getItem("logado")) {
        mostrarConteudo();
    } else {
        mostrarLogin();
    }
}

$(document).ready(function () {

    verificarLogin();

    $("#linkCadastro").on("click", function () {
        $("#loginArea").hide();
        $("#cadastroArea").show();
        let userL = $("#usuarioLogin").val('')
        let senhaL = $("#senhaLogin").val('')
    });

    $("#linkLogin").on("click", function () {
        $("#cadastroArea").hide();
        $("#loginArea").show();
        let user = $("#usuarioCadastro").val('')
        let senha = $("#senhaCadastro").val('')
    });

    $("#btnCriarConta").on("click", function () {
        let user = $("#usuarioCadastro").val().trim();
        let senha = $("#senhaCadastro").val().trim();

        if (user === "" || senha === "") {
            alert("Preencha todos os campos.");
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

        if (usuarios[user]) {
            alert("Nome de usuário já existe!");
            return;
        }

        usuarios[user] = senha;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Conta criada com sucesso!");
        mostrarLogin();
    });

    $("#btnLogin").on("click", function () {
        let user = $("#usuarioLogin").val().trim();
        let senha = $("#senhaLogin").val().trim();
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

        if (usuarios[user] && usuarios[user] === senha) {
            localStorage.setItem("logado", user);
            localStorage.setItem("usuarioLogado", user);
            mostrarConteudo();
        } else {
            alert("Usuário ou senha incorretos.");
        }
    });

    $("#btnLogout").on("click", function () {
        $("#listaTarefas").html("");
        $(".cards").html("");
        localStorage.removeItem("logado");
        mostrarLogin();
    });
});

