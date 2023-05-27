const modalOverlay = document.querySelector(".modal-overlay");
const content = document.querySelector("main.content");
const aside = document.querySelector("aside.aside");

function openModal() {
  modalOverlay.classList.add("open");
}

function closeModal() {
  modalOverlay.classList.remove("open");
}

function isModalOpen() {
  return modalOverlay.classList.contains("open");
}

function mountStickyNote() {
  aside.innerHTML = "";
  stickysNotesData.forEach((sticky) => {
    aside.innerHTML += StickyNoteHTML(sticky);
  });
}

function handleOpenCreateSticky() {
  modalOverlay.querySelector(".modal-content").innerHTML = formCreateSticky();

  openModal();
}

function handleCreateSticky(event) {
  event.preventDefault();

  console.log(event.target);
}

function handleUpdateStickyNote() {
  console.log("atualizando a cada alteração no texto----");
}

function handleDeleteStickyNote() {
  console.log("Deletando----");
}
