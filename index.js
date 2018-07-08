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
    console.log("I'm starting a loop!")
    if (l > 1 && i === l - 1) {
      console.log("I'm starting the if part!")
      sentPieces.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
    } else {
      console.log("I'm starting the else part!")
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
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
