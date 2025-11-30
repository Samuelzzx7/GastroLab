function carregarConteudo(pagina) {
    fetch("conteudos/" + pagina + ".html")
        .then(r => r.text())
        .then(html => {
            document.querySelector(".conteudo").innerHTML = html;
        });
}

window.onload = function() {
    carregarConteudo('perfil');
};

function salvarTarefas() {
    let usuario = localStorage.getItem("logado");
    if (!usuario) return;

    let lista = [];
    document.querySelectorAll("#listaTarefas li").forEach(li => {
        lista.push(li.childNodes[0].textContent.trim());
    });

    localStorage.setItem("tarefas_" + usuario, JSON.stringify(lista));
}


function carregarTarefas() {
    let usuario = localStorage.getItem("logado");
    if (!usuario) return;

    let tarefas = JSON.parse(localStorage.getItem("tarefas_" + usuario)) || [];

    let ul = document.getElementById("listaTarefas");
    ul.innerHTML = "";

    tarefas.forEach(texto => {
        let li = document.createElement("li");
        li.innerHTML = `${texto} <span class="remove" onclick="remover(this)">✖</span>`;
        ul.appendChild(li);
    });
}


function addTarefa() {
    let input = document.getElementById("tarefaInput");
    let texto = input.value.trim();

    if (texto === "") return;

        let ul = document.getElementById("listaTarefas");

        let li = document.createElement("li");
        li.innerHTML = `${texto} <span class="remove" onclick="remover(this)">✖</span>`;

        ul.appendChild(li);

        input.value = "";  
        input.focus();     
    }

function remover(item) {
    item.parentElement.remove();

    salvarTarefas();
}       