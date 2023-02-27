import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducer";
import { mainAppReducer } from "./mainApp/mainAppReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: mainAppReducer,
  },
});
