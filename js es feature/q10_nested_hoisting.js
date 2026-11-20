"use strict";
// Q10 – Nested Hoisting and Closures

function outer() {
  console.log("outer  count:", count); // undefined  (outer's own `var count` hoisted)
  var count = 5;
  function inner() {
    console.log("inner  count:", count); // undefined  (inner's OWN `var count` shadows outer's)
    var count = 10;
  }
  inner();
}
outer();

/*
 1) PREDICTION: undefined, undefined.
 2) Each function call creates its own execution context with its own variable environment.
    - outer context: count=undefined, inner=<function>  (creation phase)
    - inner context: count=undefined                    (separate memory!)
    Because inner declares `var count`, the name is local to inner, so it never reaches outer's
    count = 5 (which would have been visible via closure had inner not redeclared it).
*/

// 3) inner as an arrow function
function outerArrow() {
  console.log("outerArrow count:", count);
  var count = 5;
  const inner = () => {
    console.log("arrow inner count:", count); // still undefined: arrow has its own `var count`
    var count = 10;
  };
  inner(); // must be called AFTER definition; before it => ReferenceError (const TDZ)
}
outerArrow();
// Differences: output is the same, BUT the arrow is not hoisted (const in TDZ) and has no own
// `this`/`arguments`. Variable scoping/hoisting of `var count` inside it is unchanged.

try {
  (function () { early(); const early = () => {}; })();
} catch (e) { console.log(`Calling arrow early -> ${e.name}: ${e.message}`); }

// Closure demo (without shadowing) to show the other behaviour:
function outerClosure() {
  var count = 5;
  function inner() { console.log("closure inner sees outer count:", count); }
  inner();
}
outerClosure();

/*
 4) DEBUG SESSION (VS Code, F5): breakpoints on each console.log. Call stack:
      outer  (global/module) -> inner
    Step into inner: stack shows inner on top of outer, Scope panel shows Local: count=undefined,
    Closure(outer): count=undefined. After `var count = 10` Local count becomes 10; outer's stays 5.
    When inner returns it pops off the stack and its context is discarded.
*/
