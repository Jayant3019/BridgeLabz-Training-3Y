// Q7. Smart Guessing Game

// Generate a random number from 1 to 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Test guess (change this value to test)
let userGuess = 25;

console.log("Your Guess: " + userGuess);
console.log("Secret Number: " + secretNumber);

// Check the guess
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
