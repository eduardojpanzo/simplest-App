let stickysNotesData =
  JSON.parse(localStorage.getItem("stickysNotesData")) || [];

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
    <div class="sticky-item ${sticky.color}" draggable="true">
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
          <label for="color">Color</label>
          <select class="color" id="color">
            <option style="background: yellow" value="yellow">yellow</option>
            <option style="background: blue" value="blue">blue</option>
            <option style="background: green" value="green">green</option>
            <option style="background: orange" value="orange">orange</option>
            <option style="background: red" value="red">red</option>
          </select>
        </div>
        <div class="control-form">
            <label for="title">Title: </label><br/>
            <input type="text" name="title" id="title" />
        </div>
        <div class="control-form">
            <label for="content">Initial Content</label><br/>
            <textarea name="content" id="content"></textarea>
        </div>
    
        <button>Create</button>
    </form>`;
};
