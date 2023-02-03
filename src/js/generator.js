const formElement = document.querySelector("#form");
const slider = document.querySelector("#slider");
const lenghtElement = document.querySelector("#lenght");
const containerHashElement = document.querySelector("#container-hash");
const hashElement = document.querySelector("#hash");
const tooltipElement = document.querySelector("#container-hash .tooltip");

const symbols = "@#£$§%&/{([)]=}??'+*\\|~^º\"";
const numbers = "0123456789";
const letters = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXYZ";

let hash = "";

function generateHash(charset) {
  hash = "";
  for (let i = 0, n = charset.length; i < slider.value; i++) {
    hash += charset.charAt(Math.floor(Math.random() * n));
  }

  containerHashElement.classList.remove("hide");
  hashElement.innerHTML = hash;
}

function copyHash() {
  navigator.clipboard.writeText(hash);

  setTimeout(() => {
    tooltipElement.style.opacity = 1;
    tooltipElement.style.visibility = "visible";
  }, 100);

  setTimeout(() => {
    tooltipElement.style.opacity = 0;
    tooltipElement.style.visibility = "hidden";
  }, 2000);
}

lenghtElement.innerHTML = slider.value;

slider.addEventListener("change", ({ target }) => {
  lenghtElement.innerHTML = target.value;
});

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  let charset = "";

  const [, boxLetters, boxNumbers, boxSymbols] = e.target.elements;

  if (!boxLetters.checked & !boxNumbers.checked & !boxSymbols.checked) {
    alert("Selecione uma das opções para gerar uma Hash");
    return;
  }

  if (boxLetters.checked) charset += letters;
  if (boxNumbers.checked) charset += numbers;
  if (boxSymbols.checked) charset += symbols;

  generateHash(charset);
});

hashElement.addEventListener("click", copyHash);
