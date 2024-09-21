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

      // サーバーサイドのユーザー登録エンドポイントを呼び出す
      const response = await fetch(
        "https://your-cloudflare-worker-url/register-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionData.session.access_token}`,
          },
          body: JSON.stringify({
            id: sessionData.session.user.id,
            email: sessionData.session.user.email,
            // その他必要なユーザー情報
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      // ログイン成功後の処理（例：ホームページへリダイレクト）
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
