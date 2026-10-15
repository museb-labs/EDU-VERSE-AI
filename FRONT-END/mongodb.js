const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>EduVerse AI</h1>
        <p>Node.js server is running successfully!</p>
    `);
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Node.js server running at http://localhost:${PORT}`);
});
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <h1>EduVerse AI</h1>
        <p>Node.js server is running successfully!</p>
    `);
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Node.js server running at http://localhost:${PORT}`);
});
const expenses = [
    { name: "Food", amount: 250 },
    { name: "Travel", amount: 120 },
    { name: "Books", amount: 500 },
    { name: "Internet", amount: 800 }
];

function calculateTotal(expenses) {
    return expenses.reduce((total, expense) => {
        return total + expense.amount;
    }, 0);
}

function showExpenses(expenses) {
    console.log("===== EXPENSE TRACKER =====");

    expenses.forEach((expense, index) => {
        console.log(
            `${index + 1}. ${expense.name} - ₹${expense.amount}`
        );
    });

    console.log("---------------------------");
    console.log("Total Expenses: ₹" + calculateTotal(expenses));
}

showExpenses(expenses);