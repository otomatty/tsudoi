import { Component } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { useAuth } from "../../../contexts/AuthContext";
import { LogoutButtonStyled } from "./LogoutButton.styled";

const LogoutButton: Component = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      // ログアウト成功時にログインページにリダイレクト
      navigate("/login");
    } catch (error) {
      console.error("ログアウトエラー:", error);
      // エラー時のユーザーへのフィードバックを追加することをお勧めします
    }
  };

  return (
    <LogoutButtonStyled onClick={handleLogout}>ログアウト</LogoutButtonStyled>
  );
};

export default LogoutButton;
