import { Dispatch } from "redux";
import carService from "../../services/carServices";
import { setAllCars, setUserCars, setLoading, setError } from "./carSlice";
import { CarPayload } from "../../types/carTypes";

class CarActions {
  static getAllCars = ({
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
        const data = await carService.getAllCars({
          page,
          limit,
          search,
          sortBy,
          sortOrder,
        });
        console.log(data?.data);
        if (data) {
          dispatch(setAllCars(data.data));
        }
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };
  };

  static getUserCars = ({
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
        const data = await carService.getUserCars({
          page,
          limit,
          search,
          sortBy,
          sortOrder,
        });
        if (data) {
          dispatch(setUserCars(data.data));
        }
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };
  };

  static getCarById = (id: string) => {
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

  static deleteCar = (id: string) => {
    return async (dispatch: Dispatch) => {
      dispatch(setLoading());
      try {
        await carService.deleteCar(id);
        dispatch<any>(CarActions.getAllCars({})); // Call getAllCars after delete
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };
  };

  static updateCar = (id: string, carData: Partial<CarPayload>) => {
    return async (dispatch: Dispatch) => {
      dispatch(setLoading());
      try {
        const updatedCar = await carService.updateCar(id, carData);
        if (updatedCar) {
          dispatch<any>(CarActions.getUserCars({})); // Call getUserCars after update
        }
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };
  };

  static addCar = (carData: CarPayload) => {
    return async (dispatch: Dispatch) => {
      dispatch(setLoading());
      try {
        await carService.addCar(carData);
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };
  };
}

export default CarActions;
