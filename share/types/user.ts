export type UserRole = "user" | "moderator" | "admin";

// アプリケーション内で使用するインターフェース（キャメルケース）
export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  role: UserRole;
}

// データベースとの通信用インターフェース（スネークケース）
export interface DatabaseUser {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
  role: UserRole;
}

// クライアントサイドでの使用のみを想定
export interface AuthenticatedUser extends User {
  token: string;
}

// DatabaseUser を User に変換する関数
export function convertDatabaseUser(dbUser: DatabaseUser): User {
  return {
    id: dbUser.id,
    username: dbUser.username,
    email: dbUser.email,
    firstName: dbUser.first_name,
    lastName: dbUser.last_name,
    createdAt: new Date(dbUser.created_at),
    updatedAt: new Date(dbUser.updated_at),
    role: dbUser.role,
  };
}

// User を DatabaseUser に変換する関数（必要に応じて）
export function convertToDatabaseUser(user: User): DatabaseUser {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    first_name: user.firstName,
    last_name: user.lastName,
    created_at: user.createdAt.toISOString(),
    updated_at: user.updatedAt.toISOString(),
    role: user.role,
  };
}
