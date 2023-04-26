const dataButton = [
  { data: "bold", classIcon: "fa-bold" },
  { data: "italic", classIcon: "fa-italic" },
  { data: "underline", classIcon: "fa-underline" },
  { data: "insertUnOrderedList", classIcon: "fa-list-ul" },
  { data: "insertOrderedList", classIcon: "fa-list-ol" },
  { data: "createLink", classIcon: "fa-link" },
  { data: "justifyLeft", classIcon: "fa-align-left" },
  { data: "justifyCenter", classIcon: "fa-align-center" },
  { data: "justifyRight", classIcon: "fa-align-right" },
  { data: "justifyFull", classIcon: "fa-align-justify" },
  { data: "insertImage", classIcon: "fa-image" },
];

const header = document.querySelector("#header.text-editor-header");

function handleSetCommand(element) {
  let command = element.dataset["element"];

  if (command === "createLink" || command === "insertImage") {
    let url = prompt("Enter the link here!", "http://");

    document.execCommand(command, false, url);

    return;
  }

  document.execCommand(command, false, null);
}

function generateButtonsElements() {
  header.innerHTML = "";

  dataButton.map(({ data, classIcon }) => {
    const buttonElement = `
      <button class="btn" data-element="${data}" onclick="handleSetCommand(this)">
        <i class="fa ${classIcon}"></i>
      </button>
    `;

    header.innerHTML += buttonElement;
  });
}

generateButtonsElements();
