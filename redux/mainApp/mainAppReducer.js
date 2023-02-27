import { createSlice } from "@reduxjs/toolkit";

const mainAppSlice = createSlice({
  name: "mainApp",
  initialState: {},
  extraReducers: (builder) => {},
});

export const mainAppReducer = mainAppSlice.reducer;
