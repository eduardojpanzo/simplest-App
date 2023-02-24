const body = document.querySelector("body");
const subMenu = document.querySelector("#subMenu");

const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeText = body.querySelector(".mode-text");
const modeSwitch = body.querySelector(".toggle-switch");

setSubMenuLinks();

// toggle.addEventListener("click", () => {
//   sidebar.classList.toggle("close");
// });

// modeSwitch.addEventListener("click", () => {
//   body.classList.toggle("dark");

//   if (body.classList.contains("dark")) {
//     modeText.innerHTML = "Light Mode";
//     return;
//   }

//   modeText.innerHTML = "Dark Mode";
// });

function toggleShowSubMenu() {
  subMenu.classList.toggle("open-menu");
}

function setSubMenuLinks() {
  subMenu.querySelector(".user-info").innerHTML = `
  <img src="${userData.img}" alt="${userData.name}" />
  <h3>${userData.name}</h3>
  `;

  subMenu.querySelector(".links").innerHTML = "";
  subMenuLinks.forEach((item, i) => {
    subMenu.querySelector(".links").innerHTML += `
  <a href="${item.path}" class="sub-menu-link">
    <img src="${item.icon}" alt="${item.value}" />
    <p>${item.value}</p>
    <span>></span>
  </a>
  `;
  });
}

function setuserInitialDate() {
  document.querySelector("header .imagotipo").innerHTML = `
  <img src="${logo.src}" alt="${logo.alt}" />

  <div class="text">
    <span class="name">${userData.company.name}</span> <br />
    <span class="profession">${userData.company.office}</span>
  </div>
  `;
}
