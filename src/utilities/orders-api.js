import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

// Add an item to the cart
export function addProductToCart(productId, cartId) {
  console.log(productId, cartId)
  return sendRequest(`${BASE_URL}/cart/${cartId}/products/${productId}`, 'POST');
}

// Update the item's qty in the cart
export function setProductQtyInCart(productId, newQty, cartId) {
  // console.log(productId, newQty)
  return sendRequest(`${BASE_URL}/cart/${cartId}/qty`, 'PUT', { cartId, productId, newQty });
}

export function checkout() {
  return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
}
