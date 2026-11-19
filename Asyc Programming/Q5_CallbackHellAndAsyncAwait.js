// Q5 – Frontend Rush: Avoiding Callback Hell

// -------------------- Version 1: Nested callbacks --------------------
// Each stage starts the next stage only after its 1-second delay.
// This nested structure is commonly called callback hell.

function runWithCallbacks() {
    console.log("Callback pipeline started");

    setTimeout(() => {
        console.log("design");

        setTimeout(() => {
            console.log("build");

            setTimeout(() => {
                console.log("test");

                setTimeout(() => {
                    console.log("deploy");

                    setTimeout(() => {
                        console.log("celebrate");
                        console.log("Callback pipeline completed");
                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);

    }, 1000);
}

// Promise-based helper used by the async/await version.
function runStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

// -------------------- Version 2: Async/await --------------------
async function runWithAsyncAwait() {
    console.log("Async/await pipeline started");

    // await pauses this async function until the current stage Promise settles.
    // It does not block the JavaScript thread or other asynchronous work.
    await runStage("design");
    await runStage("build");
    await runStage("test");
    await runStage("deploy");
    await runStage("celebrate");

    console.log("Async/await pipeline completed");
}

// Run the callback example first, then the async/await example.
runWithCallbacks();

setTimeout(() => {
    runWithAsyncAwait().catch(error => {
        console.log("Pipeline error:", error.message);
    });
}, 5500);

// Why async/await is easier to read:
// It looks like ordinary top-to-bottom code, avoids deeply nested callbacks,
// and makes sequential asynchronous steps and try/catch error handling clearer.
