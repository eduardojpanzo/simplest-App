let kabanItemsData = JSON.parse(localStorage.getItem("kabanItemsData")) || [];
let kabanBoxesData = JSON.parse(localStorage.getItem("kabanBoxesData")) || [];

const formCreateBox = () => {
  return `
  <form class="kaban-form" onsubmit="handleCreateBox(event)">
      <div class="control-form">
          <label for="title">Name or Title: </label><br/>
          <input type="text" name="title" id="title" />
      </div>
  
      <button>Create</button>
  </form>`;
};

const formCreateItem = (boxId) => {
  return `
  <form class="kaban-form" onsubmit="handleCreateItem(event)">
      <input type="hidden" name="boxId" id="boxId" value="${boxId}"/>
      <div class="control-form">
        <label>Level</label><br/>
        <select name="level" id="level">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
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
