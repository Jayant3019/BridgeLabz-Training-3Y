// Q7 – The Lazy Loader: Promise Combinator Practice

function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error("Profile could not be loaded"));
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error("Posts could not be loaded"));
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error("Messages could not be loaded"));
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    // allSettled waits until every Promise has either fulfilled or rejected.
    // One failure does not prevent the other module results from being returned.
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const moduleNames = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`${moduleNames[index]}: Success - ${result.value}`);
        } else {
            console.log(`${moduleNames[index]}: Failed - ${result.reason.message}`);
        }
    });

    const totalTime = Date.now() - startTime;
    console.log(`Total time taken: ${totalTime} ms`);
}

loadDashboard().catch(error => {
    console.log("Dashboard error:", error.message);
});
