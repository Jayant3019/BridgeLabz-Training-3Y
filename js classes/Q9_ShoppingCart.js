"use strict";

// Q9: Shopping cart with coupon codes like SAVE20 or DISC10.
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (price < 0 || quantity < 1) {
            throw new Error("Price must be non-negative and quantity must be at least 1.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    applyCoupon(code) {
        // Coupon must start with SAVE or DISC and end with a percentage from 1 to 99.
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(code.trim().toUpperCase());
        if (!match) {
            return { valid: false, message: "Invalid coupon. Use a code such as SAVE20 or DISC10." };
        }

        const discountPercent = Number(match[2]);
        if (discountPercent < 1 || discountPercent > 99) {
            return { valid: false, message: "Coupon discount must be between 1% and 99%." };
        }

        const total = this.getTotal();
        const discount = total * discountPercent / 100;
        return {
            valid: true,
            discountPercent,
            total,
            discount,
            finalTotal: total - discount
        };
    }
}

const cart = new Cart();
cart.addItem("Wireless Mouse", 800, 1);
cart.addItem("Keyboard", 1500, 2);

const cartOutput = document.getElementById("cartOutput");
const message = document.getElementById("message");

function displayCart(couponResult = null) {
    const lines = ["Cart items:"];
    cart.items.forEach(item => {
        lines.push(`${item.name}: ₹${item.price} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`);
    });
    lines.push(`\\nOriginal total: ₹${cart.getTotal().toFixed(2)}`);

    if (couponResult && couponResult.valid) {
        lines.push(`Discount (${couponResult.discountPercent}%): -₹${couponResult.discount.toFixed(2)}`);
        lines.push(`Final payable amount: ₹${couponResult.finalTotal.toFixed(2)}`);
    }
    cartOutput.textContent = lines.join("\\n");
}

displayCart();

document.getElementById("couponForm").addEventListener("submit", event => {
    event.preventDefault();
    const result = cart.applyCoupon(document.getElementById("coupon").value);

    if (!result.valid) {
        message.style.color = "red";
        message.textContent = result.message;
        displayCart();
        return;
    }

    message.style.color = "green";
    message.textContent = `Coupon applied successfully: ${result.discountPercent}% off.`;
    displayCart(result);
});
