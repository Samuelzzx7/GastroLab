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
        lista.push({
            texto: li.querySelector(".texto").textContent.trim(),
            categoria: li.dataset.categoria || ""
        });
    });

    localStorage.setItem("tarefas_" + usuario, JSON.stringify(lista));
}


function carregarTarefas() {
    let usuario = localStorage.getItem("logado");
    if (!usuario) return;

    let tarefas = JSON.parse(localStorage.getItem("tarefas_" + usuario)) || [];
    let ul = document.getElementById("listaTarefas");

    ul.innerHTML = "";

    tarefas.forEach(item => {
        criarLi(item.texto, item.categoria);
    });
}


function addTarefa() {
    let input = document.getElementById("tarefaInput");
    let select = document.getElementById("categoriaSelect");

    let texto = input.value.trim();
    let categoria = select.value;

    if (texto === "") return alert("Digite um ingrediente!");
    if (categoria === "") return alert("Escolha uma categoria!");

    criarLi(texto, categoria);

    input.value = "";
    select.value = "";
    input.focus();
}


function criarLi(texto, categoria) {
    let ul = document.getElementById("listaTarefas");

    let li = document.createElement("li");

    li.dataset.categoria = categoria;
    if (categoria) li.classList.add(categoria);

    li.innerHTML = `
        <span class="texto">${texto}</span>
        <span class="remove" onclick="remover(this)">✖</span>
    `;

    ul.appendChild(li);
}


function remover(item) {
    item.parentElement.remove();
    salvarTarefas();
}

function filtrarCategoria(cat) {
    let lis = document.querySelectorAll("#listaTarefas li");

    lis.forEach(li => {
        if (cat === "" || li.dataset.categoria === cat) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
}
