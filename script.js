// ---------------- CART SYSTEM ----------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " added to cart!");
}

function updateCartCount() {
  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = cart.length;
  });
}

function loadCartPage() {
  let cartItems = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");
  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total;
}

function checkout() {
  alert("Checkout complete! Thank you for shopping at MS Salman General Store.");
  cart = [];
  localStorage.removeItem("cart");
  updateCartCount();
  loadCartPage();
}

window.onload = loadCartPage;

// ---------------- LOGIN SYSTEM ----------------
function register() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username && password) {
    localStorage.setItem("user", JSON.stringify({username, password}));
    alert("Registration successful! Now you can login.");
  } else {
    alert("Please enter username and password.");
  }
}

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && savedUser.username === username && savedUser.password === password) {
    alert("Login successful! Welcome " + username);
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password.");
  }
}