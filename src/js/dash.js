const modalOverlay = document.querySelector(".modal-overlay");

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && isModalOpen()) {
    closeModal();
  }
});

function createNewUpload() {
  OpenModal();
}

function toggleTheme() {
  document.querySelector("html").classList.toggle("dark");
}

function OpenModal() {
  modalOverlay.classList.add("open");
}

function closeModal() {
  modalOverlay.classList.remove("open");
}

function isModalOpen() {
  return modalOverlay.classList.contains("open");
}

function setMenuItems() {
  document.querySelector(".menu-items").innerHTML = "";
  sideBarMenuItems.map((item) => {
    document.querySelector(".menu-items").innerHTML += `
        <li class="item">
            <i class="${item.iconClass}"></i>
            <span>${item.value}</span>
        </li>
    `;
  });
}

function MountSideBar() {
  document.querySelector(".user-content").innerHTML = userContentInner;
  document.querySelector(".switch-theme").innerHTML = toggleThemeInner;
  setMenuItems();
}

function MountTableBody() {
  document.querySelector(".table tbody").innerHTML = "";

  tableBodyData.map((item) => {
    document.querySelector(".table tbody").innerHTML += `
        <tr  data-key="${item.key}">
            <td>${item.name}</td>
            <td>${item.uploadAt}</td>
            <td>${item.ext}</td>
            <td>${item.size}</td>
        </tr>
    `;
  });
}

function initialDash() {
  MountSideBar();
  MountTableBody();
}

initialDash();
