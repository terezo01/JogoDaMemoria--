let firstCard = null; // Armazena a primeira carta clicada
let secondCard = null; // Armazena a segunda carta clicada
let lock = false; // Bloqueia o jogo enquanto as cartas são verificadas, evitando mais cliques
 
const boxes = document.querySelectorAll('.box'); // Seleciona todas as cartas (divs com a classe "box")
 
// Percorre todas as cartas e adiciona a lógica do jogo
boxes.forEach(box => {
    box.classList.add('hidden'); // Adiciona a classe "hidden" para esconder o conteúdo de todas as cartas inicialmente
    // Adiciona um evento de clique para cada carta
    box.addEventListener('click', () => {
        // Se o jogo estiver bloqueado (lock true), ou a carta clicada for a mesma já virada, ou a carta já tiver sido combinada, não faz nada
        if (lock || box === firstCard || box.classList.contains('matched')) return;
 
        // Revela a carta removendo a classe "hidden"
        box.classList.remove('hidden');
 
        // Se for o primeiro clique (nenhuma carta virada ainda), armazena a carta como "firstCard"
        if (!firstCard) {
            firstCard = box; // Armazena a primeira carta clicada
        } else {
            // Se for o segundo clique, armazena como "secondCard" e bloqueia o jogo para verificar o par
            secondCard = box;
            lock = true; // Bloqueia o jogo enquanto verifica as duas cartas
 
            // Verifica se as duas cartas viradas têm o mesmo valor (ou imagem ou número)
            if (firstCard.dataset.value === secondCard.dataset.value) {
                // Se forem iguais, adiciona a classe "matched" para indicar que são um par
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                resetCards(); // Reseta as cartas para o próximo par
            } else {
                // Se forem diferentes, esconde as cartas novamente após 1 segundo
                setTimeout(() => {
                    firstCard.classList.add('hidden');
                    secondCard.classList.add('hidden');
                    resetCards(); // Reseta as cartas para o próximo par
                }, 1000);
            }
        }
    });
});
 
// Função para resetar as variáveis e desbloquear o jogo para a próxima jogada
function resetCards() {
    firstCard = null; // Reseta a primeira carta
    secondCard = null; // Reseta a segunda carta
    lock = false; // Desbloqueia o jogo
}

function playAgain(){
    boxes.forEach(box =>{
        box.classList.add('hidden')
        box.classList.remove('matched')
    })
}
