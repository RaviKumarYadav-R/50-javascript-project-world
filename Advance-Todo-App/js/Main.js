import { renderTask } from "./Ui.js";
import { createTask } from "./Todo.js";
import { saveTasks, loadTasks } from "./Storage.js";

let tasks = loadTasks();
renderTask(tasks);

const form = document.querySelector("form"),
  input = form.querySelector("#todo-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = input.value.trim();
  if (!val) return alert("Empty task!");

  const newTask = createTask(val);
  tasks.push(newTask);
  saveTasks(tasks);
  renderTask(tasks);
  input.value = "";
});

// Handle task toggle
export function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  saveTasks(tasks);
  renderTask(tasks);
}

// Handle task removal
export function removeTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks(tasks);
  renderTask(tasks);
}

// Handle editing task
export function editTask(id, e) {
  const inputEl = e.target.closest("li").querySelector("input[type=text]");
  if (!inputEl.readOnly) {
    tasks = tasks.map((task) =>
      task.id === id ? { ...task, task: inputEl.value.trim() } : task
    );
    saveTasks(tasks);
    renderTask(tasks);
  }
  inputEl.readOnly = !inputEl.readOnly;
  e.target.innerText = inputEl.readOnly ? "🖋️" : "📂";
  inputEl.focus();
}
