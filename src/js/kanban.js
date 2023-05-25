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

        <div class="box-add" onclick="openModal()">
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

function init() {
  mountTheBoxes();
  mountTheBoxesItems();
}

init();
