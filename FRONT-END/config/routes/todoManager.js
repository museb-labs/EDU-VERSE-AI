// todoManager.js

let tasks = [
    {
        title: "Learn JavaScript",
        completed: true
    },
    {
        title: "Practice Node.js",
        completed: false
    },
    {
        title: "Build a project",
        completed: false
    }
];

// Show all tasks
function showTasks() {
    console.log("\n===== TODO LIST =====");

    tasks.forEach((task, index) => {
        const status = task.completed ? "✅ Completed" : "❌ Pending";

        console.log(`${index + 1}. ${task.title} - ${status}`);
    });
}

// Add a new task
function addTask(title) {
    tasks.push({
        title: title,
        completed: false
    });

    console.log(`\nTask added: ${title}`);
}

// Complete a task
function completeTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log(`\nTask completed: ${tasks[index].title}`);
    } else {
        console.log("\nInvalid task number.");
    }
}

// Delete a task
function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        const deletedTask = tasks.splice(index, 1);

        console.log(`\nTask deleted: ${deletedTask[0].title}`);
    } else {
        console.log("\nInvalid task number.");
    }
}

// Count completed tasks
function countCompletedTasks() {
    const completed = tasks.filter(task => task.completed);

    console.log(`\nCompleted Tasks: ${completed.length}`);
}

// Add task
addTask("Learn Express.js");

// Complete second task
completeTask(1);

// Show completed count
countCompletedTasks();

// Display all tasks
showTasks();

// Delete a task
deleteTask(0);

// Display final list
showTasks();