const express = require("express");

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to EduVerse AI",
        status: "Backend running"
    });
});

// Student route
app.get("/api/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Ahmed",
            course: "Information Technology"
        },
        {
            id: 2,
            name: "Ali",
            course: "Computer Science"
        }
    ]);
});

// POST route
app.post("/api/students", (req, res) => {

    const student = req.body;

    console.log("New student:", student);

    res.status(201).json({
        message: "Student added successfully",
        student: student
    });
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});