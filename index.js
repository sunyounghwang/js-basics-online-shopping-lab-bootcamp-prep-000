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
  
  // building sentence fragments w. itemName & itemPrice
  var sentPieces = [];
  for (i = 0; i < l; i++) {
    sentPieces.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
  }
  
  var sentStart = 'In your cart, you have ';
  
  if (l === 1) {
    return `In your cart, you have ${sentPieces[0]}.}`;
  } else if (l === 2) {
    return `In your cart, you have ${sentPieces[0]}, and ${sentPieces[1]}.}`;
  } else {
    return sentStart + sentPieces.join(', ');
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
