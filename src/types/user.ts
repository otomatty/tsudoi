export type UserRole = "user" | "moderator" | "admin";

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  // その他の一般的なユーザー情報
}

// クライアントサイドでの使用のみを想定
export interface AuthenticatedUser extends User {
  token: string;
}

// サーバーサイドでの使用を想定
export interface UserWithRole extends User {
  role: UserRole;
}
