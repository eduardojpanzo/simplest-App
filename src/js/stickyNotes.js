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

function handleSetCommand(element) {
  console.log(element);
}

// Drag and drop

function handleDragStart(event) {
  const stickyStyle = window.getComputedStyle(event.target, null);
  currentSticky = event.target;

  event.dataTransfer.setData(
    "text/plain",
    parseInt(stickyStyle.getPropertyValue("left"), 10) -
      event.clientX +
      "," +
      (parseInt(stickyStyle.getPropertyValue("top"), 10) - event.clientY)
  );
}

function handleDragOver(event) {
  event.preventDefault();
  return false;
}

function handleDrop(event) {
  const offset = event.dataTransfer.getData("text/plain").split(",");
  const sticky = currentSticky;

  console.log(currentSticky);

  sticky.style.left = event.clientX + parseInt(offset[0], 10) + "px";
  sticky.style.top = event.clientY + parseInt(offset[1], 10) + "px";

  event.preventDefault();
  return false;
}

function loadApp() {
  mountStickyNote();
}

loadApp();
