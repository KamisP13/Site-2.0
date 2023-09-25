const citacoes_da_Taylor = [
    " 🎵 Porque, querido, eu sou um pesadelo vestido como um sonho. (Blank Space) 🎵",
    " 🎵 Um amigo de todos é um amigo de ninguém. (Cardigan) 🎵",
    " 🎵 Você desenhou estrelas em volta das minhas cicatrizes e agora estou sangrando. (Cardigan) 🎵",
    " 🎵 Sim, nós estamos felizes, livres, confusos e sozinhos ao mesmo tempo. (22) 🎵",
    " 🎵 Você sabe, os melhores filmes de todos os tempos nunca foram feitos. (the 1) 🎵",
    " 🎵 E se você nunca sangrar, você nunca vai crescer. (the 1) 🎵",
    " 🎵 Deixe isso tudo para trás e haverá felicidade. (happiness) 🎵"
];


function frase_aleatoria() {
    const sorteio = Math.floor(Math.random() * citacoes_da_Taylor.length);
    document.getElementById("citacoes_da_Taylor").textContent = citacoes_da_Taylor[sorteio];
}

window.onload = frase_aleatoria;






