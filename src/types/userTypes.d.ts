export interface IUser {
  _id: string;
  userName: string;
  fullName: string;
  email: string;
}

export interface UserLoginResponse {
  user: IUser;
}

export interface UserRegisterPayload {
  userName: string;
  fullName: string;
  email: string;
  password: string;
}
