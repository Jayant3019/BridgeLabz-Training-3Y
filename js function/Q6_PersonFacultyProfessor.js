"use strict";

// Q6: Build the prototype chain Person -> Faculty -> Professor.
function Person(name) {
    this.name = name;
}
Person.prototype.introduce = function () {
    console.log(`Person: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};

const professor = new Professor("Dr. Sharma", "Computer Science", "JavaScript");

// A Professor object can call its own method and inherited methods.
professor.introduce();       // From Person.prototype.
professor.showDepartment();  // From Faculty.prototype.
professor.showSubject();     // From Professor.prototype.

console.log(
    "Prototype chain works:",
    professor instanceof Professor,
    professor instanceof Faculty,
    professor instanceof Person
); // true true true
