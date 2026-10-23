// Q4. Academic Performance Evaluator

// Marks in five subjects (each out of 100)
let marks = [90, 88, 76, 92, 85];

let totalMarks = 0;
let isFailed = false;

// Calculate total and check for failing marks
for (let mark of marks) {
    totalMarks += mark;

    if (mark < 35) {
        isFailed = true;
    }
}

let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

console.log("Average: " + average.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

// A failing subject overrides the percentage
if (isFailed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
