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
const modal = document.getElementById("meuModal");
const botao = document.getElementById("abrirModal");
const fechar = document.querySelector(".fechar");

botao.onclick = () => modal.style.display = "block";

fechar.onclick = () => modal.style.display = "none";

window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
