// Q4. Employee Inheritance + Runtime Polymorphism

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is completing general ${this.department} work.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    // Method overriding: Manager provides its own work() implementation.
    work() {
        return `${this.name} is managing the ${this.department} team of ${this.teamSize} people.`;
    }
}

const staff = [
    new Employee("Aman", "Development"),
    new Manager("Riya", "Engineering", 8),
    new Employee("Kabir", "Testing"),
    new Manager("Neha", "Sales", 5)
];

// The same method call produces different results according to object type.
staff.forEach(person => console.log(person.work()));
