const mysql = require("mysql2");

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