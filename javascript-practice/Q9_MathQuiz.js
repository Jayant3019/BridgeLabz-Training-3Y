// Q9. Random Math Quiz Generator

// Generate two random integers from 1 to 20
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Select a random arithmetic operator
let operators = ["+", "-", "*", "/"];
let operator = operators[Math.floor(Math.random() * operators.length)];

let answer;

// Calculate the answer using switch
switch (operator) {
    case "+":
        answer = num1 + num2;
        break;

    case "-":
        answer = num1 - num2;
        break;

    case "*":
        answer = num1 * num2;
        break;

    case "/":
        answer = num1 / num2;
        break;

    default:
        console.log("Invalid operator");
}

// Display the question and answer
console.log(`Question: ${num1} ${operator} ${num2}`);

if (operator === "/") {
    console.log("Correct Answer: " + answer.toFixed(2));
} else {
    console.log("Correct Answer: " + answer);
}
