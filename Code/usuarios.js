function carregarConteudo(pagina) {
    fetch("conteudos/" + pagina + ".html")
        .then(r => r.text())
        .then(html => {
            document.querySelector(".conteudo").innerHTML = html;
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
        }       