let tasks = [];

function addTask() {
  const taskInput = document.getElementById('task');
  const dateInput = document.getElementById('date');

  const taskText = taskInput.value;
  const dueDate = dateInput.value;

  if (!taskText.trim()) return;

  tasks.push({
    text: taskText,
    date: dueDate,
    completed: false
  });

  taskInput.value = '';
  dateInput.value = '';

  showTasks();
}

function showTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <div class="task-row">
        <input type="checkbox" onchange="toggleComplete(${index})" ${task.completed ? 'checked' : ''} />
        <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
        <span class="task-date">${task.date}</span>
        <div>
          <button class="btn-edit" onclick="editTask(${index})">Edit</button>
          <button class="btn-delete" onclick="deleteTask(${index})">Delete</button>
        </div>
      </div>
    `;
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index].text);
  const newDate = prompt("Edit due date (YYYY-MM-DD):", tasks[index].date);
  if (newTask !== null && newDate !== null) {
    tasks[index].text = newTask;
    tasks[index].date = newDate;
    showTasks();
  }
}
