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
} from "./TroubleshootingPage.styled";

const TroubleshootingPage: Component = () => {
  return (
    <Container>
      <Title>アプリのトラブルシューティング</Title>

      <Paragraph>
        アプリの使用中に問題が発生した場合、このガイドを参考に解決を試みてください。
        一般的な問題とその解決方法を以下に示します。
      </Paragraph>

      <Section>
        <SectionTitle>1. アプリがクラッシュする場合</SectionTitle>
        <StepList>
          <StepItem>アプリを完全に終了し、再起動する</StepItem>
          <StepItem>デバイスを再起動する</StepItem>
          <StepItem>アプリを最新バージョンにアップデートする</StepItem>
          <StepItem>十分な空き容量があることを確認する</StepItem>
          <StepItem>アプリを再インストールする</StepItem>
        </StepList>
        <Note>
          注意:
          アプリを再インストールする前に、重要なデータをバックアップしてください。
        </Note>
      </Section>

      <Section>
        <SectionTitle>2. アプリの動作が遅い場合</SectionTitle>
        <StepList>
          <StepItem>バックグラウンドで実行中の他のアプリを終了する</StepItem>
          <StepItem>デバイスのキャッシュをクリアする</StepItem>
          <StepItem>アプリ内のキャッシュとデータをクリアする</StepItem>
          <StepItem>デバイスの空き容量を増やす</StepItem>
          <StepItem>Wi-Fi接続を確認し、必要に応じて再接続する</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>3. ログインできない場合</SectionTitle>
        <StepList>
          <StepItem>インターネット接続を確認する</StepItem>
          <StepItem>ユーザー名とパスワードが正しいか確認する</StepItem>
          <StepItem>パスワードをリセットする</StepItem>
          <StepItem>アカウントがロックされていないか確認する</StepItem>
          <StepItem>別のデバイスでログインを試みる</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>4. 通知が届かない場合</SectionTitle>
        <StepList>
          <StepItem>デバイスの通知設定を確認する</StepItem>
          <StepItem>アプリ内の通知設定を確認する</StepItem>
          <StepItem>
            バッテリー節約モードがオンになっていないか確認する
          </StepItem>
          <StepItem>アプリを再起動する</StepItem>
          <StepItem>デバイスを再起動する</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. 画像や動画がロードされない場合</SectionTitle>
        <StepList>
          <StepItem>インターネット接続を確認する</StepItem>
          <StepItem>アプリを再起動する</StepItem>
          <StepItem>デバイスのストレージ容量を確認する</StepItem>
          <StepItem>アプリのキャッシュをクリアする</StepItem>
          <StepItem>
            デバイスの日付と時刻が正しく設定されているか確認する
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
          <StepItem>デバイスの種類とOSのバージョン</StepItem>
          <StepItem>アプリのバージョン</StepItem>
          <StepItem>問題の詳細な説明</StepItem>
          <StepItem>問題が発生した日時と状況</StepItem>
          <StepItem>
            エラーメッセージのスクリーンショット（表示される場合）
          </StepItem>
        </StepList>
      </Section>

      <Paragraph>
        トラブルシューティングについて質問がある場合や、問題が解決しない場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
        迅速に対応いたします。
      </Paragraph>
    </Container>
  );
};

export default TroubleshootingPage;
