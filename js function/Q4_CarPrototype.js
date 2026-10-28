"use strict";

// Q4: Constructor function creates object-specific properties.
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// This method is shared by every Car instance through the prototype.
Car.prototype.getDetails = function () {
    return `${this.brand} ${this.model}`;
};

const carOne = new Car("Toyota", "Corolla");
const carTwo = new Car("Honda", "Civic");

console.log(carOne.getDetails());
console.log(carTwo.getDetails());

// Both objects use the same function stored on Car.prototype.
console.log(
    "Shared method:",
    carOne.getDetails === carTwo.getDetails
); // true
