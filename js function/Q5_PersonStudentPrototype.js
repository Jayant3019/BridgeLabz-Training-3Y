"use strict";

// Q5: Parent constructor.
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

// Child constructor.
function Student(name, branch) {
    Person.call(this, name); // Run Person constructor to initialize name.
    this.branch = branch;
}

// Link Student.prototype to Person.prototype to establish inheritance.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Jayant", "Computer Science");
student.showName();   // Inherited from Person.prototype.
student.showBranch(); // Defined on Student.prototype.

console.log(
    "Student inherits from Person:",
    Person.prototype.isPrototypeOf(student)
); // true
