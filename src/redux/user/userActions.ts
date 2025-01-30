import { Dispatch } from "redux";
import userService from "../../services/userServices";
import { setUser, clearUser, setLoading, setError } from "./userSlice";
import { UserRegisterPayload } from "../../types/userTypes";

class UserActions {
  static loginUser = ({
    identifier,
    password,
  }: {
    identifier: string;
    password: string;
  }) => {
    return async (dispatch: Dispatch) => {
      dispatch(setLoading());
      try {
        const user = await userService.loginUser({ identifier, password });
        dispatch(setUser(user));
        return true;
      } catch (error: any) {
        dispatch(setError(error.message));
        return false;
      }
    };
  };

  static logoutUser = () => {
    return async (dispatch: Dispatch) => {
      try {
        userService.logoutUser();
        dispatch(clearUser());
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };
  };

  static registerUser = (userData: UserRegisterPayload) => {
    return async (dispatch: Dispatch) => {
      dispatch(setLoading());
      try {
        const newUser = await userService.registerUser(userData);
        dispatch(setUser(newUser));
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };
  };

  static getCurrentUser = () => {
    return async (dispatch: Dispatch) => {
      dispatch(setLoading());
      try {
        const currentUser = await userService.getCurrentUser();
        if (!currentUser) {
          this.logoutUser()(dispatch);
          return;
        }
        dispatch(setUser(currentUser));
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };
  };
}

export default UserActions;
