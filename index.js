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
  
  var sentPieces = [];
  for (let i = 0; i < l; i++) {
    if (l > 1 && i === l - 1) {
      sentPieces.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
    } else {
      sentPieces.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
  }
  
  if (l === 1) {
    return `In your cart, you have ${sentPieces}.`;
  } else {
    return `In your cart, you have ` + sentPieces.join(', ');
    }
}

function total() {
  var total = 0;
  for (let i = 0, l = cart.length; i < l; i++) {
    total += cart[i].itemPrice;
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
