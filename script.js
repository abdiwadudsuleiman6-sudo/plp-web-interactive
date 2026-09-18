/**
 * SpendWise Interactive Tracking Engine
 * Week 7 DOM & Array Data Structures Assignment
 */

// 2. Work with Multiple Records: Array to manage transaction objects
let expensesArray = [];
let monthlyBudgetLimit = 2500.00;

// Initialize form elements and triggers after layout loads completely
document.addEventListener("DOMContentLoaded", () => {
    // Select relevant DOM components
    const expenseForm = document.getElementById("expense-form");
    const setBudgetBtn = document.getElementById("set-budget-btn");

    // 5. Handle User Interactions: Event listeners for form actions
    expenseForm.addEventListener("submit", handleNewExpenseSubmit);
    setBudgetBtn.addEventListener("click", handleBudgetUpdate);

    // Initial paint to draw default values correctly
    renderDashboardMetrics();
});

/**
 * Validates updates to global allocation parameters
 */
function handleBudgetUpdate() {
    const budgetInput = document.getElementById("budget-input");
    const parsedValue = parseFloat(budgetInput.value);

    if (isNaN(parsedValue) || parsedValue ${item.title}</span>
            <span class="item-amount">$${item.amount.toFixed(2)}</span>
        `;
        transactionListContainer.appendChild(listItemNode);
    }

    // Calculate balances
    const currentNetRemainder = monthlyBudgetLimit - totalAccumulatedSpending;

    // Inject summary panel text nodes
    document.getElementById("display-budget").innerText = `$${monthlyBudgetLimit.toFixed(2)}`;
    document.getElementById("display-expenses").innerText = `$${totalAccumulatedSpending.toFixed(2)}`;
    document.getElementById("display-balance").innerText = `$${currentNetRemainder.toFixed(2)}`;

    // 1. Implement Decision Making: Conditional status formatting checks
    const balanceTextElement = document.getElementById("display-balance");
    const alertBoxContainer = document.getElementById("budget-alert");

    if (currentNetRemainder < 0) {
        balanceTextElement.style.color = "#ef4444"; // Crimson danger indicator
        
        // Expose structured status messaging card
        alertBoxContainer.className = "alert-box danger";
        alertBoxContainer.innerText = `Warning: Overrun detected! You have exceeded your budget parameter limit allocation by $${Math.abs(currentNetRemainder).toFixed(2)}.`;
    } else {
        balanceTextElement.style.color = "#10b981"; // Healthy account emerald green
        
        if (expensesArray.length > 0) {
            alertBoxContainer.className = "alert-box success";
            alertBoxContainer.innerText = `Safe: Your financial expenditures are well inside calculated ceiling guidelines. Remaining cushion: $${currentNetRemainder.toFixed(2)}.`;
        } else {
            // Keep container target concealed early if no entries are present
            alertBoxContainer.className = "alert-box hide-element";
        }
    }
}
