// Array de louvores
const louvores = [
    "126", "CASTELO FORTE", "abba pai", "Digno de glória", "A Ele a Glória",
    "ABBA PAI", "Aclame ao Senhor", "acredito", "aguas Purificadoras",
    "alvo mais que a neve", "Ao único", "Aquieta minha", "Arde outra vez", 
    "Até que Ele venha", "Bondade de Deus", "CASTELO FORTE", "Colossenses 1",
    "consagração", "Corpo e Fam¡lia", "Deus da minha vida", "Diante da cruz",
    "Digno de glória", "Ele Exaltado", "Ele é", "grandioso és Tu", "Há um lugar",
    "Há um Rio", "Isaias 53", "Isaias 9", "Jesus é o Caminho", "Jesus filho de Deus",
    "Louvemos ao Senhor", "louvor ao senhor", "Maranata", "me ajude a melhorar",
    "me derramar", "Meu Universo", "nada além do sangue", "Oferta agradavel",
    "O quão lindo esse nome é", "Ousado amor", "Pela Manhã Te Buscarei", "Perdão e graça",
    "Poderoso Deus", "porque Ele vive", "Preciso de Ti", "Primeira essência", 
    "rendido estou", "sonda-me", "Sonhos", "Te agradeço", "te amo", "Te Louvarei", 
    "teu povo", "Teu reino", "Tocou-me", "Todos Que Tem Sede", "Tu es soberano", 
    "tu és", "tua graça me basta", "Vem Esta é a Hora", "Vim Para Adorar-te", 
    "Vou deixar na cruz", "Yeshua HELOISA"
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
