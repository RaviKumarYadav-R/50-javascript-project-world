const para =
  "Paragraphs serve to group related sentences that develop a single idea, making it easier for the reader to follow the flow of thought and grasp the main points. ";

const ParagraphEl = document.querySelector(".paragraph");
const input = document.querySelector("input");

let index = 0;

function addPara() {
  para.split("").forEach((span) => {
    const spanEl = `<span>${span}</span>`;
    ParagraphEl.innerHTML += spanEl;
  });
}

function initTyping() {
  const characters = ParagraphEl.querySelectorAll("span");
  const typedChar = input.value.split("")[index];
  if (typedChar === undefined) {
    index--;
    characters[index].classList.remove("correct", "incorrect");
  } else {
    if (characters[index].innerText === typedChar) {
      characters[index].classList.add("correct");
    } else {
      characters[index].classList.add("incorrect");
    }
    index++;
  }

  characters.forEach((char) => char.classList.remove("active"));
  characters[index].classList.add("active");
}
addPara();
document.addEventListener("keydown", () => input.focus());
ParagraphEl.addEventListener("click", () => input.focus());
input.addEventListener("input", initTyping);
