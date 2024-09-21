import { Component } from "solid-js";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Paragraph,
  StepList,
  StepItem,
} from "./AccountSetupPage.styled";

const AccountSetupPage: Component = () => {
  return (
    <Container>
      <Title>アカウント設定ガイド</Title>

      <Section>
        <SectionTitle>1. プロフィール情報の編集</SectionTitle>
        <Paragraph>
          プロフィール情報を充実させることで、他のユーザーとの交流が活発になります。
        </Paragraph>
        <StepList>
          <StepItem>右上のメニューから「設定」を選択</StepItem>
          <StepItem>「プロフィール」タブをクリック</StepItem>
          <StepItem>
            各項目（名前、自己紹介、居住地など）を入力または編集
          </StepItem>
          <StepItem>プロフィール写真をアップロード</StepItem>
          <StepItem>「保存」ボタンをクリックして変更を反映</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>2. 通知設定の管理</SectionTitle>
        <Paragraph>
          必要な通知だけを受け取るようにカスタマイズしましょう。
        </Paragraph>
        <StepList>
          <StepItem>「設定」ページから「通知」タブを選択</StepItem>
          <StepItem>
            メール通知、プッシュ通知、アプリ内通知の設定を確認
          </StepItem>
          <StepItem>
            各種イベント（メッセージ、いいね、コメントなど）の通知をオン/オフ
          </StepItem>
          <StepItem>通知の頻度（即時、1日1回など）を選択</StepItem>
          <StepItem>「保存」ボタンをクリックして設定を完了</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>3. セキュリティ設定</SectionTitle>
        <Paragraph>
          アカウントのセキュリティを強化し、安全にサービスを利用しましょう。
        </Paragraph>
        <StepList>
          <StepItem>「設定」ページから「セキュリティ」タブを選択</StepItem>
          <StepItem>パスワードの変更（定期的な変更を推奨）</StepItem>
          <StepItem>二段階認証の設定（強く推奨）</StepItem>
          <StepItem>ログイン履歴の確認</StepItem>
          <StepItem>
            不審なアクティビティがある場合は、すぐにサポートに連絡
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>4. プライバシー設定</SectionTitle>
        <Paragraph>
          自分の情報をどこまで公開するか、細かく設定できます。
        </Paragraph>
        <StepList>
          <StepItem>「設定」ページから「プライバシー」タブを選択</StepItem>
          <StepItem>
            プロフィールの公開範囲を設定（全体公開、友達のみ、非公開など）
          </StepItem>
          <StepItem>投稿のデフォルト公開範囲を設定</StepItem>
          <StepItem>検索エンジンからのプロフィール表示を許可/拒否</StepItem>
          <StepItem>ブロックしたユーザーの管理</StepItem>
        </StepList>
      </Section>

      <Paragraph>
        これらの設定を適切に行うことで、より安全で快適にサービスを利用できます。
        設定について不明な点がある場合は、<a href="/help">ヘルプセンター</a>や
        <a href="/contact">サポート</a>にお問い合わせください。
      </Paragraph>
    </Container>
  );
};

export default AccountSetupPage;
