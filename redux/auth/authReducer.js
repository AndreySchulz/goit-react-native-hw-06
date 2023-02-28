import { createSlice } from "@reduxjs/toolkit";
import {
  signUp,
  signIn,
  updateUser,
  userSignOut,
  authState,
} from "./authOperation";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    stateChange: null,
  },
  reducers: {
    refreshState: (state, action) => {
      console.log(action);
      // state.user = payload;
    },
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
    builder.addCase(authState.fulfilled, (state, { payload }) => {
      // console.log(payload);
      // state.user = payload;
    });
  },
});

export const authReducer = authSlice.reducer;
export const { refreshState } = authSlice.actions;
