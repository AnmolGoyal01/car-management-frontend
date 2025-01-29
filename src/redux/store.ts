import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./user/userSlice";
import carReducer from "./car/carSlice";

export const store = configureStore({
  reducer: {
    user: authReducer,
    cars: carReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
