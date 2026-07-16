let list = [];
displayTask();

const todaysDate = new Date().toISOString().split('T')[0];
document.getElementById('todaysDate').innerHTML = todaysDate;

const inputTitle = document.getElementById('inputTitle');
const inputDate = document.getElementById('inputDate');
const inputTime = document.getElementById('inputTime');

const clear = document.getElementById('clear').onclick = () => { clearInput(); };
const add = document.getElementById('add').onclick = () => { checkValidity(); };
const enterInput = inputTitle.onkeydown = (event) => {
    if (event.key === "Enter") { checkValidity(); }
};

function displayTask() {
    let taskList = '';
    for (let i = 0; i < list.length; i++){
        taskList +=
            `<li>
                ${list[i].title},
                ${list[i].date},
                ${list[i].time}
                <button class="deleteBtn"  onclick = "deleteTask(${i});">Delete</button>
            </li>`;
    };
    document.getElementById('taskList').innerHTML = taskList;    
}

function checkValidity() {
    let taskTitle = inputTitle.value;
    let taskDate = inputDate.value;
    let taskTime = inputTime.value; 
    if (taskDate === '' || taskTitle === '') {
        console.log('invalid');
    } else if (todaysDate > taskDate) {
        console.log('date');
    } else if (taskTime === '') {
        taskTime = '--:--';
        addTask();
    } else{
        addTask();
    } 
}
function addTask() {
    list.push({ title: taskTitle, date: taskDate, time: taskTime });
    console.log(list);
    displayTask();
    clearInput();
}
function deleteTask(i) {
    list.splice(i, 1);
    console.log(list);
    displayTask();
}
function clearInput() {
    inputTitle.value = '';
    inputDate.value = '';
    inputTime.value = '';
}





