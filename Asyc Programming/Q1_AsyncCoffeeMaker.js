// Q1 – The Startup Morning: Async Coffee Maker

// Each step returns a Promise and takes 1–2 seconds.
// Math.random() is used to simulate an occasional failure.
function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Water boiling failed."));
            } else {
                console.log("Water boiled.");
                resolve("Hot water ready");
            }
        }, delay);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Coffee brewing failed."));
            } else {
                console.log("Coffee brewed.");
                resolve("Coffee brewed");
            }
        }, delay);
    });
}

function pourIntoCup() {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error("Pouring coffee failed."));
            } else {
                console.log("Coffee poured into the cup.");
                resolve("Coffee poured");
            }
        }, delay);
    });
}

console.log("Starting coffee preparation...");

boilWater()
    .then(result => {
        console.log(result);
        return brewCoffee();
    })
    .then(result => {
        console.log(result);
        return pourIntoCup();
    })
    .then(result => {
        console.log(result);
        console.log("Coffee ready for the team!");
    })
    .catch(error => {
        console.log("Coffee process failed:", error.message);
    });
