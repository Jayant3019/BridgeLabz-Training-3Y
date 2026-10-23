// Q6. Progressive Discount System

// Original purchase amount
let total = 7500;
let discountPercentage = 0;

// Select the discount tier
if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
}

// Calculate discount and final price
let discountAmount = total * discountPercentage / 100;
let finalPrice = Math.round(total - discountAmount);

console.log("Original Total: Rs. " + total);
console.log("Discount: " + discountPercentage + "%");
console.log("Discount Amount: Rs. " + discountAmount);
console.log("Final Price: Rs. " + finalPrice);
