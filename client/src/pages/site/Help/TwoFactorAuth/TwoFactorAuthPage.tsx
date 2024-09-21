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
} from "./TwoFactorAuthPage.styled";

const TwoFactorAuthPage: Component = () => {
  return (
    <Container>
      <Title>二段階認証の設定方法</Title>

      <Paragraph>
        二段階認証（2FA）は、アカウントのセキュリティを強化する重要な機能です。
        パスワードに加えて、別の認証方法を使用することで、
        不正アクセスからアカウントを保護します。
      </Paragraph>

      <Section>
        <SectionTitle>1. 二段階認証の有効化</SectionTitle>
        <StepList>
          <StepItem>アプリにログインし、設定画面を開く</StepItem>
          <StepItem>
            「セキュリティ」または「アカウント」セクションを見つける
          </StepItem>
          <StepItem>「二段階認証」または「2FA」オプションを選択</StepItem>
          <StepItem>「有効にする」をタップ</StepItem>
          <StepItem>現在のパスワードを入力して本人確認を行う</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>2. 認証方法の選択</SectionTitle>
        <Paragraph>以下の認証方法から選択できます：</Paragraph>
        <StepList>
          <StepItem>
            SMSによる認証コード
            <StepList>
              <StepItem>電話番号を入力</StepItem>
              <StepItem>受信したコードを入力して確認</StepItem>
            </StepList>
          </StepItem>
          <StepItem>
            認証アプリ（Google AuthenticatorやAuthy等）
            <StepList>
              <StepItem>認証アプリをインストール</StepItem>
              <StepItem>
                表示されたQRコードをスキャン、または秘密鍵を手動で入力
              </StepItem>
              <StepItem>認証アプリに表示されたコードを入力して確認</StepItem>
            </StepList>
          </StepItem>
          <StepItem>
            セキュリティキー（YubiKeyなど）
            <StepList>
              <StepItem>セキュリティキーをデバイスに接続</StepItem>
              <StepItem>画面の指示に従ってキーを登録</StepItem>
            </StepList>
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>3. バックアップコードの保存</SectionTitle>
        <StepList>
          <StepItem>
            二段階認証の設定完了後、バックアップコードが表示される
          </StepItem>
          <StepItem>
            これらのコードを安全な場所に保存する（印刷やパスワードマネージャーの使用を推奨）
          </StepItem>
          <StepItem>
            バックアップコードは、通常の認証方法が使用できない場合に使用する
          </StepItem>
        </StepList>
        <WarningBox>
          警告:
          バックアップコードを紛失すると、アカウントへのアクセスが困難になる可能性があります。
          必ず安全に保管してください。
        </WarningBox>
      </Section>

      <Section>
        <SectionTitle>4. 二段階認証の使用</SectionTitle>
        <StepList>
          <StepItem>通常のログイン画面でユーザー名とパスワードを入力</StepItem>
          <StepItem>次の画面で、選択した認証方法に応じたコードを入力</StepItem>
          <StepItem>SMSの場合：受信したコードを入力</StepItem>
          <StepItem>認証アプリの場合：アプリに表示されたコードを入力</StepItem>
          <StepItem>セキュリティキーの場合：キーを接続し、指示に従う</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. 二段階認証の管理</SectionTitle>
        <StepList>
          <StepItem>設定画面から二段階認証の設定にアクセス</StepItem>
          <StepItem>認証方法の変更や追加が可能</StepItem>
          <StepItem>
            バックアップコードの再生成も可能（古いコードは無効になります）
          </StepItem>
          <StepItem>
            必要に応じて二段階認証を無効化することもできる（推奨されません）
          </StepItem>
        </StepList>
      </Section>

      <Note>
        注意: 新しいデバイスでログインする際や、長期間ログインしていない場合は、
        二段階認証が要求されます。信頼できるデバイスとして登録することで、
        一定期間は二段階認証をスキップできる場合があります。
      </Note>

      <Paragraph>
        二段階認証の設定や使用について質問がある場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
        アカウントのセキュリティ強化をサポートいたします。
      </Paragraph>
    </Container>
  );
};

export default TwoFactorAuthPage;
