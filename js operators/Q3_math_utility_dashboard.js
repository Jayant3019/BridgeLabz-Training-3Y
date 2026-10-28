// Q3. Math Utility Dashboard

const x = 16.75;
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const power = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Template literal formats the results as one report.
console.log(`
MATH UTILITY DASHBOARD
----------------------
Input number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Power (x^3): ${power.toFixed(3)}
Random number (10–50): ${randomNumber}
`);
