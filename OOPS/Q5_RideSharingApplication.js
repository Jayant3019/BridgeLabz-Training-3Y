// Q5. Ride-Sharing Application

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicleType, vehicleNumber) {
        super(name, rating);
        this.vehicleType = vehicleType;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null ||
            this.distance === "" || !Number.isFinite(Number(this.distance))) {
            throw new Error("Trip distance must be provided as a valid number.");
        }

        const distance = Number(this.distance);

        if (distance < 0) {
            throw new Error("Trip distance cannot be negative.");
        }

        const baseFare = 50;
        const farePerKm = 12;
        return baseFare + (distance * farePerKm);
    }
}

const rider = new User("Aman", 4.8);
const driver = new Driver("Rohit", 4.9, "Car", "UP16AB1234");

console.log(`Rider: ${rider.name}, Rating: ${rider.rating}`);
console.log(`Driver: ${driver.name}, Vehicle: ${driver.vehicleType} (${driver.vehicleNumber})`);

const trips = [
    new Trip("Mathura", "Vrindavan", 15),
    new Trip("Agra", "Mathura", -10)
];

trips.forEach(trip => {
    try {
        console.log(
            `${trip.fromLocation} to ${trip.toLocation}: Fare = Rs. ${trip.calculateFare()}`
        );
    } catch (error) {
        console.log("Unable to calculate fare:", error.message);
    }
});
