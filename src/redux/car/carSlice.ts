import { createSlice } from "@reduxjs/toolkit";
import { CarApiResponse } from "../../types/carTypes";

const initialState = {
  allCars: {} as CarApiResponse,
  userCars: {} as CarApiResponse,
  status: false,
  error: null,
  loading: false,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setAllCars: (state, action) => {
      state.allCars = action.payload;
      state.status = true;
      state.loading = false;
    },
    setUserCars: (state, action) => {
      state.userCars = action.payload;
      state.status = true;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearAllCars: (state) => {
      state.allCars = { cars: [], totalCars: 0, totalPages: 0, currentPage: 0 };
      state.status = false;
      state.loading = false;
      state.error = null;
    },
    clearUserCars: (state) => {
      state.userCars = {
        cars: [],
        totalCars: 0,
        totalPages: 0,
        currentPage: 0,
      };
      state.status = false;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setAllCars,
  setUserCars,
  setLoading,
  setError,
  clearAllCars,
  clearUserCars,
} = carSlice.actions;

export default carSlice.reducer;
