/**
 * SpendWise Interactive Tracking Engine
 * Week 7 DOM & Array Data Structures Assignment - Stabilized
 */

// Global App Variables
let expensesArray = [];
let monthlyBudgetLimit = 2500.00;

// Wait for the webpage to load before running setup
document.addEventListener("DOMContentLoaded", function() {
    const expenseForm = document.getElementById("expense-form");
    const setBudgetBtn = document.getElementById("set-budget-btn");

    if (expenseForm) {
        expenseForm.addEventListener("submit", handleNewExpenseSubmit);
    }
    if (setBudgetBtn) {
        setBudgetBtn.addEventListener("click", handleBudgetUpdate);
    }

    renderDashboardMetrics();
});

// Function 1: Updates the monthly budget configuration
function handleBudgetUpdate() {
    const budgetInput = document.getElementById("budget-input");
    if (!budgetInput) return;

    const parsedValue = parseFloat(budgetInput.value);

    if (isNaN(parsedValue) || parsedValue <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    monthlyBudgetLimit = parsedValue;
    budgetInput.value = ""; 
    renderDashboardMetrics();
}

// Function 2: Handles new expense form submissions
function handleNewExpenseSubmit(event) {
    event.preventDefault(); 

    const nameInput = document.getElementById("expense-name");
    const amountInput = document.getElementById("expense-amount");

    if (!nameInput || !amountInput) return;

    const expenseTitle = nameInput.value.trim();
    const expenseCost = parseFloat(amountInput.value);

    if (!expenseTitle || isNaN(expenseCost) || expenseCost <= 0) {
        alert("Please enter a valid description and cost.");
        return;
    }

    // Add new object to our arrays data structure
    const newTransactionRecord = {
        id: Date.now(),
        title: expenseTitle,
        amount: expenseCost
    };

    expensesArray.push(newTransactionRecord);

    nameInput.value = "";
    amountInput.value = "";

    renderDashboardMetrics();
}

// Function 3: Processes metrics and loops through arrays data to update DOM
function renderDashboardMetrics() {
    let totalAccumulatedSpending = 0.0;
    const transactionListContainer = document.getElementById("transaction-list");
    
    if (transactionListContainer) {
        transactionListContainer.innerHTML = "";

        // Loop through data array entries
        for (let i = 0; i < expensesArray.length; i++) {
            const item = expensesArray[i];
            totalAccumulatedSpending += item.amount;

            const listItemNode = document.createElement("li");
            listItemNode.className = "ledger-item";
            listItemNode.innerHTML = `
                <span class="item-title">${item.title}</span>
                <span class="item-amount">$${item.amount.toFixed(2)}</span>
            `;
            transactionListContainer.appendChild(listItemNode);
        }
    }

    // Calculate dynamic values
    const currentNetRemainder = monthlyBudgetLimit - totalAccumulatedSpending;

    // Display basic updates to screen text blocks
    const budgetDisplay = document.getElementById("display-budget");
    const expensesDisplay = document.getElementById("display-expenses");
    const balanceDisplay = document.getElementById("display-balance");

    if (budgetDisplay) budgetDisplay.innerText = `$${monthlyBudgetLimit.toFixed(2)}`;
    if (expensesDisplay) expensesDisplay.innerText = `$${totalAccumulatedSpending.toFixed(2)}`;
    if (balanceDisplay) balanceDisplay.innerText = `$${currentNetRemainder.toFixed(2)}`;

    // Decision checking: Alert box formatting conditions
    const alertBoxContainer = document.getElementById("budget-alert");
    if (!balanceDisplay) return;

    if (currentNetRemainder < 0) {
        balanceDisplay.style.color = "#ef4444"; 
        if (alertBoxContainer) {
            alertBoxContainer.className = "alert-box danger";
            alertBoxContainer.innerText = `Warning: Overrun detected! Budget exceeded by $${Math.abs(currentNetRemainder).toFixed(2)}.`;
        }
    } else {
        balanceDisplay.style.color = "#10b981"; 
        if (expensesArray.length > 0 && alertBoxContainer) {
            alertBoxContainer.className = "alert-box success";
            alertBoxContainer.innerText = `Safe: Expenses inside calculated guidelines. Remaining cushion: $${currentNetRemainder.toFixed(2)}.`;
        } else if (alertBoxContainer) {
            alertBoxContainer.className = "alert-box hide-element";
        }
    }
}
