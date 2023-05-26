const modalOverlay = document.querySelector(".modal-overlay");
const content = document.querySelector("main .content");

function openModal() {
  modalOverlay.classList.add("open");
}

function closeModal() {
  modalOverlay.classList.remove("open");
}

function isModalOpen() {
  return modalOverlay.classList.contains("open");
}

function mountTheBoxes() {
  const boxes = kabanBoxesData
    .map(
      (box) => `
    <div class="box" data-boxid="${box.id}">
        <div class="box-header">
        <span>${box.title}</span>

        <i class="fas fa-ellipsis-v"></i>
        </div>

        <div class="box-content">
        </div>

        <div class="box-add" onclick="openCreateItem(${box.id})">
        <i class="fas fa-plus-circle"></i>
        Add Item
        </div>
    </div>
    `
    )
    .join("");

  content.innerHTML = boxes;
}

function mountTheBoxesItems() {
  const boxes = content.querySelectorAll(".box");

  boxes.forEach((box) => {
    const boxContent = box.querySelector(".box-content");
    const boxId = box.getAttribute("data-boxid");

    boxContent.innerHTML = "";

    kabanItemsData.forEach((item) => {
      if (item.boxId == boxId) {
        boxContent.innerHTML += `
        <div class="item ${item.level}" data-key="${item.id}" draggable="true">
            <div class="item-header">
            <span class="item-date">${item.date}</span>

            <div class="item-level">${item.level}</div>
            </div>
            <div class="item-content">
            <h3>${item.title}</h3>
            <p>
                ${item.content}
            </p>
            </div>
        </div>`;
      }
    });
  });
}

function openCreateItem(boxId) {
  modalOverlay.querySelector(".modal-content").innerHTML =
    formCreateItem(boxId);

  console.log(boxId);

  openModal();
}

function handleCreateItem(e) {
  e.preventDefault();

  const newItem = {
    id: Math.random().toFixed(3) * 100,
    title: e.target.title.value,
    level: e.target.level.value,
    content: e.target.content.value.trim(),
    boxId: Number(e.target.boxId.value),
    date: new Date().getDate(),
  };

  kabanItemsData = [...kabanItemsData, newItem];

  init();
  closeModal();
}

function init() {
  mountTheBoxes();
  mountTheBoxesItems();
}

init();
