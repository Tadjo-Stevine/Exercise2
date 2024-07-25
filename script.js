let tasks = [];

function addTask() {
    let taskInput = document.getElementById('task-input');
    let taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        let newTask = {
            id: Date.now(),
            text: taskText
        };
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function renderTasks() {
    let tasksContainer = document.getElementById('tasks');
    tasksContainer.innerHTML = '';
    
    tasks.forEach(task => {
        let taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <p>${task.text}</p>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        tasksContainer.appendChild(taskElement);
    });
}