const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="removeButton">Remove</button>
  `;

  taskList.appendChild(taskItem);

  taskInput.value = "";

  const removeButton = taskItem.querySelector(".removeButton");
  removeButton.addEventListener("click", () => removeTask(taskItem));
}

function removeTask(taskItem) {
  taskItem.remove();
}
