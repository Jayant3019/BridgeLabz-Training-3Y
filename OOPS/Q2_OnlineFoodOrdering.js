// Q2. Online Food Ordering (map + reduce + Error Handling)

const menu = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Pasta", price: 180 },
    { name: "Fries", price: 90 }
];

function calculateBill(orderItems) {
    // Find every ordered item and reject unknown menu names.
    const orderedMenuItems = orderItems.map(itemName => {
        const menuItem = menu.find(item =>
            item.name.toLowerCase() === itemName.toLowerCase()
        );

        if (!menuItem) {
            throw new Error(`"${itemName}" is not available on the menu.`);
        }

        return menuItem;
    });

    const prices = orderedMenuItems.map(item => item.price);
    return prices.reduce((total, price) => total + price, 0);
}

try {
    const order = ["Burger", "Pizza", "Fries"];
    console.log("Total bill: Rs.", calculateBill(order));

    // Uncomment the next line to test invalid-item handling.
    // console.log(calculateBill(["Burger", "Sushi"]));
} catch (error) {
    console.log("Unable to place order:", error.message);
}
