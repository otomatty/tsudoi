import { Component } from "solid-js";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Paragraph,
  StepList,
  StepItem,
} from "./GettingStartedPage.styled";

const GettingStartedPage: Component = () => {
  return (
    <Container>
      <Title>サービスの使い方ガイド</Title>

      <Section>
        <SectionTitle>1. アカウントの作成</SectionTitle>
        <Paragraph>
          まずは、アカウントを作成してサービスを利用開始しましょう。
        </Paragraph>
        <StepList>
          <StepItem>トップページの「新規登録」ボタンをクリック</StepItem>
          <StepItem>
            必要な情報（ユーザー名、メールアドレス、パスワード）を入力
          </StepItem>
          <StepItem>利用規約とプライバシーポリシーに同意</StepItem>
          <StepItem>「アカウント作成」ボタンをクリック</StepItem>
          <StepItem>
            確認メールを受信し、メール内のリンクをクリックして認証を完了
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>2. プロフィールの設定</SectionTitle>
        <Paragraph>
          アカウント作成後、プロフィールを設定して自分らしさを表現しましょう。
        </Paragraph>
        <StepList>
          <StepItem>
            ログイン後、右上のメニューから「プロフィール設定」を選択
          </StepItem>
          <StepItem>プロフィール写真をアップロード</StepItem>
          <StepItem>自己紹介文を入力</StepItem>
          <StepItem>興味のあるカテゴリーやタグを選択</StepItem>
          <StepItem>「保存」ボタンをクリックして設定を完了</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>3. 地域の選択</SectionTitle>
        <Paragraph>
          あなたが主に活動する地域を選択し、関連する情報やコミュニティを見つけましょう。
        </Paragraph>
        <StepList>
          <StepItem>「設定」ページから「地域設定」を選択</StepItem>
          <StepItem>都道府県と市区町村を選択</StepItem>
          <StepItem>必要に応じて、複数の地域を追加</StepItem>
          <StepItem>「保存」ボタンをクリックして設定を完了</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>4. コミュニティへの参加</SectionTitle>
        <Paragraph>
          興味のあるコミュニティに参加して、地域の人々と交流を始めましょう。
        </Paragraph>
        <StepList>
          <StepItem>「コミュニティ」ページを開く</StepItem>
          <StepItem>興味のあるカテゴリーやキーワードで検索</StepItem>
          <StepItem>コミュニティの詳細ページを確認</StepItem>
          <StepItem>
            「参加する」ボタンをクリックしてコミュニティに参加
          </StepItem>
          <StepItem>コミュニティのルールを確認し、投稿や会話に参加</StepItem>
        </StepList>
      </Section>

      <Paragraph>
        これで基本的な使い方は完了です。さらに詳しい機能や設定については、
        各機能のガイドページをご覧ください。困ったことがあれば、
        <a href="/help">ヘルプセンター</a>や
        <a href="/faq">よくある質問（FAQ）</a>
        もご活用ください。
      </Paragraph>
    </Container>
  );
};

export default GettingStartedPage;
