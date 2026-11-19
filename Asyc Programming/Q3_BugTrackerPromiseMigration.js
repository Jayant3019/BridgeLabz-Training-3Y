// Q3 – Bug Tracker: Callback to Promise Migration

// Promise-based replacement for the callback-style fetchBugs() function.
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3; // Boolean failure simulation.

            if (apiFailed) {
                reject(new Error("Bug tracking API is unavailable."));
            } else {
                resolve([
                    { id: 1, bug: "UI glitch" },
                    { id: 2, bug: "API timeout" },
                    { id: 3, bug: "Login failure" }
                ]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bugs fetched successfully:");
        console.table(bugs);
    })
    .catch(error => {
        console.log("Unable to fetch bugs:", error.message);
    });
