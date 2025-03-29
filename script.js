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

let cartProducts = [];

// DOM elements
const productList = document.getElementById("product-list");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

renderProducts();

// Render cart list
function renderCart() {
	cartList.innerHTML = "";
}

// Add item to cart
function addToCart(productId) {
	products.forEach((product)=>{
		if(product.id === productId){
			cartProducts.push(product);
			sessionStorage.setItem("cart-products", JSON.stringify(cartProducts));
			cartList.innerHTML += 
				`
				 <li>${product.name} - $${product.price}</li>
			   `
		};
	});
}

// Remove item from cart
function removeFromCart(productId) {
	
}

// Clear cart
function clearCart() {
	cartProducts = [];
	sessionStorage.setItem("cart-products", "");
	renderCart();
}

// Initial render
renderCart();
