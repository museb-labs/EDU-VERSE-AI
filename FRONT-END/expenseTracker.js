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