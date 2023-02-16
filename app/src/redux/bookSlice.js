import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  loading: false,
  error: null,
};



export const booksFetch = createAsyncThunk('books/booksFetch', async () => {
  const response = await axios.get('http://localhost:7000/api/book');
  return response.data;
});


export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [booksFetch.pending]: (state) => {
      state.loading = true;
    },
    [booksFetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.books =action.payload.books;
      state.error = null;
    },
    [booksFetch.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  }
});

export default bookSlice.reducer;
