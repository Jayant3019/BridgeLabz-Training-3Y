// Q8. Employee Salary Projection

// Current salary and annual increment
let currentSalary = 30000;
let incrementRate = 10;
let salary = currentSalary;

let salaryReport = [];

// Calculate salary for the next five years
for (let year = 1; year <= 5; year++) {
    salary += salary * incrementRate / 100;
    salary = Math.round(salary);

    salaryReport.push({
        Year: year,
        Salary: salary
    });
}

console.table(salaryReport);
