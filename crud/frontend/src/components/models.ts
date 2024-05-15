export interface User {
  id: number;
  fullname: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface UserForCreate {
  fullname: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface UserForLogin {
  email: string;
  password: string;
}

export interface ArticleForCreate {
  name: string;
  description: string;
  id: number;
}

export interface ArticleForUpdate {
  name: string;
  description: string;
  id: number;
  status: string;
}

export interface Article {
  id: number;
  name: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  user: User;
}

export interface ArticleForOne {
  id: number;
  name: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Articles {
  id: number;
  fullname: string;
  email: string;
  created_at: string;
  updated_at: string;
  things: Article,
}
