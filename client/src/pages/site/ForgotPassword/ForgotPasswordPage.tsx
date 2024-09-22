import { Component, createSignal } from "solid-js";
import { useAuth } from "../../../contexts/AuthContext";
import {
  Container,
  Form,
  Input,
  Button,
  Message,
} from "./ForgotPassword.styledPage";

const ForgotPassword: Component = () => {
  const [email, setEmail] = createSignal("");
  const [isLoading, setIsLoading] = createSignal(false);
  const [message, setMessage] = createSignal<string | null>(null);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      await resetPassword(email());
      setMessage(
        "パスワードリセットのメールを送信しました。メールをご確認ください。"
      );
    } catch (error) {
      console.error("パスワードリセットエラー:", error);
      setMessage("パスワードリセットに失敗しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h1>パスワードをお忘れですか？</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email()}
          onInput={(e) => setEmail(e.currentTarget.value)}
          placeholder="メールアドレス"
          required
        />
        <Button type="submit" disabled={isLoading()}>
          {isLoading() ? "送信中..." : "リセットリンクを送信"}
        </Button>
      </Form>
      {message() && <Message>{message()}</Message>}
    </Container>
  );
};

export default ForgotPassword;
