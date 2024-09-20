import { Component } from "solid-js";
import { supabase } from "../../../config/supabase";
import { GoogleButton } from "./GoogleLoginButton.styled";

const GoogleLoginButton: Component = () => {
  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;

      // ログイン成功後にセッション情報を取得
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();
      if (sessionError || !sessionData.session) {
        throw new Error("Failed to get session");
      }

      // ログイン成功後に一時的な管理者登録エンドポイントを呼び出す
      const response = await fetch(
        "https://your-cloudflare-worker-url/set-temp-admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionData.session.access_token}`, // ログインしたユーザーのトークンを使用
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        console.error("Failed to set temporary admin role:", data.error);
      } else {
        console.log("Temporary admin role set successfully:", data.message);
      }

      // ログイン成功後の処理（例：ホームページへリダイレクト）
      // リダイレクト後にユーザー情報を取得する
    } catch (error) {
      console.error("Googleログインエラー:", error);
      // エラー処理（例：エラーメッセージの表示）
    }
  };

  return (
    <GoogleButton onClick={handleGoogleLogin}>Googleでログイン</GoogleButton>
  );
};

export default GoogleLoginButton;
