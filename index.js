var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let l = cart.length;
  
  if (l === 0) {
    return 'Your shopping cart is empty.';
  }
  
  if (l === 1) {
  return `In your cart, you have ${} at $${}.}`;
  }
  
  if (l === 2) {
  return `In your cart, you have ${} at $${}, and ${} at $${}.}`;
  }
  
  for (i = 0; i < l; i++) {
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
