// expenseTracker.js

let expenses = [
    {
        name: "Food",
        amount: 250,
        category: "Food"
    },
    {
        name: "Bus Ticket",
        amount: 50,
        category: "Travel"
    },
    {
        name: "Internet",
        amount: 699,
        category: "Bills"
    }
];

// Add a new expense
function addExpense(name, amount, category) {
    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    console.log("Expense added successfully!");
}

// Display all expenses
function showExpenses() {
    console.log("\n===== EXPENSES =====");

    expenses.forEach((expense, index) => {
        console.log(
            `${index + 1}. ${expense.name} - ₹${expense.amount} - ${expense.category}`
        );
    });
}

// Calculate total expenses
function calculateTotal() {
    let total = 0;

    expenses.forEach((expense) => {
        total += expense.amount;
    });

    console.log(`\nTotal Expenses: ₹${total}`);
}

// Find expenses by category
function findByCategory(category) {
    const result = expenses.filter(
        (expense) => expense.category === category
    );

    console.log(`\nExpenses in ${category}:`);

    result.forEach((expense) => {
        console.log(`${expense.name} - ₹${expense.amount}`);
    });
}

// Add new expense
addExpense("Shopping", 1200, "Shopping");

// Show expenses
showExpenses();

// Calculate total
calculateTotal();

// Find expenses
findByCategory("Food");