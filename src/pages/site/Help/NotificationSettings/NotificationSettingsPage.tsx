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
} from "./NotificationSettingsPage.styled";

const NotificationSettingsPage: Component = () => {
  return (
    <Container>
      <Title>通知設定の管理ガイド</Title>

      <Paragraph>
        通知設定を適切に管理することで、重要な情報を見逃さずに、不要な通知を減らすことができます。
        このガイドでは、通知設定のカスタマイズ方法を説明します。
      </Paragraph>

      <Section>
        <SectionTitle>1. 通知設定へのアクセス</SectionTitle>
        <StepList>
          <StepItem>アプリのホーム画面から「設定」をタップ</StepItem>
          <StepItem>「通知」または「通知設定」を選択</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>2. プッシュ通知の設定</SectionTitle>
        <StepList>
          <StepItem>「プッシュ通知」セクションを見つける</StepItem>
          <StepItem>全体のオン/オフを切り替える</StepItem>
          <StepItem>
            各種イベント（いいね、コメント、フォローなど）ごとに通知をカスタマイズ
          </StepItem>
        </StepList>
        <Note>
          注意: デバイスの設定でもアプリの通知を許可する必要があります。
        </Note>
      </Section>

      <Section>
        <SectionTitle>3. メール通知の設定</SectionTitle>
        <StepList>
          <StepItem>「メール通知」セクションを見つける</StepItem>
          <StepItem>全体のオン/オフを切り替える</StepItem>
          <StepItem>各種イベントごとにメール通知をカスタマイズ</StepItem>
          <StepItem>
            メール通知の頻度を設定（即時、1日1回のダイジェストなど）
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>4. アプリ内通知の設定</SectionTitle>
        <StepList>
          <StepItem>「アプリ内通知」セクションを見つける</StepItem>
          <StepItem>表示したい通知の種類を選択</StepItem>
          <StepItem>通知センターでの表示順序をカスタマイズ</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. 特定のユーザーやグループの通知設定</SectionTitle>
        <StepList>
          <StepItem>
            ユーザーのプロフィールページまたはグループページにアクセス
          </StepItem>
          <StepItem>「通知設定」または類似のオプションを見つける</StepItem>
          <StepItem>そのユーザーやグループからの通知をカスタマイズ</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>6. サイレントモードの設定</SectionTitle>
        <StepList>
          <StepItem>
            「サイレントモード」または「おやすみモード」設定を見つける
          </StepItem>
          <StepItem>通知を停止する時間帯を設定</StepItem>
          <StepItem>
            例外を設定（特定の連絡先からの通知は許可するなど）
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>7. 通知の管理のベストプラクティス</SectionTitle>
        <StepList>
          <StepItem>本当に必要な通知だけを有効にする</StepItem>
          <StepItem>定期的に通知設定を見直し、調整する</StepItem>
          <StepItem>重要な連絡先やグループには個別の通知設定を行う</StepItem>
          <StepItem>集中が必要な時間帯にはサイレントモードを活用する</StepItem>
        </StepList>
      </Section>

      <Paragraph>
        これらの設定を適切に行うことで、効率的に情報を受け取りながら、
        不要な中断を最小限に抑えることができます。設定について不明な点がある場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
      </Paragraph>
    </Container>
  );
};

export default NotificationSettingsPage;
