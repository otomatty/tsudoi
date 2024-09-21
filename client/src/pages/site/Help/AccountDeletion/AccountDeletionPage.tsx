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
  WarningBox,
} from "./AccountDeletionPage.styled";

const AccountDeletionPage: Component = () => {
  return (
    <Container>
      <Title>アカウントの削除方法</Title>

      <WarningBox>
        警告:
        アカウントの削除は取り消すことができません。全てのデータが永久に失われます。
      </WarningBox>

      <Paragraph>
        アカウントを削除する前に、以下の点を確認してください：
      </Paragraph>

      <StepList>
        <StepItem>必要なデータをバックアップしましたか？</StepItem>
        <StepItem>サブスクリプションをキャンセルしましたか？</StepItem>
        <StepItem>他のサービスとのリンクを解除しましたか？</StepItem>
      </StepList>

      <Section>
        <SectionTitle>アカウント削除の手順</SectionTitle>
        <StepList>
          <StepItem>設定ページにアクセスする</StepItem>
          <StepItem>「アカウント」セクションを見つける</StepItem>
          <StepItem>「アカウントの削除」オプションを選択</StepItem>
          <StepItem>削除理由を選択（任意）</StepItem>
          <StepItem>パスワードを入力して本人確認を行う</StepItem>
          <StepItem>「アカウントを完全に削除する」ボタンをクリック</StepItem>
        </StepList>
        <Note>
          注意:
          セキュリティのため、アカウント削除の処理には数日かかる場合があります。
        </Note>
      </Section>

      <Section>
        <SectionTitle>削除後の影響</SectionTitle>
        <Paragraph>アカウントを削除すると、以下の影響があります：</Paragraph>
        <StepList>
          <StepItem>全ての個人情報が削除されます</StepItem>
          <StepItem>
            投稿、コメント、いいねなどのアクティビティが削除されます
          </StepItem>
          <StepItem>フォロワーとのつながりが失われます</StepItem>
          <StepItem>サブスクリプションが自動的にキャンセルされます</StepItem>
          <StepItem>
            同じメールアドレスで新しいアカウントを作成できなくなる場合があります
          </StepItem>
        </StepList>
      </Section>

      <Paragraph>
        アカウントの削除について質問がある場合は、削除を実行する前に
        <a href="/contact">サポートチーム</a>にお問い合わせください。
      </Paragraph>
    </Container>
  );
};

export default AccountDeletionPage;
