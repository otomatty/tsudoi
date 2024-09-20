import { Component } from "solid-js";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Paragraph,
  StepList,
  StepItem,
  Note,
} from "./LoginIssuesPage.styled";

const LoginIssuesPage: Component = () => {
  return (
    <Container>
      <Title>ログインの問題解決ガイド</Title>

      <Paragraph>
        ログインに問題がある場合、このガイドを参考に解決を試みてください。
        一般的な問題とその解決方法を以下に示します。
      </Paragraph>

      <Section>
        <SectionTitle>1. パスワードを忘れた場合</SectionTitle>
        <StepList>
          <StepItem>
            ログインページの「パスワードを忘れた方」リンクをクリック
          </StepItem>
          <StepItem>登録したメールアドレスを入力</StepItem>
          <StepItem>「パスワードリセット」ボタンをクリック</StepItem>
          <StepItem>
            メールに記載されたリンクをクリックし、新しいパスワードを設定
          </StepItem>
          <StepItem>新しいパスワードでログインを試みる</StepItem>
        </StepList>
        <Note>
          注意:
          パスワードリセットのメールが届かない場合は、迷惑メールフォルダも確認してください。
        </Note>
      </Section>

      <Section>
        <SectionTitle>2. アカウントがロックされた場合</SectionTitle>
        <StepList>
          <StepItem>
            ログイン試行回数が多すぎると、セキュリティのためアカウントがロックされることがあります
          </StepItem>
          <StepItem>
            通常、一定時間（例：30分）経過後に自動的にロックが解除されます
          </StepItem>
          <StepItem>ロック解除後、正しいパスワードでログインを試みる</StepItem>
          <StepItem>
            ロックが解除されない場合は、サポートチームに連絡してください
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>3. 二段階認証の問題</SectionTitle>
        <StepList>
          <StepItem>二段階認証コードが届かない場合、以下を確認：</StepItem>
          <StepItem>登録した電話番号やメールアドレスが正しいか確認</StepItem>
          <StepItem>SMSやメールの受信設定を確認</StepItem>
          <StepItem>バックアップコードを使用してログイン</StepItem>
          <StepItem>
            それでもログインできない場合は、サポートチームに連絡
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>4. ブラウザの問題</SectionTitle>
        <StepList>
          <StepItem>ブラウザのキャッシュとクッキーをクリア</StepItem>
          <StepItem>ブラウザを最新バージョンにアップデート</StepItem>
          <StepItem>別のブラウザでログインを試みる</StepItem>
          <StepItem>
            プライベートブラウジングモード（シークレットモード）でログインを試みる
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. アカウントが見つからない場合</SectionTitle>
        <StepList>
          <StepItem>
            入力したメールアドレスやユーザー名が正しいか再確認
          </StepItem>
          <StepItem>
            別のメールアドレスでアカウントを作成した可能性がないか確認
          </StepItem>
          <StepItem>アカウントが削除されていないか確認</StepItem>
          <StepItem>
            それでもアカウントが見つからない場合は、サポートチームに連絡
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>6. その他の問題</SectionTitle>
        <Paragraph>
          上記の方法で解決しない場合や、他の問題がある場合は、以下の情報を添えて
          サポートチームにお問い合わせください：
        </Paragraph>
        <StepList>
          <StepItem>使用しているデバイスとOSのバージョン</StepItem>
          <StepItem>ブラウザの種類とバージョン</StepItem>
          <StepItem>エラーメッセージの内容（表示される場合）</StepItem>
          <StepItem>問題が発生した日時と状況の詳細</StepItem>
        </StepList>
      </Section>

      <Paragraph>
        ログインに関する詳細な質問や問題が解決しない場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
        迅速に対応いたします。
      </Paragraph>
    </Container>
  );
};

export default LoginIssuesPage;
