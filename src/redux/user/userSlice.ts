import { createSlice } from "@reduxjs/toolkit";
import { UserApiResponse } from "../../types/userTypes";

const initialState = {
  status: false,
  user: {} as UserApiResponse,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.status = true;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = {};
      state.status = false;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser, clearUser, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;
