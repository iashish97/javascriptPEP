import products from "./data.js";

const cart = [];
const userEmail = "john@gmail.com";

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return console.log("Product not found");

  const existing = cart.find(p => p.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

function increment(productId) {
  const item = cart.find(p => p.id === productId);
  if (item) item.quantity++;
}

function decrement(productId) {
  const item = cart.find(p => p.id === productId);
  if (!item) return;

  item.quantity--;

  if (item.quantity <= 0) {
    const index = cart.findIndex(p => p.id === productId);
    cart.splice(index, 1);
  }
}

function calculateTotal() {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}

function placeOrder() {
  if (cart.length === 0) {
    console.log("Cart is empty");
    return;
  }

  const total = calculateTotal();

  const order = {
    email: userEmail,
    items: cart,
    totalValue: total
  };

  console.log("\nOrder placed successfully");
  console.log(order);
}

// Show all products
console.log("\nAvailable Products:");
products.forEach(p =>
  console.log(p.id, p.name, "-", p.category, "- ₹" + p.price)
);


// Demo usage
addToCart(1);
addToCart(3);
addToCart(5);

increment(1);
increment(5);

decrement(1);
decrement(1);

placeOrder();
