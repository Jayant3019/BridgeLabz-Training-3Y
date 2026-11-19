// Q3. Product Discount System (Constructor + Prototype)

// Constructor function creates Product objects.
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Shared method is stored once on the prototype.
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

const products = [
    new Product("Laptop", 60000),
    new Product("Headphones", 3000),
    new Product("Keyboard", 1500)
];

const discounts = [10, 20, 5];

products.forEach((product, index) => {
    const discountedPrice = product.applyDiscount(discounts[index]);
    console.log(
        `${product.name}: Original = Rs. ${product.price}, ` +
        `${discounts[index]}% off, Final = Rs. ${discountedPrice.toFixed(2)}`
    );
});

// Abstraction: caller uses applyDiscount(percent) without repeating
// the internal discount calculation formula.
