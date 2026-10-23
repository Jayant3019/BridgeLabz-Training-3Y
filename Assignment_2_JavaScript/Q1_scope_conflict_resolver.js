// Q1. Scope Conflict Resolver

// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable inside the function
    let salary = 40000;

    // Add the global bonus only for permanent employees
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${salary}`);
}

// Test both conditions
calculateSalary(true);  // Total salary: ₹45000
calculateSalary(false); // Total salary: ₹40000

// Changing the local parameter does not change the global bonus.
console.log(`Global bonus remains: ₹${bonus}`);
