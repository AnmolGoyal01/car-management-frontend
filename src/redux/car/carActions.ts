import { Dispatch } from "redux";
import carService from "../../services/carServices";
import { setAllCars, setUserCars, setLoading, setError } from "./carSlice";
import { CarApiResponse, CarPayload } from "../../types/carTypes";

export const getAllCars = ({
  page = 1,
  limit = 10,
  search = "",
  sortBy = "createdAt",
  sortOrder = "desc",
}: {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      const data: CarApiResponse | null = await carService.getAllCars({
        page,
        limit,
        search,
        sortBy,
        sortOrder,
      });
      if (data) {
        dispatch(setAllCars(data.cars));
      }
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
};

export const getUserCars = ({
  page = 1,
  limit = 10,
  search = "",
  sortBy = "createdAt",
  sortOrder = "desc",
}: {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      const data: CarApiResponse | null = await carService.getUserCars({
        page,
        limit,
        search,
        sortBy,
        sortOrder,
      });
      if (data) {
        dispatch(setUserCars(data.cars));
      }
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
};

export const getCarById = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      const car = await carService.getCarById(id);
      if (car) {
        return car;
      }
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
};

export const deleteCar = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      await carService.deleteCar(id);
      dispatch<any>(getAllCars({}));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
};

export const updateCar = (id: string, carData: Partial<CarPayload>) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      const updatedCar = await carService.updateCar(id, carData);
      if (updatedCar) {
        dispatch<any>(getUserCars({}));
      }
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
};

export const addCar = (carData: CarPayload) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      const newCar = await carService.addCar(carData);
      if (newCar) {
        dispatch<any>(getUserCars({}));
      }
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
};
