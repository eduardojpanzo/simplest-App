const elements = document.querySelectorAll(".btn");

elements.forEach((element) => {
  element.addEventListener("click", () => {
    let command = element.dataset["element"];

    if (command === "createLink" || command === "insertImage") {
      let url = prompt("Enter the link here!", "http://");

      document.execCommand(command, false, url);

      return;
    }

    document.execCommand(command, false, null);
  });
});
