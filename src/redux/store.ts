import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch; // Define AppDispatch type
