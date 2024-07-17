export interface Product {
  _id?: string;
  name: string;
  price: number;
  description?: string;
  thumbnail?: string;
}
export interface User {
  name: string;
  email: string;
  role: string | undefined;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface AuthState {
  userInfo: User | object;
  loading: boolean;
  isAuth: boolean;
  isAdmin: boolean;
}
