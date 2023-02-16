import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [
    {
      bookId: "",
      quantity: 0,
      price: 0,
      name: "",
      author: "",
      image: "",
    },
  ],
  total: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartPending: (state) => {
      state.loading = true;
    },
    getCartSuccess: (state, action) => {
      state.books = action.payload.books;
      state.total += action.payload.total;
      state.loading = false;
      state.error = null;
    },
    getCartTotal: (state, action) => {
      state.total = action.payload;

      state.loading = false;
      state.error = null;
    },
    getCartFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCartPending, getCartSuccess, getCartFailure } =
  cartSlice.actions;

export const addToCart = (bookId) => {
  return async (dispatch) => {
    try {
      dispatch(getCartPending());
      const response = await axios.post("http://localhost:7000/api/cart", {
        bookId,
      });
      dispatch(getCartSuccess(response.data.cart));
      console.log(response.data.cart);
    } catch (error) {
      dispatch(getCartFailure(error.message));
    }
  };
};

export const getCard = () => {
  return async (dispatch) => {
    try {
      dispatch(getCartPending());
      const response = await axios.get(`http://localhost:7000/api/cart`);
      dispatch(getCartSuccess(response.data.cart));
    } catch (error) {
      dispatch(getCartFailure(error.message));
    }
  };
};

export default cartSlice.reducer;
