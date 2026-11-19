// Q9 – Debugging the Event Loop

// Predicted output order before execution:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// The two console.log() statements in the main script are synchronous,
// so they run first, in the order written.
// Promise.then() queues a microtask.
// setTimeout() queues a macrotask (task).
// After synchronous code finishes, JavaScript drains the microtask queue
// before moving on to the macrotask queue. Therefore, Promise callback
// appears before Timeout callback, even with a 0 ms timeout.
