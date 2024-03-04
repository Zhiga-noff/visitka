export interface IUserLogin {
  email: string;
  password: string;
}
export interface IUserLoginResponse {
  version: string;
  result: {
    loginUser: {
      email: string;
      accessToken: string;
      refreshToken: string;
    };
  };
  errors: null;
}
