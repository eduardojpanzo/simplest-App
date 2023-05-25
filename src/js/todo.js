let todos = todoData ? todoData : [];

const createTodoModalFrame = `
<form class="todo-preview" onsubmit="handlecreateTodo(event)">
    <div class="control-form">
        <label for="title">Title: </label>
        <input type="text" name="title" id="title" />
    </div>
    <div class="todo-resume">
        <select name="priority" id="priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
        </select>
        <select name="status" id="status">
        <option value="process">Process</option>
        <option value="toDo">ToDo</option>
        </select>
    </div>
    <div class="control-form about">
        <label for="desc">About TODO</label>
        <textarea name="desc" id="desc"></textarea>
    </div>
    <div class="control-form">
        <label>Create At</label>
        <input type="date" name="date" id="date" />
    </div>

    <button class="btn">${svgAdd}</button>
</form>
`;

const btnSwithTheme = document.querySelector(".btn.switch-theme");
const btnToggleModal = document.querySelectorAll(".btn.toggle-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const contentItems = document.querySelector(".content-items");
const numbers = document.querySelector(".header .numbers");

btnSwithTheme.addEventListener("click", toggleTheme);
btnToggleModal.forEach((el) =>
  el.addEventListener("click", handleToggleShowCreateTodoModal)
);

function toggleTheme(e) {
  const isdark = document.querySelector("html").classList.toggle("dark");
  isdark
    ? (e.currentTarget.innerHTML = svgLight)
    : (e.currentTarget.innerHTML = svgDark);
}

function handleToggleShowCreateTodoModal() {
  modalOverlay.querySelector(".modal-content").innerHTML = createTodoModalFrame;

  openModal();
}

function handleToggleShowUpdateTodoModal(id) {
  const data = todos.filter((item) => item.id === id)[0];

  modalOverlay.querySelector(".modal-content").innerHTML =
    mountFormUpdate(data);

  openModal();
}

function openModal() {
  modalOverlay.classList.add("open");
}

function closeModal() {
  modalOverlay.classList.remove("open");
}

function isModalOpen() {
  return modalOverlay.classList.contains("open");
}

function handlecreateTodo(e) {
  e.preventDefault();

  const newData = {
    id: Math.random(),
    title: e.target.title.value,
    priority: e.target.priority.value,
    status: e.target.status.value,
    desc: e.target.desc.value.trim(),
    date: e.target.date.value,
  };

  todos = [...todos, newData];

  ChangeStorge(todos);
}

function handleUpdateTodo(e) {
  e.preventDefault();

  const newData = {
    id: Number(e.target.id.value),
    title: e.target.title.value,
    priority: e.target.priority.value,
    status: e.target.status.value,
    desc: e.target.desc.value.trim(),
    date: e.target.date.value,
  };

  const data = todos.map((todo) => {
    if (todo.id === newData.id) {
      return newData;
    }

    return todo;
  });

  ChangeStorge(data);
}

function handleDeleteTodo(id) {
  const data = todos.filter((item) => item.id !== id);

  ChangeStorge(data);
}

function ChangeStorge(data) {
  localStorage.setItem("todoData", JSON.stringify(data));
  closeModal();
  document.location.reload(true);
}

function getDonesTodo() {
  return todos.filter((todo) => todo.status === "done");
}
function getProcessTodo() {
  return todos.filter((todo) => todo.status === "process");
}
function getBacklogTodo() {
  return todos.filter((todo) => todo.status === "toDo");
}

function SetTodoNumbers() {
  numbers.querySelector(".number.dones").innerHTML = getDonesTodo().length;
  numbers.querySelector(".number.process").innerHTML = getProcessTodo().length;
  numbers.querySelector(".number.backlog").innerHTML = getBacklogTodo().length;
}

function mountTodos() {
  contentItems.innerHTML = ``;
  todos.map((todo) => {
    contentItems.innerHTML += `
    <div class="todo-item" onclick="handleToggleShowUpdateTodoModal(${
      todo.id
    })">
      <div class="title">${todo.title}</div>
      <div class="todo-resume">
        <span class="priority">${defineUnicideEmoji(todo.priority)}</span>
        <span class="staus">${defineUnicideEmoji(todo.status)}</span>
      </div>
      <p class="create-at">${
        todo.date ? `Since: <em>${todo.date}</em>` : ""
      }</p>
    </div>
    `;
  });
}

function defineUnicideEmoji(name) {
  switch (name) {
    case "high":
      return "🔥";
    case "medium":
      return "⚡";
    case "low":
      return "💤";
    case "done":
      return "✅";
    case "process":
      return "⏳";
    case "toDo":
      return "📌";
  }
}

function mountFormUpdate(data) {
  const updateFormFrame = `
  <form class="todo-preview" onsubmit="handleUpdateTodo(event)">
      <input type="hidden" id="id" name="id" value="${data.id}">
      <div class="control-form">
        <input type="text" name="title" id="title" value="${data.title}"/>
      </div>

      <div class="todo-resume">
      <select name="priority" id="priority">
          <option value="high" ${
            data.priority === "high" ? "selected" : ""
          }>High</option>
          <option value="medium" ${
            data.priority === "medium" ? "selected" : ""
          }>Medium</option>
          <option value="low" ${
            data.priority === "low" ? "selected" : ""
          }>Low</option>
      </select>
      <select name="status" id="status">
          <option value="done" ${
            data.status === "done" ? "selected" : ""
          }>Done</option>
          <option value="process" ${
            data.status === "process" ? "selected" : ""
          }>Process</option>
          <option value="toDo" ${
            data.status === "toDo" ? "selected" : ""
          }>ToDo</option>
      </select>
      </div>

      <div class="control-form about">
        <label for="desc">About TODO</label>
        <textarea name="desc" id="desc">${data.desc}</textarea>
      </div>

      <div class="control-form">
        <label>Create At</label>
        <input type="date" name="date" id="date" value="${data.date}" />
      </div>

      <div class="content-btns">
        <button onclick="handleDeleteTodo(${
          data.id
        })" type="button" class="btn">${svgThash}</button>
        <button type="submit" class="btn">${svgUpdate}</button>
      </div>
  </form>
  `;

  return updateFormFrame;
}

function initTodoApp() {
  todos = todoData ? todoData : [];
  btnSwithTheme.innerHTML = svgDark;
  btnToggleModal[0].innerHTML = svgAdd;

  mountTodos();
  SetTodoNumbers();
}

initTodoApp();
