// Q2: Live character counter with warning colors and a 100-character limit.
const messageArea = document.getElementById("message");
const characterCounter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");
const maximumCharacters = 100;

function updateCounter() {
    const remaining = maximumCharacters - messageArea.value.length;
    characterCounter.textContent = remaining;
    characterCounter.className = "counter-normal";

    if (remaining <= 20 && remaining > 0) {
        characterCounter.className = "counter-warning";
    } else if (remaining === 0) {
        characterCounter.className = "counter-danger";
    }
}

messageArea.addEventListener("input", updateCounter);

// beforeinput lets us prevent an input action before it changes the value.
messageArea.addEventListener("beforeinput", event => {
    const isInsertion = event.inputType.startsWith("insert");
    if (isInsertion && messageArea.value.length >= maximumCharacters) {
        event.preventDefault();
        updateCounter();
    }
});

resetButton.addEventListener("click", () => {
    messageArea.value = "";
    updateCounter();
    messageArea.focus();
});

updateCounter();
