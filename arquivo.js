const taylorSwiftQuotes = [
    "O que importa é a maneira como você se vê.",
    "Lembre-se de ser você mesmo, porque ninguém pode fazer isso melhor do que você.",
    "Nunca mude para ser aceito. Mude porque você quer evoluir e crescer.",
    "A vida é muito curta para se preocupar com o que os outros pensam de você."
];

// Função para exibir uma citação aleatória
function exibirCitacaoAleatoria() {
    const randomNumber = Math.floor(Math.random() * taylorSwiftQuotes.length);
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = taylorSwiftQuotes[randomNumber];
}

// Chame a função para exibir uma citação aleatória quando a página carregar
window.onload = exibirCitacaoAleatoria;







