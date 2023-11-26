import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
import CartService, { getCartProduct } from 'src/services/cart';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  carts: null,
  post: null,
  recentCarts: [],
  listCarts: [],
  hasMore: true,
  index: 0,
  step: 11
};

const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET carts
    getCartsSuccess(state, action) {
      state.isLoading = false;
      state.carts = action.payload;
    },

    // GET ALL carts
    getAllCartsSuccess(state, action) {
      state.isLoading = false;
      state.listCarts = action.payload;
    },

    // GET POST INFINITE
    getCartsInitial(state, action) {
      state.isLoading = false;
      state.carts = action.payload;
    },

    getMoreCarts(state) {
      const setIndex = state.index + state.step;
      state.index = setIndex;
    },

    noHasMore(state) {
      state.hasMore = false;
    },

    // GET POST
    getCartsuccess(state, action) {
      state.isLoading = false;
      state.post = action.payload;
    },

    // GET RECENT POST
    getRecentCartsSuccess(state, action) {
      state.isLoading = false;
      state.recentCarts = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const { getMoreCarts } = slice.actions;

// ----------------------------------------------------------------------

export function getCarts(cartId) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const userData = localStorage.getItem('accessToken');
      let response = null;
      if (userData) {
        response = await getCartProduct(cartId);
        localStorage.removeItem('cartId');
      } else {
        response = await getCartProduct(cartId);
      }
      const { success, data } = response;
      if (!success) return console.log('err');
      dispatch(slice.actions.getCartsSuccess(data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getAllCarts() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      // const userData = localStorage.getItem('accessToken');
      // let response = null;
      let  response = await CartService.getAllCart();
        localStorage.removeItem('cartId');
      const { success, data } = response;
      if (!success) return console.log('err');
      dispatch(slice.actions.getAllCartsSuccess(data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
// ----------------------------------------------------------------------

export function getCartsInitial(index, step) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/carts', {
        params: { index, step }
      });
      const results = response.data.results.length;
      const { maxLength } = response.data;

      dispatch(slice.actions.getCartsInitial(response.data.results));

      if (results >= maxLength) {
        dispatch(slice.actions.noHasMore());
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getPost(title) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/post', {
        params: { title }
      });
      dispatch(slice.actions.getCartsuccess(response.data.post));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getRecentCarts(title) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get('/api/blog/carts/recent', {
        params: { title }
      });

      dispatch(slice.actions.getRecentCartsSuccess(response.data.recentCarts));
    } catch (error) {
      console.error(error);
      dispatch(slice.actions.hasError(error));
    }
  };
}
