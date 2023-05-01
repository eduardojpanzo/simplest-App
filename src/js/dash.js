const body = document.querySelector("body");
const subMenu = document.querySelector("#subMenu");

const sidebar = body.querySelector(".sidebar");
const toggle = sidebar.querySelector(".toggle");
const searchBtn = sidebar.querySelector(".search-box");
const modeText = sidebar.querySelector(".mode-text");
const modeSwitch = sidebar.querySelector(".toggle-switch");

initializationPage();

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerHTML = "Light Mode";
    return;
  }

  modeText.innerHTML = "Dark Mode";
});

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

  setSubMenuLinks();
}

function setSideBarItems() {
  sidebar.querySelector(".items").innerHTML = "";
  sideBarItems.forEach(({ value, icon }, i) => {
    sidebar.querySelector(".items").innerHTML += `
    <li class="nav-link">
      <i class="icon ${icon}"></i>
      <span class="text nav-text">${value}</span>
    </li>
  `;
  });
}

function initializationPage() {
  setuserInitialDate();
  setSideBarItems();
}
