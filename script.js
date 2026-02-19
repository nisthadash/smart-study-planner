function addTask() {
    const subject = document.getElementById("subject").value;
    const hours = document.getElementById("hours").value;
    const deadline = document.getElementById("deadline").value;

    if (!subject || !hours || !deadline) {
        alert("Please fill all fields");
        return;
    }

    const taskList = document.getElementById("taskList");

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    taskDiv.innerHTML = `
        <strong>${subject}</strong>
        <small>Hours: ${hours}</small>
        <small>Deadline: ${deadline}</small>
        <div class="task-buttons">
            <button class="complete-btn" onclick="markComplete(this)">Complete</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    taskList.appendChild(taskDiv);

    document.getElementById("subject").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("deadline").value = "";
}

function deleteTask(button) {
    button.closest(".task").remove();
}

function markComplete(button) {
    button.closest(".task").classList.toggle("completed");
}
