// export interface UserState {
//   _id: string;
//   email: string;
// }
export interface UserState {
  _id?: string
  email?: string;
  password?: string;
  confirmPassword?: string;
};

export interface ErrorState {
  status: string;
  originalStatus: number;
  data?: {
    message: string;
  };
  error?: string;
}

export interface AuthStateError {
  status: string;
  originalStatus: number;
  data: string;
  error: string;
}
