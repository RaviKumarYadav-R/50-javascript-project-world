import { toggleTask, editTask, removeTask } from "./Main.js";
import { loadTasks } from "./Storage.js";

const tasks = loadTasks();
//store filter value
let filterVal = "all"; // by default filter value is all

// Dom elements for search and filter
const searchInput = document.querySelector("#search-input");
const filterBtn = document.querySelector("#filter");
const filterList = document.querySelectorAll("input[type='radio']");
const filterListContainer = document.querySelector(".filter-btn-box");

// filter Btn functionality
filterBtn.addEventListener("click", () => {
  filterListContainer.classList.toggle("hidden");
});

// filter functionality
filterList.forEach((item) => {
  item.addEventListener("click", () => {
    filterVal = item.value;
    renderTask(tasks);
  });
});

// Render all tasks in the container
export function renderTask(tasks) {
  const container = document.querySelector(".list-container");
  container.innerHTML = "";
  if (!tasks) return;
  tasks.forEach((task, i) => {
    let filteredBy =
      filterVal === "all" ||
      (filterVal === "completed" && task.completed) ||
      (filterVal === "pending" && !task.completed);

    if (filteredBy) {
      const taskElement = document.createElement("li");
      taskElement.classList.add("task");

      // Create the checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "toggleComplete";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => toggleTask(task.id));

      // Task text
      const input = document.createElement("input");
      input.type = "text";
      input.value = task.task;
      input.readOnly = true;
      input.className = "task-input";
      input.id = i;

      // Buttons
      const btnBox = document.createElement("div");
      btnBox.className = "btn-box";

      const editBtn = document.createElement("button");
      editBtn.className = "edit";
      editBtn.textContent = "🖋️";
      editBtn.addEventListener("click", (e) => {
        if (!task.completed) {
          editTask(task.id, e);
        }
      });

      const removeBtn = document.createElement("button");
      removeBtn.className = "remove";
      removeBtn.textContent = "❌";
      removeBtn.addEventListener("click", () => removeTask(task.id));

      btnBox.append(editBtn, removeBtn);
      taskElement.append(checkbox, input, btnBox);
      container.appendChild(taskElement);
    }
  });
}

// Initial render
renderTask();
