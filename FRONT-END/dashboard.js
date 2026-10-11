// dashboard.js

const dashboard = {
    students: 1250,
    teachers: 85,
    courses: 42,
    assignments: 318
};

function showDashboard() {
    console.log("===== EduVerse AI Dashboard =====");
    console.log("Students:", dashboard.students);
    console.log("Teachers:", dashboard.teachers);
    console.log("Courses:", dashboard.courses);
    console.log("Assignments:", dashboard.assignments);
}

showDashboard();
const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Node.js server is running 🚀");
});

// API route
app.get("/api/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Mohammed",
            role: "Developer"
        },
        {
            id: 2,
            name: "Ahmed",
            role: "Student"
        }
    ]);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});