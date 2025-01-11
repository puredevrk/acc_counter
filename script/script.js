// Countdown Timer Logic
const eventDate = new Date("2025-01-16T21:00:00"); // Set to January 16th, 9 PM

function updateTimer() {
  const now = new Date();
  const timeRemaining = eventDate - now;

  if (timeRemaining <= 0) {
    document.getElementById("timer").textContent = "The event has started!";
    clearInterval(timerInterval);
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

const timerInterval = setInterval(updateTimer, 1000);

// Task Manager Logic
function markComplete(button) {
  const task = button.parentElement;
  task.classList.add("completed");
  task.querySelector(".complete").disabled = true;
  task.querySelector(".reject").disabled = true;
}

function markReject(button) {
  const task = button.parentElement;
  task.classList.add("rejected");
  task.querySelector(".complete").disabled = true;
  task.querySelector(".reject").disabled = true;
}

function addTask() {
  const taskInput = document.getElementById("addTaskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = `${taskInput.value} 
      <button class="complete" onclick="markComplete(this)">Complete</button> 
      <button class="reject" onclick="markReject(this)">Reject</button>`;
    taskList.appendChild(newTask);
    taskInput.value = "";
  } else {
    alert("Task cannot be empty!");
  }
}

// Add event listener to the Add Task button
document.getElementById("addTaskButton").addEventListener("click", addTask);
