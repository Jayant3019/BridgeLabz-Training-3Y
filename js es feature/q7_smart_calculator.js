"use strict";
// Q7 – Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error { constructor(m) { super(m); this.name = "InvalidOperationError"; } }
class DivideByZeroError extends Error { constructor(m) { super(m); this.name = "DivideByZeroError"; } }
class NegativeRootError extends Error { constructor(m) { super(m); this.name = "NegativeRootError"; } }

function calculate(op, a, b) {
  switch (op) {
    case "add": return a + b;
    case "subtract": return a - b;
    case "divide":
      if (b === 0) throw new DivideByZeroError("Cannot divide by zero");
      return a / b;
    case "power": return a ** b;
    case "root": // square root of the first number
      if (a < 0) throw new NegativeRootError(`Cannot take root of negative number (${a})`);
      return Math.sqrt(a);
    default: throw new InvalidOperationError(`Unknown operation "${op}"`);
  }
}

function runAll(list, a, b) {
  const summary = [];
  for (const op of list) {
    try {
      summary.push({ op, status: "OK", result: calculate(op, a, b) });
    } catch (err) {
      summary.push({ op, status: "ERROR", result: `${err.name}: ${err.message}` });
    }
  }
  return summary;
}

function printSummary(title, rows) {
  console.log(`\n===== ${title} =====`);
  for (const r of rows) console.log(`${r.op.padEnd(10)} | ${r.status.padEnd(5)} | ${r.result}`);
}

printSummary(`Given operations (num1=${num1}, num2=${num2})`, runAll(operations, num1, num2));
printSummary("Extra tests (num1=-9, num2=3)", runAll(["root", "add", "modulus"], -9, 3));
