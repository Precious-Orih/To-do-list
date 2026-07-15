let list = [];
let todaysDate = new Date().toISOString().split('T')[0];




displayTask();
let taskTitle = document.getElementById('taskTitle');
let taskDate = document.getElementById('taskDate');

const add = document.getElementById('add').onclick = () => { addTask(); };
const enterInput = document.getElementById('taskTitle').onkeydown = (event) => {
    if (event.key === "Enter") { addTask(); }
};

function displayTask() {
    let taskList = '';
    for (let i = 0; i < list.length; i++){
        taskList +=
            `<li>
                ${list[i].title},
                ${list[i].date}
                <button class="deleteBtn"  onclick = "deleteTask(${i});">Delete</button>
            </li>`;
    };
    document.getElementById('taskList').innerHTML = taskList;    
}
function addTask() {
    list.push({ title: taskTitle.value, date: taskDate.value });
    console.log(list);
    displayTask();console.log(taskDate.value);
    taskTitle.value = '';
    taskDate.value = '';
    
}
function deleteTask(i) {
    list.splice(i, 1);
    console.log(list);
    displayTask();
}




