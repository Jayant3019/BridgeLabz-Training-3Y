"use strict";
// Q4 – Debugging Mystery

// 1) WHY IT ERRORS: in strict mode, assigning to an undeclared identifier does NOT silently
//    create a global variable (sloppy mode would). It throws ReferenceError: greeting is not defined.
function showMessageBroken() {
  greeting = "Welcome"; // undeclared
  console.log(greeting);
}
try {
  showMessageBroken();
} catch (err) {
  console.log(`Broken version -> ${err.name}: ${err.message}`);
}

// 2) FIX: declare the variable. `let`/`const` makes it local to the function (block scope),
//    so it no longer leaks onto the global object and cannot be created by accident via a typo.
function showMessage() {
  const greeting = "Welcome";
  console.log("Fixed version ->", greeting);
}
showMessage();
console.log("typeof greeting outside function:", typeof greeting); // "undefined" => no leak

// 3) DEBUGGER (VS Code): set a breakpoint on the console.log line inside showMessage,
//    press F5, then in the Debug side-bar:
//      - WATCH panel: click "+" and add `greeting`
//      - CALL STACK panel shows: showMessage -> (anonymous) module -> Module._compile ...
//    Use F10 (step over) / F11 (step into) and watch `greeting` change from undefined to "Welcome".
