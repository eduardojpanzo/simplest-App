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

    /*improve: verificar ou setar um data que possibilite
              definir onde iremos montar o item
    */
  });
}

function handleOpenCreateSticky() {
  modalOverlay.querySelector(".modal-content").innerHTML = formCreateSticky();

  openModal();
}

function handleCreateSticky(event) {
  event.preventDefault();

  const newSticky = {
    id: Math.floor(Math.random() * 1000),
    title: event.target.title.value,
    color: event.target.color.value,
    content: event.target.content.value,
  };

  stickysNotesData = [...stickysNotesData, newSticky];
  setStickyNote(stickysNotesData);

  loadApp();
  closeModal();
}

function setStickyNote(data) {
  localStorage.setItem("stickysNotesData", JSON.stringify(data));
}

function handleDeleteStickyNote(id) {
  stickysNotesData = stickysNotesData.filter((item) => item.id !== id);

  setStickyNote(stickysNotesData);
  loadApp();
}

function handleUpdateStickyNote() {
  console.log("atualizando a cada alteração no texto----");
}

function loadApp() {
  mountStickyNote();
}

loadApp();
