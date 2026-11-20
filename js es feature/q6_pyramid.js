"use strict";
// Q6 – Pyramid Pattern Generator
// Usage: node q6_pyramid.js [rows]   (default = 5)
const arg = process.argv[2];
let limit = Number(arg);
if (arg === undefined || !Number.isInteger(limit) || limit < 1) limit = 5; // user input with default 5

console.log(`Pyramid with ${limit} rows:`);
for (let i = 1; i <= limit; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) row += "* ";
  console.log(row.trimEnd());
}

// 1) let -> var: the printed pattern is IDENTICAL, but `var` is function-scoped, so the loop
//    variables leak out of the loop and (being shared) behave differently inside closures.
console.log("\n--- var version ---");
for (var a = 1; a <= 4; a++) {
  var line = "";
  for (var b = 1; b <= a; b++) line += "* ";
  console.log(line.trimEnd());
}
console.log(`After loops (var leaked): a=${a}, b=${b}, line="${line.trim()}"`);
// With let the same console.log would throw ReferenceError - the variables die with the block.

// Closure difference (classic var trap):
const withVar = [], withLet = [];
for (var v = 0; v < 3; v++) withVar.push(() => v);
for (let l = 0; l < 3; l++) withLet.push(() => l);
console.log("var closures:", withVar.map(f => f())); // [3,3,3] one shared variable
console.log("let closures:", withLet.map(f => f())); // [0,1,2] new binding per iteration

// 2) DEBUG TIP: breakpoint on `row += "* "`; Watch `i`, `j`, `row`. `j` resets to 1 on every outer
//    iteration (re-use), `row` is re-initialised to "" each time.
// 4) "use strict": a typo like `for (k = 0; k < 3; k++)` throws ReferenceError:
try { eval("for (k = 0; k < 3; k++) {}"); } catch (e) { console.log(`Undeclared loop var -> ${e.name}: ${e.message}`); }
