import { axiosClient } from '.';

class CartService {
  static getCart(cartId = '') {
    let url = `/cart/getCart`;
    return axiosClient.get(url);
  }

  static createCart() {
    let url = '/cart/createCart';
    return axiosClient.post(url);
  }

  static changeStatusCart(body) {
    let url = '/cart/status/change';
    return axiosClient.put(url, {...body});
  }

  static editItemProductCart(body) {
    let url = `/cart/edit`;
    return axiosClient.put(url, { ...body });
  }

  static addUserToCart(body) {
    let url = `/cart/addUserToCart`;
    return axiosClient.put(url, { ...body });
  }

  static removeCartProduct(id) {
    let url = `/cart/deleteCartProduct/${id}`;
    return axiosClient.delete(url);
  }

  static checkoutCartProduct(body) {
    let url = '/cart/paymentOrders';
    return axiosClient.put(url, {
      ...body
    });
  }

  static getAllCart() {
    let url = '/cart/all';
    return axiosClient.get(url);
  }
}

export const getCartProduct = (cartId) => {
  let url = `https://ecommerce-api-mzbr.onrender.com/api/cart/getCart?cartId=${cartId}`;
  if (!cartId) url = 'https://ecommerce-api-mzbr.onrender.com/api/cart/getCart';
  async function getCart(url = '') {
    // Default options are marked with *
    let token = localStorage.getItem('accessToken');

    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token ? 'Bearer ' + token : ''}`
        // 'Content-Type': 'application/x-www-form-urlencoded',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': true
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  return getCart(url).then((data) => {
    return data;
  });
};

export default CartService;
