// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

let cartList = document.querySelector("#cart-list");
const productList = document.getElementById("product-list");

// DOM elements

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
	cartList.innerHTML = "";
	cart.forEach(product => {
		const li = document.createElement("li");
		li.textContent = `${product.name} - $${product.price} - `;
		const button = document.createElement("button");
		button.textContent = "Remove from cart"
		button.onclick = () => removeFromCart(product.id);
		li.appendChild(button);
		cartList.appendChild(li);
    });
}

// Add item to cart
function addToCart(productId) {
	let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
	products.forEach((product)=>{
		if(product.id === productId){
			cart.push(product);
			sessionStorage.setItem("cart", JSON.stringify(cart));
		}
	});
	renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
	let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
	let newCart = cart.filter((product) => product.id !== productId);
	sessionStorage.setItem("cart", JSON.stringify(newCart));
	renderCart();
}

// Clear cart
function clearCart() {
	sessionStorage.removeItem("cart");
	renderCart();
}

// Initial render
renderProducts();
renderCart();
