import React, { useCallback, useEffect, useState } from 'react';
import Banner from './components/Banner';
import { useSnackbar } from 'notistack5';
import './style.css';
import useCart from './useCart';
import ItemProductCart from './ItemProductCart';
import CartService from 'src/services/cart';
import CuponService from 'src/services/cupon';
import { CircularProgress } from '@material-ui/core';
import { fCurrency } from 'src/utils/formatNumber';
import EmptyCart from './EmptyCart';
import fakeRequest from 'src/utils/fakeRequest';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  //   const { listProduct, loading } = useProduct({});
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { carts, loading, fetchCart, setLoading } = useCart();
  const [cuponInput, setCuponInput] = useState();
  const [cuponValue, setCuponValue] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  let cartId = localStorage.getItem('cartId');

  const handlerItemBuy = async (quantity, id) => {
    let params = {
      id,
      quantity
    };
    setLoading(true);
    await CartService.editItemProductCart(params);
    await fetchCart(cartId);
    setLoading(false);
    enqueueSnackbar('Update cart success', { variant: 'success' });
  };

  const onDeleteItemProduct = async (item) => {
    setLoading(true);
    await CartService.removeCartProduct(item.id);
    await fetchCart(cartId);
    setLoading(false);
  };

  useEffect(() => {
    let total = carts?.totalPreSale - (carts?.totalPreSale * cuponValue) / 100;
    setCartTotalPrice(total);
  }, [carts?.totalPreSale, cuponValue]);

  const checkoutCart = async (e) => {
    setLoading(true);
    await fakeRequest(3000);
    // let params = {
    //   cartId: carts.idCart,
    //   orderPrice: cartTotalPrice
    // };
    localStorage.setItem('cartId', carts.idCart);
    localStorage.setItem('quantityCartProduct', carts.cart.length);
    localStorage.setItem('orderPrice', cartTotalPrice);

    navigate('/payment');
    e.preventDefault();
  };

  const checkCupons = async (e) => {
    e.preventDefault();
    if (!cuponInput || cuponInput === '') return;
    try {
      setLoading(true);
      const res = await CuponService.checkCupon(cuponInput);

      if (res.success === true) {
        setCuponValue(res.value);
        enqueueSnackbar('Your code check success', { variant: 'success' });
      }
      setLoading(false);
    } catch (error) {
      enqueueSnackbar('Your code check false', { variant: 'error' });
      setLoading(false);
    }
  };

  const handlerCuponCode = (e) => {
    setCuponInput(e.target.value);
  };

  return (
    <div>
      <Banner />
      <div className="cart">
        {!carts ? (
          <EmptyCart />
        ) : (
          <div className="cart__wrap container dflex">
            <ul className={`cart__products col-lg-8 col-12`}>
              {loading && (
                <div className="loading">
                  <CircularProgress color="primary" />
                </div>
              )}
              <li className={`products__header dflex`}>
                <div className="col-6" style={{ padding: 0 }}>
                  <span>PRODUCT</span>
                </div>
                <div className="col-2" style={{ padding: 0 }}>
                  <span>PRICE</span>
                </div>
                <div className="col-2" style={{ padding: 0 }}>
                  <span>QUANTITY</span>
                </div>
                <div className="col-2" style={{ padding: 0 }}>
                  <span>SUBTOTAL</span>
                </div>
              </li>
              <div className={`${loading ? 'isloading' : ''}`}>
                {carts?.cart?.map((item) => (
                  <li key={item.name} className="products__product">
                    <ItemProductCart
                      handlerItemBuy={handlerItemBuy}
                      handleDeleteItemProduct={onDeleteItemProduct}
                      item={item}
                    />
                  </li>
                ))}
              </div>
              <form className={`left ${loading ? 'isloading' : ''}`} action="#">
                <input type="text" onChange={handlerCuponCode} placeholder="Coupon code " style={{ width: '230px' }} />
                <button className="button button_loadding" onClick={checkCupons}>
                  APPLY COUPON
                </button>
                <button style={{ float: 'right' }}>UPDATE CART</button>
              </form>
            </ul>
            <div className="cart__products col-lg-4 col-12 order">
              {loading && (
                <div className="loading">
                  <CircularProgress color="primary" />
                </div>
              )}
              <div className={`${loading ? 'isloading' : ''}`}>
                <h2 className="title">CART TOTALS</h2>
                <form className="right" method="">
                  <ul>
                    <li className="dflex">
                      <strong>Subtotal</strong>
                      <span>{fCurrency(carts.totalPreSale)}</span>
                    </li>
                    {cuponValue ? (
                      <li className="dflex">
                        <strong>Cupon</strong>
                        <div className="cupon">- {cuponValue}%</div>
                      </li>
                    ) : null}
                    <li className="dflex">
                      <strong>Total</strong>
                      <div className="total">
                        {fCurrency(carts.totalPreSale - (carts.totalPreSale * cuponValue) / 100)}
                      </div>
                    </li>
                  </ul>
                  <button
                    onClick={checkoutCart}
                    type="button"
                    style={{ width: '100%', margin: '0' }}
                  >
                    Proceed to Checkout
                  </button>
                </form>
              </div>
              {/* <form className="right" action="#">
              <ul>
                <li className="dflex"><strong>Total</strong>
                  <div className="total">$619.00</div>
                </li>
              </ul>
              <a href="checkout.html"> 
                <button style="width: 100%; margin: 0; pointer-events: none;">Proceed to Checkout</button></a>
            </form> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
