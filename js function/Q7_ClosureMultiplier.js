"use strict";

// Q7: The returned function remembers the multiplier from its outer scope.
function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure explanation:
// Even after makeMultiplier() has finished running, the returned inner function
// still has access to the `multiplier` variable from its lexical environment.
