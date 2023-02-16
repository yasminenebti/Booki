import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";


const initialState = {
    token: localStorage.getItem("token"),
    loading: false,
    user: null,
    error: false,
};

export const authSet = createAsyncThunk('user/authSet', async () => {
    const token = localStorage.getItem("token");
    if (token) {
        setAuthToken(token);
      }
    const response = await axios.get('http://localhost:7000/api/user/authcheck');
    return response.data;
  });

  
  
  
  export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: {
      [authSet.pending]: (state) => {
        state.loading = true;
      },
      [authSet.fulfilled]: (state, action) => {
        state.loading = false;
        state.user =action.payload.user;
        state.error = null;
      },
      [authSet.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
    }
  });
  
  export default authSlice.reducer;

