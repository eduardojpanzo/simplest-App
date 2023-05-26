let kabanBoxesData = [
  { id: 1, title: "Todo" },
  { id: 2, title: "Progress" },
];

let kabanItemsData = [
  {
    id: 1,
    boxId: 1,
    title: "Title1",
    content: "lorem same things sakt hiudg hasb",
    date: "20/05/2023",
    level: "medium",
  },
  {
    id: 1,
    boxId: 2,
    title: "Title3",
    content: "lorem same things sakt hiudg hasb",
    date: "20/05/2023",
    level: "high",
  },
  {
    id: 1,
    boxId: 1,
    title: "Title4",
    content: "lorem same things sakt hiudg hasb",
    date: "20/05/2023",
    level: "low",
  },
];

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
