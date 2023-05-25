const modalOverlay = document.querySelector(".modal-overlay");
const content = document.querySelector("main.content");

function openModal() {
  modalOverlay.classList.add("open");
}

function closeModal() {
  modalOverlay.classList.remove("open");
}

function isModalOpen() {
  return modalOverlay.classList.contains("open");
}
