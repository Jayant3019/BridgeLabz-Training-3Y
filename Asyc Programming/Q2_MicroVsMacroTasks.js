// Q2 – Task Scheduler: Micro vs Macro Challenge

console.log("Start");

// setTimeout callback is a macrotask (task queue).
setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

// Promise.then callback is a microtask (microtask queue).
Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// Explanation:
// JavaScript completes all synchronous code first.
// Then it empties the microtask queue (including Promise.then callbacks).
// Only after microtasks are processed does it run queued macrotasks
// such as setTimeout callbacks. A 0 ms timeout is not immediate.
