"use strict";
// Q8 – Strict Mode Showdown
// The original code has a duplicate parameter, an implicit global and `delete` on a variable.
// In strict mode these are SYNTAX errors found at parse time, so a strict file containing them
// would not run at all. We therefore run each version via new Function() and catch the result.

const original = `
function demo(a, a) {
  total = 10;
  var before = total;              // read it before deleting
  var deleted = delete total;      // sloppy mode: true (implicit global is removable)
  return "ran OK, a = " + a + " (duplicate param: last wins), total = " + before + ", delete returned " + deleted;
}
return demo(5, 10);
`;

// 1 & 2) Without "use strict" (sloppy mode)
try {
  console.log("Sloppy mode  ->", new Function(original)());
  // duplicate params allowed (last wins: a = 10), total becomes a global, delete of an
  // implicit global property succeeds silently.
} catch (e) { console.log("Sloppy mode  ->", e.name, e.message); }

// With "use strict"
try {
  console.log("Strict mode  ->", new Function('"use strict";' + original)());
} catch (e) { console.log("Strict mode  ->", e.name + ":", e.message); }

// Individual violations in strict mode:
const cases = {
  "duplicate parameter": '"use strict"; function f(a, a) {}',
  "implicit global": '"use strict"; total = 10;',
  "delete variable": '"use strict"; var x = 1; delete x;'
};
for (const [name, code] of Object.entries(cases)) {
  try { new Function(code)(); console.log(`${name}: no error`); }
  catch (e) { console.log(`${name.padEnd(20)} -> ${e.name}: ${e.message}`); }
}

/*
 3) WHY STRICT MODE FORBIDS THEM:
  - Duplicate params: ambiguous - which `a` is meant? Almost always a typo, silently hides bugs.
  - Implicit global (total = 10): a misspelt variable would silently pollute global scope.
  - delete on a variable: variables are not meant to be removable; it is meaningless/confusing
    and blocks engine optimisation.
*/

// 4) Correct ES6 version
function demo(a, b) {
  let total = 10;      // declared, local
  total += a + b;      // use it instead of deleting
  return total;
}
console.log("Correct ES6 version ->", demo(5, 10));
