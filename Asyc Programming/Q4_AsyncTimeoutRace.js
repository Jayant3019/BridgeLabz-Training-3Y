// Q4 – DevOps Delay: Async Timeout Race

function deployToServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Each server has an independent 20% simulated failure chance.
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
            } else {
                resolve(`${serverName} deployment completed`);
            }
        }, delay);
    });
}

const serverA = deployToServer("Server A", 2000);
const serverB = deployToServer("Server B", 3000);

// Promise.all() fulfills only when both deployments succeed.
// If either rejects, the catch handler receives the error.
Promise.all([serverA, serverB])
    .then(results => {
        console.log(results);
        console.log("Deployment completed for all servers");
    })
    .catch(error => {
        console.log("Deployment error:", error.message);
    });

// Promise.race() settles as soon as the first promise settles.
// With successful responses, Server A is expected to respond first.
Promise.race([
    deployToServer("Server A (race)", 2000),
    deployToServer("Server B (race)", 3000)
])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.log("Race request failed:", error.message);
    });
