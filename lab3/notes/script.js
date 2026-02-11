const tasksForm = document.getElementById('tasksForm');
const tasksContainer = document.getElementById('tasksList');
const input = document.getElementById("newTask");

function deleteTask(taskId) {
    const task = document.getElementById(taskId);
    task.remove();
}

function checkTask(taskId) {
    const task = document.getElementById(taskId);

    const checkedClass = "tasks-item-checked";
    const isChecked = task.classList.contains(checkedClass);

    if (isChecked) {
        task.classList.remove(checkedClass);
    } else {
        task.classList.add(checkedClass);
    }
}

function taskBuilder() {
    let id = 0;

    return (name) => {
        const task = document.createElement('li');
        task.id = `task${id++}`;
        task.classList.add("tasks-item");

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add("tasks-item-checkbox");
        checkbox.onclick = () => checkTask(task.id);

        const deleteButton = document.createElement("button");
        deleteButton.append("trash");
        deleteButton.onclick = () => deleteTask(task.id);

        task.append(checkbox);
        task.append(name);
        task.append(deleteButton);

        return task;
    }
}

const buildTask = taskBuilder();

tasksForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputText = input.value.trim();

    if (inputText.length) {
        const newTask = buildTask(inputText);
        tasksContainer.append(newTask);
        input.value = '';
    }
})