"use strict";

// Q1: E-Commerce Product Manager (Classes + Objects)
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new Error("Discount must be between 0 and 100.");
        }
        this.price = this.price - (this.price * percent / 100);
    }

    getDetails() {
        return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Wireless Headphones", 1499, "Electronics"),
    new Product(2, "Notebook", 120, "Stationery"),
    new Product(3, "Keyboard", 2199, "Electronics"),
    new Product(4, "Water Bottle", 799, "Home")
];

products[0].applyDiscount(10);

console.log("All products:");
products.forEach(product => console.log(product.getDetails()));

console.log("\\nProducts with price greater than ₹1000:");
products
    .filter(product => product.price > 1000)
    .forEach(product => console.log(product.getDetails()));
