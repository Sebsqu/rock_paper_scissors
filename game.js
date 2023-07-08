const game = {
    wins: 0,
    losses: 0,
    draws: 0,
    games: 0,
}

const handChoice = {
    aiHand: "",
    playerHand: ""
}
const button = document.querySelector('.start');
const hands = document.querySelectorAll('img');

function gameStart() {
    hands.forEach(hand => hand.style.boxShadow = "");
    this.style.boxShadow = "0 0 0 1px red";
    handChoice.playerHand = this.dataset.option;
}

function aiChoice(){
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function gameResult(player, ai)
{
    if(player === ai)
    {
        return "draw";   
    }
    else if((player === "nożyczki" && ai === "papier") || (player === "kamień" && ai === "nożyczki") || (player === "papier" && ai === "kamień"))
    {
        return "win";
    }
    else
    {
        return "loss";
    }
}

function gameScore(player, ai, score)
{
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++game.games;

    if(score === "win")
    {
        document.querySelector('p.wins span').textContent = ++game.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrałeś!";
    }
    else if(score === "loss")
    {
        document.querySelector('p.losses span').textContent = ++game.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Przegrales!";
    }
    else
    {
        document.querySelector('p.draws span').textContent = ++game.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis!";
    }
}

function runnningGame()
{
    if(handChoice.playerHand == 0)
    {
        alert("wybierz dłoń!");
    }
    handChoice.aiHand = aiChoice();
    const game = gameResult(handChoice.playerHand,handChoice.aiHand);
    gameScore(handChoice.playerHand, handChoice.aiHand, game);
}

hands.forEach(hand => hand.addEventListener('click', gameStart));
button.addEventListener('click', runnningGame);