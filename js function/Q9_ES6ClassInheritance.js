"use strict";

// Q9: ES6 class version of Person -> Student inheritance.
class PersonClass {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name); // Calls the parent constructor and initializes `name`.
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const classStudent = new StudentClass("Jayant", "Computer Science");
classStudent.showName();   // Inherited from PersonClass.
classStudent.showBranch(); // Defined on StudentClass.

// Compare behavior with the constructor/prototype version from Q5.
function Person(name) {
    this.name = name;
}
Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const prototypeStudent = new Student("Jayant", "Computer Science");

console.log("\\nPrototype version:");
prototypeStudent.showName();
prototypeStudent.showBranch();

console.log("\\nClass version:");
classStudent.showName();
classStudent.showBranch();

// Both approaches provide the same observable behavior here.
// ES6 classes use JavaScript's prototype-based inheritance under the hood.
