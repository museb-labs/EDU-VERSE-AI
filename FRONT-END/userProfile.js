const user = {
    name: "Mohammed",
    age: 22,
    role: "Software Engineer",
    skills: ["JavaScript", "Node.js", "MongoDB"]
};

console.log("User Profile");
console.log("----------------");
console.log("Name:", user.name);
console.log("Age:", user.age);
console.log("Role:", user.role);
console.log("Skills:", user.skills.join(", "));const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Node.js API is running 🚀"
    });
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});