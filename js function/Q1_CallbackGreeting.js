"use strict";

// Q1: A callback is a function passed to another function as an argument.
function showEndMessage() {
    console.log("Welcome to the course!");
}

function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    console.log("Calling the callback now...");
    callback();
}

// Pass showEndMessage as a callback function.
greetUser("Jayant", showEndMessage);
