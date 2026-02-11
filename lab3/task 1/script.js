const tasksForm = document.getElementById('tasksForm');
const tasksList = document.getElementById('tasksList');
const taskInput = document.getElementById('newTask');

let taskIdCounter = 0;

function createTaskElement(text) {
    const li = document.createElement('li');
    li.classList.add('tasks-item');
    li.id = `task-${taskIdCounter++}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('tasks-item-checkbox');
    checkbox.addEventListener('change', () => {
        li.classList.toggle('tasks-item-checked');
    });

    const span = document.createElement('span');
    span.classList.add('tasks-item-text');
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑'; 
    deleteBtn.classList.add('btn-delete');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);

    return li;
}

tasksForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const text = taskInput.value.trim();

    if (text !== '') {
        const newTask = createTaskElement(text);
        tasksList.append(newTask);
        taskInput.value = ''; 
    }
});