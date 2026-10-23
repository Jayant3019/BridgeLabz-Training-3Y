// Q3. Monthly Expense Tracker

// Monthly expenses for five categories
let expenses = {
    food: 5000,
    travel: 2000,
    rent: 10000,
    bills: 1500,
    leisure: 1000
};

let total = 0;

// Add all expenses using an assignment operator
for (let category in expenses) {
    total += expenses[category];
}

// Calculate average and add 10% tax
let average = total / Object.keys(expenses).length;
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;

console.log("Total Expenses: Rs. " + total.toFixed(2));
console.log("Average Expenses: Rs. " + average.toFixed(2));
console.log("Tax (10%): Rs. " + tax.toFixed(2));
console.log("Final Amount: Rs. " + finalAmount.toFixed(2));
