function buscarReceita() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let lista = document.querySelectorAll("#listaReceitas li");

    lista.forEach(item => {
        let texto = item.textContent.toLowerCase();
        if (texto.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
} 
