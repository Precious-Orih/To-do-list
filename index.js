let list = [
// {
//     title: 'make dinner',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'wash dishes',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'fold laundry',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'call mom',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'dentist appointment',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'feed cat',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'take chicken out of fridge blah blah blah blah blah b',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'make dinner',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'wash dishes',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'fold laundry',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'call mom',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'dentist appointment',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'feed cat',
//     date: '2026-02-02',
//     time: '12:20'
// },{
//     title: 'take chicken out of fridge blah blah blah blah blah b',
//     date: '2026-02-02',
//     time: '12:20'
// }
];
displayTask();
background();

const todaysDate = new Date().toISOString().split('T')[0];
document.getElementById('todaysDate').innerHTML = todaysDate;

const inputTitle = document.getElementById('inputTitle');
const inputDate = document.getElementById('inputDate');
const inputTime = document.getElementById('inputTime');

// const clear = document.getElementById('clear').onclick = () => clearInput();
const add = document.getElementById('add').onclick = () => checkValidity();
const enterInput = inputTitle.onkeydown = (event) => { if (event.key === "Enter") { checkValidity(); }; };
function displayTask() {
    let taskList = '';
    list.forEach((listItem, index) => {
        taskList +=
            `<li>
                <span class="title">${listItem.title}</span>
                <span class="date">${listItem.date}</span>
                <span class="time">${listItem.time}</span>                
                <button class="deleteBtn">Delete</button>
            </li>`;
    });
    document.getElementById('taskList').innerHTML = taskList; 
    document.querySelectorAll('.deleteBtn').forEach((deleteBtn, index) => {
        deleteBtn.onclick = () => {
            deleteTask(index);
        };
    });
}
function checkValidity() {    
    if (inputDate.value === '' || inputTitle.value === '') {
        console.log('invalid');
    } else if (todaysDate > inputDate.value) {
        console.log('date');
    } else{
        addTask();
    } 
}
function addTask() {
    let taskTime = inputTime.value;
    if (inputTime.value === '') {
        taskTime = "--:--";
    };
    list.unshift({ title: inputTitle.value, date: inputDate.value, time: taskTime });
    console.log(list);
    displayTask();
    clearInput();
    background();
}
function deleteTask(index) {
    list.splice(index, 1);
    console.log(list);
    displayTask();
}
function clearInput() {
    inputTitle.value = '';
    inputDate.value = '';
    inputTime.value = '';
}
function background() {
    if (list.length !== 0) {
        console.log(1);
        document.getElementById('tasks').classList.remove("background");
    };
}





