const modalTaskData = `
<form class="todo-preview">
    <div class="control-form">
    <input type="text" name="title" id="title" />
    </div>

    <div class="todo-resume">
    <select name="priority" id="priority">
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
    </select>
    <select name="status" id="status">
        <option value="done">Done</option>
        <option value="process">Process</option>
        <option value="toDo">ToDo</option>
    </select>
    </div>

    <div class="control-form about">
    <label for="desc">About TODO</label>
    <textarea name="desc" id="desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, voluptatum!</textarea
    >
    </div>

    <div class="control-form">
    <label>Create At</label>
    <input type="date" name="date" id="date" />
    </div>

    <button class="btn">+</button>
</form>
`;

const svgUpdate = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1e7f06">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
            <path d="M13 3H7C5.89543 3 5 3.89543 5 5V10M13 3L19 9M13 3V8C13 8.55228 13.4477 9 14 9H19M19 9V19C19 20.1046 18.1046 21 17 21H10C7.79086 21 6 19.2091 6 17V17C6 14.7909 7.79086 13 10 13H13M13 13L10 10M13 13L10 16" stroke="#1e7f06" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
    </svg>
`;

const svgThash = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d30303">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M5.16565 10.1534C5.07629 8.99181 5.99473 8 7.15975 8H16.8402C18.0053 8 18.9237 8.9918 18.8344 10.1534L18.142 19.1534C18.0619 20.1954 17.193 21 16.1479 21H7.85206C6.80699 21 5.93811 20.1954 5.85795 19.1534L5.16565 10.1534Z" stroke="#d30303" stroke-width="2"></path>
        <path d="M19.5 5H4.5" stroke="#d30303" stroke-width="2" stroke-linecap="round"></path>
        <path d="M10 3C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5H10V3Z" stroke="#d30303" stroke-width="2"></path>
        <path d="M14 12V17" stroke="#d30303" stroke-width="2" stroke-linecap="round"></path>
        <path d="M10 12V17" stroke="#d30303" stroke-width="2" stroke-linecap="round"></path>
    </g>
</svg>
`;

const svgAdd = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#066aac">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="#066aac" stroke-width="2" stroke-linecap="round"></path>
    </g>
</svg>
`;
