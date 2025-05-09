// Array de louvores
const louvores = [
    "tu és soberano", "quebrantado", "emaús", "tudo que eu vivi", "ajuntamento", "em espírito, em verdade", "ele é", "faz chover",
     "nenhuma condenação há", "meu respirar", "preciso de ti", "teu reino", "o nome", "aleluia", "redenção", "eu me rendo",
      "vim para adorar-te", "perdão e graça", "entrega", "espírito, enche a minha vida", "mais que um amigo",
     "digno de glória", "primeira essência", "sonda-me", "reina sobre mim", "há um lugar", "rendido estou",
      "oh quão lindo esse nome é", "isaías 53", "diante da cruz"
]

// Função para sortear índices aleatórios
function sortearLouvores(qtd) {
    const indicesSorteados = new Set();
    while (indicesSorteados.size < qtd) {
        const indiceAleatorio = Math.floor(Math.random() * louvores.length);
        indicesSorteados.add(indiceAleatorio);
    }
    return Array.from(indicesSorteados).map(index => louvores[index]);
}

// Ação do botão
document.getElementById("sortearBtn").addEventListener("click", () => {
    const sorteados = sortearLouvores(4); // Sorteia 4 louvores
    const lista = document.getElementById("listaLouvores");
    lista.innerHTML = ""; // Limpa a lista anterior
    sorteados.forEach(louvor => {
        const item = document.createElement("li");
        item.textContent = louvor;
        lista.appendChild(item);
    });
});
