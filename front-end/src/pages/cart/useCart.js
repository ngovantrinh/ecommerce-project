// import { useSnackbar } from 'notistack5';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from 'src/hooks/useAuth';
// import { useSearchParams } from 'react-router-dom';
// import { KEY_QUERIES } from 'src/constant';
import { getCarts } from 'src/redux/slices/cart';
import CartService from 'src/services/cart';

function useCart() {
  const { carts } = useSelector((state) => state.cart);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let cartId = localStorage.getItem('cartId');
  let accessToken = localStorage.getItem('accessToken');

  const fetchCart = useCallback(async (cartId) => {
    setLoading(true);
    await dispatch(getCarts(cartId));
    setLoading(false);
  }, [dispatch]);

  // const createCart = async () => {
  //   setLoading(true);
  //   let res = await CartService.createCart();
  //   localStorage.setItem('cartId', res.cartId);
  //   setLoading(false);
  //   return res.cartId;
  // };

  return { carts, loading, fetchCart, setLoading };
}

export default useCart;
