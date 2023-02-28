import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, updateUser, userSignOut } from "./authOperation";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    stateChange: null,
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.user.displayName = payload.displayName;
    });
    builder.addCase(signIn.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });
    builder.addCase(userSignOut.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const authReducer = authSlice.reducer;
