let list = [];
displayTask();
let input = document.getElementById('input');
let add = document.getElementById('add').onclick = () => { addTask(); };
let enterInput = document.getElementById('input').onkeydown = (event) => {
    if (event.key === "Enter") { addTask(); }
};
function displayTask() {
    let taskList = '';
    for (let i = 0; i < list.length; i++){
        taskList += `<li>${list[i]}</li>`;
    };
    document.getElementById('taskList').innerHTML = taskList;
}
function addTask() {
    list.push(input.value);
    input.value = '';
    console.log(list);
    displayTask();
}



