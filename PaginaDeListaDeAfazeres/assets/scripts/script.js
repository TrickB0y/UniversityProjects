function fontAwesomeIcon(icon_string, target_element) {
    var icon_code = icon_string;
    var target = target_element;
    var icon = document.createElement("i");
    target.appendChild(icon);
    icon.className = icon_code;
}

class Task {
    constructor(id, name, obs, date) {
        this.task_ID = id;
        this.task_name = name;
        this.task_obs = obs;
        this.task_date = date;
        this.task_done = false;
        this.task_late = false;
        this.task_date_d = this.task_date.getDate();
        this.task_date_m = this.task_date.getMonth() + 1;
        this.task_date_y = this.task_date.getFullYear();
        this.taskElement = document.createElement("div");
        this.taskDescDiv = document.createElement("div");
        this.taskNameP = document.createElement("p");
        this.taskObsP = document.createElement("p");
        this.taskDateP = document.createElement("p");
        this.taskDoneB = document.createElement("button");
        this.taskRemoveB = document.createElement("button");

        this.taskDraw("todo-task-shower")

        this.taskElement.appendChild(this.taskDescDiv);
        this.taskDescDiv.appendChild(this.taskNameP);
        this.taskDescDiv.appendChild(this.taskObsP);
        this.taskDescDiv.appendChild(this.taskDateP);
        this.taskElement.appendChild(this.taskDoneB);
        this.taskElement.appendChild(this.taskRemoveB);

        this.taskElement.id = "task" + String(this.task_ID);
        this.taskElement.className = "task";
        this.taskDescDiv.className = "task-desc";
        this.taskNameP.className = "task-name";
        this.taskObsP.className = "task-obs";
        this.taskDateP.className = "task-date";
        this.taskDoneB.className = "task-button-confirm";
        this.taskRemoveB.className = "task-button-remove";
        this.taskDoneB.setAttribute("onclick", "doneTask(" + String(this.task_ID)+ ")");
        this.taskRemoveB.setAttribute("onclick", "destroyTaskObj(" + String(this.task_ID)+ ")");
        this.taskNameP.innerText = this.task_name;
        this.taskObsP.innerText = this.task_obs;
        this.taskDateP.innerText = "Data limite: " + (this.task_date_d) + "/" +
                                     (this.task_date_m) + "/" + this.task_date_y;
        fontAwesomeIcon("fa-solid fa-check", this.taskDoneB);
        fontAwesomeIcon("fa-solid fa-x", this.taskRemoveB);
    }

    taskDraw(destiny_id) {
        document.getElementById(destiny_id).appendChild(this.taskElement);
    }
}

var objects = [];
var objectsIDs = [];
var objectIdCounter = 1;

function createTaskObj(name, obs, date) {
    let task_name = name;
    let task_obs = obs;
    let task_date = new Date(date);
    task_date.setDate(task_date.getDate() + 1);
    let task = new Task(objectIdCounter, task_name, task_obs, task_date);
    objects.push(task);
    objectsIDs.push(objectIdCounter);
    objectIdCounter++;
}

function doneTask(id) {
    let indice = objectsIDs.indexOf(id)
    objects[indice].task_done = true;
    objects[indice].taskElement.remove();
    objects[indice].taskDraw("done-task-shower");
    objects[indice].taskDoneB.remove();
}

function destroyTaskObj(id) {
    let indice = objectsIDs.indexOf(id);
    objects[indice].taskElement.remove()
    objects[indice] = null;
    objects.splice(indice, 1);
    objectsIDs.splice(indice, 1);
}

function newTaskCreation() {
    document.getElementById("new-task-form").style.display = "block";
}

function formReset()
{
    document.getElementById("task-name").value = "";
    document.getElementById("task-obs").value = "";
    document.getElementById("limit-date").value = "";
    document.getElementById("form-warning").innerText = "";
}

function newTaskClose() {
    document.getElementById("new-task-form").style.display = "none";
    formReset();
}

function newTaskAdd() {
    var taskName = document.getElementById("task-name").value;
    var taskDate = document.getElementById("limit-date").value;

    if(taskName.trim() == "") {
        document.getElementById("form-warning").innerText = "o campo nome e data deve ser preenchido";
    } else if(taskDate.trim() == "") {
        document.getElementById("form-warning").innerText = "o campo nome e data deve ser preenchido";
    } else {
        createTaskObj(document.getElementById("task-name").value, document.getElementById("task-obs").value,
                        document.getElementById("limit-date").value);
        newTaskClose();
    }
}

setInterval(function() {
    let actualDate = new Date();
    for (let i = 0; i < objects.length; i++) {
        let indice = objectsIDs.indexOf(objects[i].task_ID);
        let date = objects[indice].task_date;
        let isDone = objects[indice].task_done;
        if (isDone == false) {
            if (date < actualDate) {
                objects[indice].task_late = true
                objects[indice].taskDraw("late-task-shower");
            }
        } 
    }
}, 10000);