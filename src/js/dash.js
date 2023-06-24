const modalOverlay = document.querySelector(".modal-overlay");

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && isModalOpen()) {
    closeModal();
  }
});

function createNewUpload() {
  modalOverlay.querySelector(".modal-content").innerHTML = `
    Criar New upload!
  `;

  openModal();
}

function handleEditUser() {
  modalOverlay.querySelector(".modal-content").innerHTML = `
    Edit User!
  `;

  openModal();
}

function toggleTheme() {
  document.querySelector("html").classList.toggle("dark");
}

function openModal() {
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
        <li class="item" onclick="${item.goTo}">
            <i class="${item.iconClass}"></i>
            <span>${item.value}</span>
        </li>
    `;
  });
}

function mountSideBar() {
  document.querySelector(".user-content").innerHTML = userContentInner;
  document.querySelector(".switch-theme").innerHTML = toggleThemeInner;
  setMenuItems();
}

function mountTableBody(bodydata) {
  document.querySelector(".table tbody").innerHTML = "";

  bodydata.map((item) => {
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

function handleMountBodyData(number) {
  const bodydata = {
    1: tableBodyDataRecent,
    2: tableBodyDataImages,
    3: tableBodyDataVideo,
    4: tableBodyDataAudio,
    5: tableBodyDataOthers,
  };

  selectMenuItem(number);
  mountTableBody(bodydata[number]);
}

function selectMenuItem(number) {
  const items = document.querySelectorAll(".menu-items .item");
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === number - 1) {
      item.classList.add("active");
    }
  });
}

function initialDash() {
  mountSideBar();
  selectMenuItem(1);
  mountTableBody(tableBodyDataRecent);
}

initialDash();
