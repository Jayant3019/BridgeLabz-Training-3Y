"use strict";
// Q9 – JSON Audit
const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];
const extraTest = '{"user":"Teen","age":"16"}'; // extra entry to demonstrate the under-18 filter

const clean = [];
const errors = [];

function audit(list) {
  for (let i = 0; i < list.length; i++) {
    const lineNo = i + 1;
    // DEBUG: breakpoint on the next line, Step Over (F10). When JSON.parse throws,
    // control jumps straight to the catch block and the rest of the try block is skipped.
    try {
      const obj = JSON.parse(list[i]);
      const missing = ["user", "age"].filter(k => !(k in obj));
      if (missing.length) throw new Error(`Missing key(s): ${missing.join(", ")}`);
      clean.push(obj);
    } catch (err) {
      const type = err instanceof SyntaxError ? "Invalid JSON" : "Validation";
      errors.push({ line: lineNo, type, message: err.message });
      console.log(`Line ${lineNo} -> ${type}: ${err.message}`);
    }
  }
}

audit([...rawData, extraTest]);

console.log("\nClean entries:", clean);
console.log("Errors:", errors);

// BONUS: convert age to Number and filter out under-18 users
const adults = clean
  .map(u => ({ ...u, age: Number(u.age) }))
  .filter(u => u.age >= 18);
console.log("\nAdults (age >= 18):", adults);
console.log(`Removed under-18: ${clean.length - adults.length}`);
