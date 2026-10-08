const mongoose = require("mongoose");

async function main() {

    try {

        await mongoose.connect(
            "mongodb://127.0.0.1:27017/eduverse"
        );

        console.log("MongoDB connected successfully!");

    } catch (error) {

        console.log(
            "MongoDB connection failed:",
            error.message
        );
    }
}

main();const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "eduverse"
});

connection.connect((error) => {

    if (error) {
        console.log("MySQL connection failed:", error.message);
        return;
    }

    console.log("MySQL connected successfully!");
});

// Get students
connection.query(
    "SELECT * FROM students",
    (error, results) => {

        if (error) {
            console.log(error);
            return;
        }

        console.log("Students:");
        console.table(results);
    }
);