"use strict";

// Q2: applyOperation applies the supplied callback to every number.
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number by passing an arrow function as the callback.
const doubledNumbers = applyOperation(numbers, number => number * 2);
console.log("Doubled:", doubledNumbers);

// Square each number with a different callback.
const squaredNumbers = applyOperation(numbers, number => number * number);
console.log("Squared:", squaredNumbers);
