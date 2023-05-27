const stickysNotesData = [
  { id: 1, title: "Estudos", content: "Algumas coisas que devo estudae" },
  { id: 2, title: "Pesquisas", content: "Algumas coisas que devo pesquisar" },
];

const stickyBtnsData = [
  { classIcon: "fas fa-bold", comand: "" },
  { classIcon: "fas fa-italic", comand: "" },
  { classIcon: "fas fa-underline", comand: "" },
  { classIcon: "fas fa-list-ul", comand: "" },
  { classIcon: "fas fa-align-left", comand: "" },
  { classIcon: "fas fa-align-center", comand: "" },
  { classIcon: "fas fa-align-right", comand: "" },
  { classIcon: "fas fa-align-justify", comand: "" },
];

function StickyNoteHTML(sticky) {
  return `
    <div class="sticky-item color:[yellow|blue|green|orange|red]" draggable="true">
        <div class="sticky-header">
        <h3>${sticky.title}</h3>
        <button onclick="handleDeleteStickyNote(${
          sticky.id
        })" class="sticky-btn"><i class="fas fa-times"></i></button>
        </div>
        <div class="sticky-body" contenteditable="true">${sticky.content}</div>

        <div class="sticky-footer">
        ${stickyBtnsData
          .map(
            (btn) => `
            <button class="sticky-btn">
                <i class="${btn.classIcon}"></i>
            </button>
        `
          )
          .join("")}
        </div>
    </div>`;
}

const formCreateSticky = () => {
  return `
    <form class="kaban-form" onsubmit="handleCreateSticky(event)">
        <div class="control-form">
            <label for="title">Title: </label><br/>
            <input type="text" name="title" id="title" />
        </div>
        <div class="control-form">
            <label for="content">description</label><br/>
            <textarea name="content" id="content"></textarea>
        </div>
    
        <button>Create</button>
    </form>`;
};
