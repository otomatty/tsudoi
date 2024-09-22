import { Component, createSignal, createEffect } from "solid-js";
import { useAuth } from "../../../contexts/AuthContext";
import { supabase } from "../../../config/supabase";
import {
  Form,
  Input,
  TextArea,
  Button,
  ErrorMessage,
  SuccessMessage,
} from "./ProfileForm.styled";

const ProfileForm: Component = () => {
  const { user } = useAuth();
  const [username, setUsername] = createSignal("");
  const [displayName, setDisplayName] = createSignal("");
  const [bio, setBio] = createSignal("");
  const [error, setError] = createSignal<string | null>(null);
  const [success, setSuccess] = createSignal<string | null>(null);

  createEffect(async () => {
    if (user()) {
      const { data, error } = await supabase
        .from("profiles")
        .select("username, display_name, bio")
        .eq("id", user()?.id)
        .single();

      if (error) {
        console.error("プロフィール取得エラー:", error);
      } else if (data) {
        setUsername(data.username || "");
        setDisplayName(data.display_name || "");
        setBio(data.bio || "");
      }
    }
  });

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!user()) {
      setError("ユーザーが認証されていません。");
      return;
    }

    const updates = {
      id: user()?.id,
      username: username(),
      display_name: displayName(),
      bio: bio(),
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      console.error("プロフィール更新エラー:", error);
      setError("プロフィールの更新に失敗しました。");
    } else {
      setSuccess("プロフィールを更新しました。");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={username()}
        onInput={(e) => setUsername(e.currentTarget.value)}
        placeholder="ユーザー名"
        required
      />
      <Input
        type="text"
        value={displayName()}
        onInput={(e) => setDisplayName(e.currentTarget.value)}
        placeholder="表示名"
      />
      <TextArea
        value={bio()}
        onInput={(e) => setBio(e.currentTarget.value)}
        placeholder="自己紹介"
      />
      <Button type="submit">保存</Button>
      {error() && <ErrorMessage>{error()}</ErrorMessage>}
      {success() && <SuccessMessage>{success()}</SuccessMessage>}
    </Form>
  );
};

export default ProfileForm;
