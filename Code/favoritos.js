function favoritar(idReceita) {
    let user = localStorage.getItem("logado");
    if (!user) return alert("Você precisa estar logado!");

    let chave = "favoritas_" + user;

    let favoritas = JSON.parse(localStorage.getItem(chave)) || [];

    if (!favoritas.includes(idReceita)) {
        favoritas.push(idReceita);
        localStorage.setItem(chave, JSON.stringify(favoritas));
        alert("Adicionado aos favoritos!");
    } else {
        for (let i=0; i< favoritas.length; i++) {
            if (favoritas[i] == idReceita) {
                favoritas.splice(i, 1)
                localStorage.setItem(chave, JSON.stringify(favoritas));
            }
        }
        alert("Removido dos favoritos.");
    }
}

const receitas = [
    {
        id: 1,
        titulo: "Lasanha de Bolonhesa",
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/d30ee1ca9e879a8474cdf38bba06fa06_XL.jpg",
        href: "receitaLasanha.html",
        descricao: "Uma receita rápida para o almoço de domingo com a família."
    },
    {
        id: 2,
        titulo: "Cookie Americano",
        imagem: "https://www.guiadasemana.com.br/contentFiles/image/2020/12/FEA/66526_shutterstock-661622035.jpg",
        href: "receitaCookie.html",
        descricao: "Crocante por fora e macio por dentro. Perfeito para o lanche!"
    },
    {
        id: 3,
        titulo: "Strogonoff de Camarão",
        imagem: "https://www.receitasedicasdochef.com.br/wp-content/uploads/2018/09/Strogonoff-de-Camar%C3%A3o-Delicioso.jpg",
        href: "receitaStrogonoff.html",
        descricao: "Sabor marcante, fácil de preparar e irresistível!"
    },
    {
        id: 4,
        titulo: "Chocotone com recheio de maracujá",
        imagem: "https://static.itdg.com.br/images/640-auto/a4234253f9e3ad2d59275d4cb60155d2/editorial-a-2025-11-17t144403.680.png",
        href: "receitaChocotone.html",
        descricao: "Sensação em toda ceia de Natal na minha casa."
    },
    {
        id: 5,
        titulo: "Angu à baiana",
        imagem: "https://static.itdg.com.br/images/640-400/30edab6b71046e8bbfef0e3227ca130c/341792-original.jpg",
        href: "receitaAngu.html",
        descricao: "Uma pedida para o almoço de domingo."
    },
    {
        id: 6,
        titulo: "Cocada",
        imagem: "https://static.itdg.com.br/images/640-400/ed3153f62de2f3c02cbeabfcd523c144/shutterstock-2242025821-1-1-.jpg",
        href: "receitaCocada.html",
        descricao: "Tradicional, doce e irresistível!"
    },
    {
        id: 7,
        titulo: "Pudim de pão",
        imagem: "https://static.itdg.com.br/images/640-400/c71029a9a8ace6954647587b12b573c2/shutterstock-1827552680.jpg",
        href: "receitaPudimdepao.html",
        descricao: "Uma sobremesa clássica que agrada a todos."
    },
    {
        id: 8,
        titulo: "Picanha Suína",
        imagem: "https://static.itdg.com.br/images/640-400/2a07f5234c51d1df50e4b81d6d457777/328610-original.jpg",
        href: "receitaPicanhasuina.html",
        descricao: "Corte suíno saboroso e muito macio!"
    },
    {
        id: 9,
        titulo: "Feijoada",
        imagem: "https://static.itdg.com.br/images/640-400/4183f4a52eadb0d86eed283e54e0020c/355811-original.jpg",
        href: "receitaFeijoada.html",
        descricao: "Um clássico da nossa culinária."
    },
    {
        id: 10,
        titulo: "Choripan",
        imagem: "https://static.itdg.com.br/images/640-400/37531c0ad31d3bc9a1325358b5e989b2/foto-10-cecilia.jpg",
        href: "receitaChoripan.html",
        descricao: "Sanduíche rápido com explosão de sabores."
    },
    {
        id: 11,
        titulo: "Brownie",
        imagem: "https://www.sabornamesa.com.br/media/k2/items/cache/dfa7f6322712614e6e049fc346875c0a_L.jpg",
        href: "receitaBrownie.html",
        descricao: "Chocolate em forma de carinho: crocante por fora e macio por dentro."
    },
    {
        id: 12,
        titulo: "Torta de frango",
        imagem: "https://th.bing.com/th/id/R.1cba564bc327523d4138c0eed9af3402?rik=FlavKrfKQ5L15g&riu=http%3a%2f%2fwww.saboresajinomoto.com.br%2fuploads%2fimages%2fposts%2f4_receitas_de_torta_de_frango_1400x675_5c5d6432056939.07106785.jpg&ehk=7f5AHF19uQ6ERcVy6eP5WpPyCoYjgxXxMHYsZPHig8Q%3d&risl=&pid=ImgRaw&r=0",
        href: "receitaTortadefrango.html",
        descricao: "Cremosa e com sabor caseiro que lembra conforto e família."
    },
    {
        id: 13,
        titulo: "Palitos de Frango Crocante",
        imagem: "https://static.itdg.com.br/images/640-400/d8f24ce5f76aeba76810200dc5c699dd/2.jpg",
        href: "receitaPalitosdefrangocrocante.html",
        descricao: "Crocantes por fora, macios por dentro."
    },
    {
        id: 14,
        titulo: "Creme de manga com iogurte",
        imagem: "https://static.itdg.com.br/images/640-400/860a9c5a7feb1a6b3b996051ee7ac34d/creme-de-manga-com-iogurte-1-mel-pimenta.jpg",
        href: "receitaCremedemangacomiorgute.html",
        descricao: "Leve, refrescante e saudável."
    },
    {
        id: 15,
        titulo: "Pinha de chocolate",
        imagem: "https://static.itdg.com.br/images/640-400/42ac028739a60b18555e6505523cd229/pinha-de-chocolate.jpg",
        href: "receitaPinhadechocolate.html",
        descricao: "Criativa, linda e deliciosa — perfeita para impressionar."
    }
];


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