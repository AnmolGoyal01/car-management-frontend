import axiosInstance from "../utils/axiosInstance";
import { extractErrorMessage } from "../utils/errorHandler";
import {
  IUser,
  UserLoginResponse,
  UserRegisterPayload,
} from "../types/userTypes";

class UserService {
  private api = "/user";

  async getCurrentUser(): Promise<IUser | null> {
    try {
      const response = await axiosInstance.get<IUser>(`${this.api}/me`);
      return response.data;
    } catch (error) {
      throw new Error(extractErrorMessage(error));
    }
  }

  async loginUser({
    identifier,
    password,
  }: {
    identifier: string;
    password: string;
  }): Promise<UserLoginResponse | null> {
    try {
      const payload = identifier.includes("@")
        ? { email: identifier, password }
        : { userName: identifier, password };

      const response = await axiosInstance.post<UserLoginResponse>(
        `${this.api}/login`,
        payload
      );
      return response.data;
    } catch (error) {
      throw new Error(extractErrorMessage(error));
    }
  }

  async logoutUser(): Promise<boolean> {
    try {
      await axiosInstance.post(`${this.api}/logout`);
      return true;
    } catch (error) {
      throw new Error(extractErrorMessage(error));
    }
  }

  async registerUser(
    data: UserRegisterPayload
  ): Promise<UserLoginResponse | null> {
    try {
      const response = await axiosInstance.post<UserLoginResponse>(
        `${this.api}/register`,
        data
      );
      if (response)
        return this.loginUser({
          identifier: data.email,
          password: data.password,
        });
      else return null;
    } catch (error) {
      throw new Error(extractErrorMessage(error));
    }
  }
}

export default new UserService();
