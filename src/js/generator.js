const slider = document.querySelector("#slider");
const button = document.querySelector("#button");
const sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXYZ1234567890";
let novaSenha = "";

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < slider.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copyPassword() {
  navigator.clipboard.writeText(novaSenha);
}

sizePassword.innerHTML = slider.value;

slider.addEventListener("change", ({ target }) => {
  sizePassword.innerHTML = target.value;
});
button.addEventListener("click", generatePassword);
password.addEventListener("click", copyPassword);
