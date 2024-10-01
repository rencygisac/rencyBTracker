const incomeForm = document.getElementById("income-form");
const incomeAmount = document.getElementById("income-amount");

const expenseForm = document.getElementById("expense-form");
const expenseAmount = document.getElementById("expense-amount");

const expenseDesc = document.getElementById("expenseDesc");
const expenseCategory = document.getElementById("expense-category");

const displayIncome = document.getElementById("displayIncome");
const totalExpensesElement = document.getElementById("totalExpenses");
const balanceElement = document.getElementById("balance");
const expenseTable = document.getElementById("expenseTable");

let income = 0;
let expenses = [];

// Income event listener
incomeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    income = parseInt(incomeAmount.value);
    incomeAmount.value = "";
    displayIncome.textContent = `Income is Rupees ${income}`;
    updateBalance();
});

// Expense event listener
expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const expense = {
        description: expenseDesc.value,
        amount: parseInt(expenseAmount.value),
        category: expenseCategory.value,
    };
    expenses.push(expense);
    expenseDesc.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "Food";
    addExpenseToTable(expense);
    updateBalance();
});

// Function to add expenses to the table
const addExpenseToTable = (expense) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${expense.description}</td>
        <td>Rs ${expense.amount}</td>
        <td>${expense.category}</td>
    `;
    expenseTable.appendChild(row);
};

// Function to update the balance and total expenses
const updateBalance = () => {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const balance = income - totalExpenses;
    totalExpensesElement.textContent = `Total Expenses: Rs ${totalExpenses}`;
    balanceElement.textContent = `Balance is Rs ${balance}`;
};
