import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./redux/bookSlice";
import cartReducer from "./redux/cartSlice";

import authReducer, { authSet } from "./redux/authSlice";
import setAuthToken from "./utils/setAuthToken";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    books: booksReducer,

    auth: authReducer,
  },
});

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
store.dispatch(authSet());
