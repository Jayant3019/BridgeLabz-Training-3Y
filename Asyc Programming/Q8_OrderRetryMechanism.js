// Q8 – Order Processing Flow: Async Retry Mechanism

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a 50% chance of API success.
            if (Math.random() < 0.5) {
                resolve("Order submitted successfully");
            } else {
                reject(new Error("Order submission failed"));
            }
        }, 500);
    });
}

async function processOrder() {
    const maximumAttempts = 3;

    for (let attempt = 1; attempt <= maximumAttempts; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            console.log(result);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);

            if (attempt === maximumAttempts) {
                throw new Error("Order could not be processed");
            }
        }
    }
}

processOrder().catch(error => {
    console.log("Final order status:", error.message);
});
