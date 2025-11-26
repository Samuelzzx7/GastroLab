function carregarConteudo(pagina) {
    fetch("conteudos/" + pagina + ".html")
        .then(r => r.text())
        .then(html => {
            document.querySelector(".conteudo").innerHTML = html;
        });
}