export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullname: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: User;
}
