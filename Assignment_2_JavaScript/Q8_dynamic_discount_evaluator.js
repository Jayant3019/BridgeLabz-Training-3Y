// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Find the original cart total with reduce().
const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);
let discountedSubtotal = 0;
const itemSummaries = [];

// Apply category-specific discounts.
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discount = product.price * discountRate;
    const finalPrice = product.price - discount;
    discountedSubtotal += finalPrice;
    itemSummaries.push(`${product.item}: ₹${product.price} - ₹${discount.toFixed(2)} discount = ₹${finalPrice.toFixed(2)}`);
}

// Apply an extra 5% discount if the original cart value exceeds ₹50,000.
const extraDiscountRate = originalTotal > 50000 ? 0.05 : 0;
const extraDiscount = discountedSubtotal * extraDiscountRate;
const finalTotal = discountedSubtotal - extraDiscount;

console.log("DYNAMIC DISCOUNT SUMMARY");
console.log("------------------------");
console.log(itemSummaries.join("\n"));
console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Extra overall discount: ₹${extraDiscount.toFixed(2)} (${extraDiscountRate * 100}%)`);
console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
