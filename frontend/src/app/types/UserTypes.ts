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

export interface ErrorStateRoomAdd {
  status: string;
  data: string;
}

export interface AuthStateError {
  status: string;
  originalStatus: number;
  data: string;
  error: string;
}

export interface ProductFormInputs {
  name: string;
  image: FileList;
  category: string;
  description: string;
  rating: number;
  price: number;
  mainRoom: boolean;
}


export interface RoomInfo {
  _id: string
  name: string
  image: string
  category: string
  description: string
  rating: number
  price: number
  createdAt: string
  updatedAt: string
  __v: number
  mainRoom: string
}
