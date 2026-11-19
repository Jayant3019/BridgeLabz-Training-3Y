// Q1. Student Result Processing (reduce + Classes)

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (this.marks.length === 0) {
            throw new Error("Marks list cannot be empty.");
        }

        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();

        if (average >= 80) return "A";
        if (average >= 60) return "B";
        if (average >= 40) return "C";
        return "F";
    }
}

const students = [
    new Student("Aman", [85, 90, 78]),
    new Student("Riya", [65, 70, 60]),
    new Student("Karan", [30, 45, 35])
];

students.forEach(student => {
    console.log(
        `${student.name}: Average = ${student.calculateAverage().toFixed(2)}, Grade = ${student.getGrade()}`
    );
});
