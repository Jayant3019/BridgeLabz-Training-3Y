"use strict";

// Q6: Employee Management System
class Employee {
    constructor(id, name, department, monthlySalary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = monthlySalary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            throw new Error("Bonus percent cannot be negative.");
        }
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 45000),
    new Employee(2, "Sara", "HR", 38000),
    new Employee(3, "Kiran", "Finance", 52000),
    new Employee(4, "Neha", "IT", 48000),
    new Employee(5, "Rohan", "Sales", 40000)
];

employees[0].applyBonus(10);

console.log("Annual salary of each employee:");
employees.forEach(employee => {
    console.log(`${employee.name} (${employee.department}): ₹${employee.getAnnualSalary().toFixed(2)}`);
});

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(`Total annual payout: ₹${totalAnnualPayout.toFixed(2)}`);
