
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let isExpenseListVisible = false;

function updateUI() {
    const list = document.getElementById("expenseList");
    const totalAmount = document.getElementById("totalAmount");
    list.innerHTML = "";
    let total = 0;

    expenses.forEach((expense, index) => {
        total += expense.amount;
        list.innerHTML += `
            <div class="expense-item">
                <span>${expense.desc} - ₹${expense.amount}</span>
                <div>
                    <button class="edit" onclick="editExpense(${index})">Edit</button>
                    <button class="delete" onclick="deleteExpense(${index})">Delete</button>
                </div>
            </div>
        `;
    });

    totalAmount.innerText = total;
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpense() {
    const desc = document.getElementById("desc").value.trim();
    const amount = Number(document.getElementById("amount").value);

    if (!desc || !amount || amount <= 0) {
        alert("Please enter valid details");
        return;
    }

    expenses.push({ desc, amount });
    updateUI();
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}

function editExpense(index) {
    const newDesc = prompt("Edit Description:", expenses[index].desc);
    const newAmount = prompt("Edit Amount:", expenses[index].amount);

    if (newDesc !== null && newAmount !== null && !isNaN(newAmount) && Number(newAmount) > 0) {
        expenses[index] = { desc: newDesc, amount: Number(newAmount) };
        updateUI();
    }
}

function deleteExpense(index) {
    if (confirm("Are you sure you want to delete this expense?")) {
        expenses.splice(index, 1);
        updateUI();
    }
}

function toggleExpenseList() {
    isExpenseListVisible = !isExpenseListVisible;
    document.getElementById("expenseList").style.display = isExpenseListVisible ? "block" : "none";
}

updateUI();
