import { Component, createEffect } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { supabase } from "../../config/supabase";

const Callback: Component = () => {
  const navigate = useNavigate();

  createEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        // 認証成功時にプロフィール設定ページにリダイレクト
        navigate("/profile-settings");
      } else {
        // 認証失敗時にログインページにリダイレクト
        navigate("/login");
      }
    });
  });

  return <div>認証中...</div>;
};

export default Callback;
