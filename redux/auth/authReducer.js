import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "andrey",
    id: null,
  },
  extraReducers: (builder) => {},
});

export const authReducer = authSlice.reducer;
