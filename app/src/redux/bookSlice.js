import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  status: null,
  error: false,
};

export const booksFetch = createAsyncThunk(
  "books/booksFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const res = await axios.get("http://localhost:7000/api/book");
      return res?.data.books;
    } catch (error) {
      return rejectWithValue("Oops, something went wrong"); 
    }
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
        const product = state.products.find((product) => product.id === action.payload.id);
        if (product) {
          product.quantity += action.payload.quantity;
        } else {
          state.products.push(action.payload);
        }
    },
  
  }, //handle action create
  extraReducers: {
    //handle action type
    [booksFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [booksFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.books = action.payload;
    },
    [booksFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});
export default bookSlice.reducer;
