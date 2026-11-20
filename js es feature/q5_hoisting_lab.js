"use strict";
// Q5 – Hoisting Lab: The Sequence Trap

console.log("--- Original code (as given) ---");
// PREDICTION: undefined, "Game started", "ready"
console.log(score);   // var is hoisted & initialised to undefined -> prints undefined
announce();           // function declaration is fully hoisted (name + body) -> works
var score = 50;       // assignment happens here at runtime
function announce() { console.log("Game started"); }
let status = "ready"; // let is hoisted but in Temporal Dead Zone until this line
startGame();          // declaration hoisted; by now `status` is initialised -> works
function startGame() { console.log(status); }

/*
 MEMORY STATE (creation phase, before any line runs):
  score      : var            -> allocated, value = undefined
  announce   : function decl  -> allocated, value = whole function
  status     : let            -> allocated but UNINITIALISED (TDZ) -> access throws ReferenceError
  startGame  : function decl  -> allocated, value = whole function
 The "trap": if startGame() were called BEFORE the `let status` line it would throw.
*/

console.log("\n--- Demonstrating the traps ---");
try { trapFn(); } catch (e) { console.log(`TDZ trap -> ${e.name}: ${e.message}`); }
function trapFn() { console.log(lateLet); }
let lateLet = "too late"; // trapFn ran before this line initialised it

// 2) FIXED version: declare first, use later (let/const at top, no use-before-define)
console.log("\n--- Fixed version ---");
const fixedScore = 50;
let fixedStatus = "ready";
function announce2() { console.log("Game started"); }
function startGame2() { console.log(fixedStatus); }
console.log(fixedScore);
announce2();
startGame2();

// 3) ARROW FUNCTION version: arrow functions assigned to const/let/var are NOT hoisted as functions
console.log("\n--- Arrow function comparison ---");
try { announceArrow(); } catch (e) { console.log(`Arrow before definition -> ${e.name}: ${e.message}`); } // const in TDZ
const announceArrow = () => console.log("Game started (arrow)");
announceArrow(); // works only AFTER the definition line

try { varArrow(); } catch (e) { console.log(`var arrow before definition -> ${e.name}: ${e.message}`); } // var = undefined, not a function
var varArrow = () => console.log("var arrow");
/*
 DIFFERENCE: function declarations hoist with their body (callable anywhere in scope);
 arrow functions follow variable rules: const/let -> TDZ ReferenceError, var -> TypeError (undefined is not a function).
*/
