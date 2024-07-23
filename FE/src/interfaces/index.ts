export interface Product {
  _id: string | undefined;
  title: string;
  price: number;
  description?: string;
  thumbnail?: string;
  categoryId: string;
}
export interface Category {
  _id?: string | undefined;
  title: string;
  slug?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
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
