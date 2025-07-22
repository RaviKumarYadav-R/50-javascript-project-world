const cardBox = document.querySelector(".card-box");
const moveEl = document.querySelector(".move span");
const timeEl = document.querySelector(".time span");
const restartBtn = document.querySelector(".restart");
let card1 = null;
let card2 = null;
let boardLock = false;
let moves = 0;
let matched = 0;
let time = 0; //in second
let intervalId = null;
let gameStarted = false;

// Just using emojis for now — duplicate each one for matching
const emojis = ["🍎", "🍌", "🍇", "🍓", "🍉", "🍒", "🍍", "🥝"];

function startTimer() {
  intervalId = setInterval(() => {
    time++;
    const min = String(Math.floor(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, "0");
    timeEl.innerText = `${min}:${sec}`;
  }, 1000);
}

function initGame() {
  cardBox.innerHTML = "";
  const cardItems = [...emojis, ...emojis];
  cardItems.sort(() => 0.5 - Math.random());
  cardItems.forEach((items) => {
    const outerCard = document.createElement("div");
    outerCard.classList.add("outer-card");
    outerCard.innerHTML = `<div class="inner-card">
            <div class="front">${items}</div>
            <div class="back">?</div>
          </div>`;

    outerCard.addEventListener("click", () => {
      if (boardLock || outerCard.classList.contains("flip")) return;
      if (!gameStarted) {
        startTimer();
        gameStarted = true;
      }

      outerCard.classList.add("flip");
      if (!card1) {
        card1 = outerCard;
      } else {
        card2 = outerCard;
        boardLock = true;
        moves++;
        moveEl.innerText = moves;
        const card1Data = card1.querySelector(".front").innerText;
        const card2Data = card2.querySelector(".front").innerText;
        if (card1Data === card2Data) {
          card1 = null;
          card2 = null;
          boardLock = false;
          matched++;
          if (matched === emojis.length) {
            clearInterval(intervalId);
            restartBtn.hidden = false;
            alert("you completed 🎉 Congratulation!");
          }
        } else {
          setTimeout(() => {
            card1.classList.remove("flip");
            card2.classList.remove("flip");
            card1 = null;
            card2 = null;
            boardLock = false;
          }, 500);
        }
      }
    });
    cardBox.append(outerCard);
  });
}

restartBtn.addEventListener("click", () => {
  // reset to initial value and restart game
  moves = 0;
  time = 0;
  matched = 0;
  intervalId = null;
  gameStarted = false;
  restartBtn.hidden = true;
  timeEl.innerText = "00:00";
  moveEl.innerText = 0;
  initGame();
});
initGame();
