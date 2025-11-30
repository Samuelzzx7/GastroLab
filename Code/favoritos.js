function favoritar(idReceita) {
    let user = localStorage.getItem("usuarioLogado");
    if (!user) return alert("Você precisa estar logado!");

    let chave = "favoritas_" + user;

    let favoritas = JSON.parse(localStorage.getItem(chave)) || [];

    if (!favoritas.includes(idReceita)) {
        favoritas.push(idReceita);
        localStorage.setItem(chave, JSON.stringify(favoritas));
        alert("Adicionado aos favoritos!");
    } else {
        alert("Essa receita já está nos favoritos.");
    }
}

const receitas = [
    { 
        id: 1,
        titulo: "Brownie",
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/dfa7f6322712614e6e049fc346875c0a_L.jpg",
        href: "receitaBrownie.html",
        descricao: "Uma receita que transforma chocolate em carinho. Macios por dentro, crocantes por fora, perfeita para iniciantes, apaixonados por chocolate e quem quer impressionar na cozinha."
    }
]

function renderizarCardsFavoritos(ids) {
    let container = document.getElementById("favoritosContainer");
    container.innerHTML = "";

    ids.forEach(id => {
        let receita = receitas.find(r => r.id === id);

        if (receita) {
            container.innerHTML += `
                <a href="${receita.href}" class="cardconf">
                <div class="card">
                    <img src="${receita.imagem}" alt="${receita.titulo}">
                    <h3>${receita.titulo}</h3>
                    <p>${receita.descricao}</p>
                </div>
                </a>
            `;
        }
    });

    if (ids.length === 0) {
        container.innerHTML = "<p>Nenhuma receita favoritada ainda.</p>";
    }
}

function carregarFavoritos() {
    let user = localStorage.getItem("usuarioLogado");
    if (!user) {
        document.getElementById("favoritosContainer").innerHTML = "<p>Você precisa estar logado.</p>";
        return;
    }

    let chave = "favoritas_" + user;
    let favoritas = JSON.parse(localStorage.getItem(chave)) || [];

    renderizarCardsFavoritos(favoritas);
}