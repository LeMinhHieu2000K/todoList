let tasks = [
    { name: 'hup', level: 'medium', status: 'todo' },
    { name: 'hup2', level: 'high', status: 'check' },
    { name: 'hup3', level: 'low', status: 'todo' }
];
localStorage.setItem('taskList', JSON.stringify(tasks));
let taskList = JSON.parse(localStorage.getItem('taskList'));

let content = '<div class="container">';
taskList.forEach((task, id) => {
    let completed = "";
    if (task.status == 'check') {
        completed = "checked";
        content += `<div class="row">
             <div class="col-sm-10">
             <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
             <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
             </div>
             <div class="col-sm-2">
             <span id = "${id}" class="${task.level}">${task.level}</span>
             </div>
             </div>
             <br>`
    }
    else {
        content += `<div class="row">
             <div class="col-sm-10">
             <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
             <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
             </div>
             <div class="col-sm-2">
             <span id = "${id}" class="${task.level}">${task.level}</span>
             </div>
             </div>
             <br>`

    }

});
content += '</div>';
document.getElementById('result').innerHTML = content;




function taskCompleted(selectedTask, id) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if (selectedTask.checked) {
        taskName.classList.add("check");
        tasks[selectedTask.id].status = "check";
    } else {
        taskName.classList.remove("check");
        tasks[selectedTask.id].status = "todo";
    }

    localStorage.setItem("listTaskAfterUpdate", JSON.stringify(tasks));// lam the nay de xem dc tren local storage




}

let listTaskAfterUpdate = JSON.parse(localStorage.getItem("listTaskAfterUpdate"));// chuyen tu string lai thanh object thi moi lap dc 


function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const level = document.getElementById('level').value;
    let taskInfo = { name: taskInput, level: level, status: 'todo' };
    // if (!!tasks === false) {
    //     tasks = [];
    // }
    tasks.push(taskInfo);

    // luu vao local storage 

    localStorage.setItem('taskList', JSON.stringify(tasks));
    let taskList = JSON.parse(localStorage.getItem('taskList')); // chuyen tu string lai thanh object thi moi lap dc


    let content = '<div class="checkbox-group">';
    taskList.forEach((task, id) => {

        let completed = "";
        if (task.status == 'check') {
            completed = "checked";
            content += `<div class="row">
             <div class="col-sm-10">
             <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
             <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
             </div>
             <div class="col-sm-2">
             <span id = "${id}" class="${task.level}">${task.level}</span>
             </div>
             </div>
             <br>`
        }
        else {
            content += `<div class="row">
             <div class="col-sm-10">
             <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
             <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
             </div>
             <div class="col-sm-2">
             <span id = "${id}" class="${task.level}">${task.level}</span>
             </div>
             </div>
             <br>`

        }
    });
    content += '</div>';
    document.getElementById('result').innerHTML = content;


}



function LocBangRadioButton() {
    let filter = document.querySelector('input[name="filter"]:checked').value;
    let listUpdate = JSON.parse(localStorage.getItem("listTaskAfterUpdate"));
    let listFist = JSON.parse(localStorage.getItem("taskList"));


    if (!listUpdate) {
        let content = '<div class="checkbox-group">';
        listFist.forEach((task, id) => {
            if (filter == task.status || filter == 'all') {
                let completed = "";
                if (task.status == 'check') {
                    completed = "checked";
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`
                }
                else {
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`

                }
            }



        });
        content += '</div>';
        document.getElementById('result').innerHTML = content;


    }
    else {
        let content = '<div class="checkbox-group">';
        listUpdate.forEach((task, id) => {
            if (filter == task.status || filter == 'all') {
                let completed = "";
                if (task.status == 'check') {
                    completed = "checked";
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`
                }
                else {
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`

                }
            }



        });
        content += '</div>';
        document.getElementById('result').innerHTML = content;



    }
}

// filter by level


function filterByLevel(){
    let filterByLevel = document.getElementById('FilterByLevel').value;
    let listUpdate = JSON.parse(localStorage.getItem("listTaskAfterUpdate"));
    let listFist = JSON.parse(localStorage.getItem("taskList"));


    if (!listUpdate) {
        let content = '<div class="checkbox-group">';
        listFist.forEach((task, id) => {
            if (filterByLevel == task.level) {
                let completed = "";
                if (task.status == 'check') {
                    completed = "checked";
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`
                }
                else {
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`

                }
            }



        });
        content += '</div>';
        document.getElementById('result').innerHTML = content;


    }
    else {
        let content = '<div class="checkbox-group">';
        listUpdate.forEach((task, id) => {
            if (filterByLevel == task.level) {
                let completed = "";
                if (task.status == 'check') {
                    completed = "checked";
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`
                }
                else {
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`

                }
            }



        });
        content += '</div>';
        document.getElementById('result').innerHTML = content;



    }
    
}

function filterBySearch(){
    let searchText = document.getElementById('BySearch').value;

    
    let listUpdate = JSON.parse(localStorage.getItem("listTaskAfterUpdate"));
    let listFist = JSON.parse(localStorage.getItem("taskList"));


    if (!listUpdate) {
        let content = '<div class="checkbox-group">';
        listFist.forEach((task, id) => {
            if (searchText == task.name) {
                let completed = "";
                if (task.status == 'check') {
                    completed = "checked";
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`
                }
                else {
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`

                }
            }



        });
        content += '</div>';
        document.getElementById('result').innerHTML = content;


    }
    else {
        let content = '<div class="checkbox-group">';
        listUpdate.forEach((task, id) => {
            if (searchText == task.name) {
                let completed = "";
                if (task.status == 'check') {
                    completed = "checked";
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`
                }
                else {
                    content += `<div class="row">
                 <div class="col-sm-10">
                 <input onclick = "taskCompleted(this,id)"  class="checkbox"  type="checkbox" name="${task.name}" id="${id}" ${completed}>
                 <label for="${id}" id ="${id}" class="${task.status}">${task.name}</label>
                 </div>
                 <div class="col-sm-2">
                 <span id = "${id}" class="${task.level}">${task.level}</span>
                 </div>
                 </div>
                 <br>`

                }
            }



        });
        content += '</div>';
        document.getElementById('result').innerHTML = content;



    }
    
}