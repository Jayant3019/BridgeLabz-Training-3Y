// Q6. Event-Based Counter Simulation

let count = 0;

function increment() {
    count++;
    console.log(`Increment clicked. Count: ${count}`);

    // Nested function can access count from its outer scope.
    function showCount() {
        console.log(`Nested function sees count: ${count}`);
    }

    showCount();
}

function decrement() {
    count--;
    console.log(`Decrement clicked. Count: ${count}`);
}

// Simulate clicks by calling the functions manually.
increment();
increment();
decrement();
increment();
decrement();

console.log(`Final count: ${count}`);
