// Q10 – The Final Delivery: Async Pipeline Debugger

// Each delivery step returns a Promise.
// It resolves after a random 1–2 second delay, or rejects to simulate failure.
function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} failed`));
            } else {
                console.log(successMessage);
                resolve(successMessage);
            }
        }, delay);
    });
}

function takeOrder() {
    return deliveryStep("takeOrder", "Step 1: Order taken");
}

function prepare() {
    return deliveryStep("prepare", "Step 2: Food prepared");
}

function pack() {
    return deliveryStep("pack", "Step 3: Package ready");
}

function dispatch() {
    return deliveryStep("dispatch", "Step 4: Out for delivery");
}

function deliver() {
    return deliveryStep("deliver", "Delivery completed!");
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // Each await waits for the previous step to finish before continuing.
        // The async function pauses, but the JavaScript event loop remains free
        // to process other work such as timers and user interactions.
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
    } catch (error) {
        // A rejected Promise skips the remaining steps and jumps to catch.
        console.log("Pipeline failed!", error.message);
    }
}

runPipeline();
