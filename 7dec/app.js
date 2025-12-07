function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let ul = document.getElementById("taskList");
  let li = document.createElement("li");

  li.innerHTML = `
    ${taskText}
    <span class="delete-btn" onclick="deleteTask(this)">Delete</span>
  `;

  ul.appendChild(li);
  input.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
}