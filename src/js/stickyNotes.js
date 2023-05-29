let currentSticky;
const modalOverlay = document.querySelector(".modal-overlay");
const content = document.querySelector("main.content");
const aside = document.querySelector("aside.aside");

content.addEventListener("dragover", handleDragOver, false);
content.addEventListener("drop", handleDrop, false);

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

    /*improve: verificar ou setar um data(dados) que possibilite
              definir onde iremos montar o item desde o inicio
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

//Execution Command
function handleSetCommand(event) {
  console.log(event);
}

// Drag and drop

function handleDragStart(event) {
  currentSticky = event.target;
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();

  //verificar onde deve ser largado (drop) e largar no lugar expecifico
  event.target.appendChild(currentSticky);
}

function loadApp() {
  mountStickyNote();
}

loadApp();
