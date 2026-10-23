// Q5. Weather Activity Planner

// Weather details
let temperature = 25;
let isRaining = false;
let windSpeed = 10;

// Recommend an activity
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
    console.log("Perfect day for a walk.");
} else {
    console.log("Stay indoors and relax.");
}
