// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Requires Node.js 18+ for built-in fetch(), or run in a modern browser.

const API_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);

        // fetch() does not reject automatically for HTTP error status codes.
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const products = await response.json();

        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("------------------------------");
        });

        // Optional browser-only rendering:
        // If an element with id="products" exists, create product cards.
        if (typeof document !== "undefined") {
            const productContainer = document.getElementById("products");

            if (productContainer) {
                products.forEach(product => {
                    const card = document.createElement("div");
                    const title = document.createElement("h3");
                    const price = document.createElement("p");
                    const image = document.createElement("img");

                    title.textContent = product.title;
                    price.textContent = `$${product.price}`;
                    image.src = product.image;
                    image.alt = product.title;
                    image.width = 120;

                    card.append(title, price, image);
                    productContainer.appendChild(card);
                });
            }
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.", error.message);
    }
}

fetchProducts();
