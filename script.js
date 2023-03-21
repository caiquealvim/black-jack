let firstCard = getRandomCard();
let secondCard = getRandomCard();
const jogando = false;
const temBlackJack = false;
let cards = [firstCard, secondCard];
let soma = firstCard + secondCard;

const message = document.getElementById("message-el");
const sum = document.getElementById("sum");
const cartas = document.getElementById("card");

const player = { name: "jogador", moedas: 145 };

const areaText = document.getElementById("area-text");
areaText.innerText = player.name + " :$" + player.moedas;

function getRandomCard() {
  return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
  cartas.innerText = "Cartas : ";
  for (let i = 0; i < cards.length; i++) {
    cartas.textContent += cards[i] + " ";
  }

  sum.innerText = "soma é :" + " " + soma;
  if (soma < 20) {
    message.innerText = "deseja pegar mais uma carta?";
  }
  if (soma === 21) {
    message.innerText = "Parabens você tem um blackJack!";
  }
  if (soma > 21) {
    message.innerText = "você está fora do jogo.";
  }
}

function newCard() {
  if (jogando === false && temBlackJack === false) {
    let card = getRandomCard();
    soma += card;
    cards.push(card);
    startGame();
  }
}
