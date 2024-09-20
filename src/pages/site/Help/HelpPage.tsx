import { Component } from "solid-js";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  GuideList,
  GuideItem,
  GuideLink,
  ContactInfo,
} from "./HelpPage.styled";

const HelpPage: Component = () => {
  return (
    <Container>
      <Title>ヘルプセンター</Title>

      <Section>
        <SectionTitle>はじめに</SectionTitle>
        <GuideList>
          <GuideItem>
            <GuideLink href="/help/getting-started">
              サービスの使い方ガイド
            </GuideLink>
          </GuideItem>
          <GuideItem>
            <GuideLink href="/help/profile-management">
              プロフィールの編集と管理
            </GuideLink>
          </GuideItem>
          <GuideItem>
            <GuideLink href="/help/privacy-settings">
              プライバシー設定ガイド
            </GuideLink>
          </GuideItem>
        </GuideList>
      </Section>

      <Section>
        <SectionTitle>機能ガイド</SectionTitle>
        <GuideList>
          <GuideItem>
            <GuideLink href="/help/posting">投稿の作成と管理</GuideLink>
          </GuideItem>
          <GuideItem>
            <GuideLink href="/help/events">イベントの作成と参加</GuideLink>
          </GuideItem>
          <GuideItem>
            <GuideLink href="/help/messaging">
              メッセージング機能の使い方
            </GuideLink>
          </GuideItem>
          <GuideItem>
            <GuideLink href="/help/search-tips">
              検索機能の効果的な使い方
            </GuideLink>
          </GuideItem>
        </GuideList>
      </Section>

      <Section>
        <SectionTitle>トラブルシューティング</SectionTitle>
        <GuideList>
          <GuideItem>
            <GuideLink href="/help/login-issues">
              ログインできない場合
            </GuideLink>
          </GuideItem>
          <GuideItem>
            <GuideLink href="/help/post-visibility">
              投稿が表示されない場合
            </GuideLink>
          </GuideItem>
          <GuideItem>
            <GuideLink href="/help/notification-issues">
              通知が届かない場合
            </GuideLink>
          </GuideItem>
        </GuideList>
      </Section>

      <Section>
        <SectionTitle>アプリとウェブの違い</SectionTitle>
        <GuideList>
          <GuideItem>
            <GuideLink href="/help/app-web-differences">
              モバイルアプリとウェブ版の違い
            </GuideLink>
          </GuideItem>
        </GuideList>
      </Section>

      <Section>
        <SectionTitle>サポート連絡先</SectionTitle>
        <ContactInfo>
          <p>
            お問い合わせフォーム: <a href="/contact">こちら</a>
          </p>
          <p>サポート受付時間: 平日 9:00 - 18:00</p>
          <p>緊急連絡先: support@example.com</p>
        </ContactInfo>
      </Section>

      <Section>
        <SectionTitle>その他のリソース</SectionTitle>
        <GuideList>
          <GuideItem>
            <GuideLink href="/faq">よくある質問（FAQ）</GuideLink>
          </GuideItem>
          <GuideItem>
            <GuideLink href="/community-guidelines">
              コミュニティガイドライン
            </GuideLink>
          </GuideItem>
          <GuideItem>
            <GuideLink href="/terms">利用規約</GuideLink>
          </GuideItem>
          <GuideItem>
            <GuideLink href="/privacy">プライバシーポリシー</GuideLink>
          </GuideItem>
        </GuideList>
      </Section>
    </Container>
  );
};

export default HelpPage;
