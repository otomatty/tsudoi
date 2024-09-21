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
} from "./PostVisibilityPage.styled";

const PostVisibilityPage: Component = () => {
  return (
    <Container>
      <Title>投稿が表示されない場合の対処方法</Title>

      <Paragraph>
        投稿が表示されない問題は、様々な要因で発生する可能性があります。
        このガイドでは、考えられる原因と解決方法を説明します。
      </Paragraph>

      <Section>
        <SectionTitle>1. 自分の投稿が表示されない場合</SectionTitle>
        <StepList>
          <StepItem>
            投稿の公開設定を確認する（非公開になっていないか）
          </StepItem>
          <StepItem>
            投稿が承認待ちでないか確認する（一部のコミュニティでは投稿に承認が必要な場合があります）
          </StepItem>
          <StepItem>投稿がガイドラインに違反していないか確認する</StepItem>
          <StepItem>ページをリフレッシュしてみる</StepItem>
          <StepItem>アプリを再起動してみる</StepItem>
        </StepList>
        <Note>
          注意:
          投稿が削除された場合、通知が送られることがあります。通知を確認してください。
        </Note>
      </Section>

      <Section>
        <SectionTitle>2. 他のユーザーの投稿が表示されない場合</SectionTitle>
        <StepList>
          <StepItem>
            フィルター設定を確認する（特定のキーワードやユーザーをミュートしていないか）
          </StepItem>
          <StepItem>
            ブロック設定を確認する（誤ってユーザーをブロックしていないか）
          </StepItem>
          <StepItem>
            フォロー状態を確認する（フォローが解除されていないか）
          </StepItem>
          <StepItem>インターネット接続を確認する</StepItem>
          <StepItem>アプリを最新バージョンにアップデートする</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>
          3. 特定のコミュニティの投稿が表示されない場合
        </SectionTitle>
        <StepList>
          <StepItem>
            コミュニティのメンバーシップ状態を確認する（退会していないか）
          </StepItem>
          <StepItem>
            コミュニティの設定を確認する（非公開になっていないか）
          </StepItem>
          <StepItem>コミュニティの通知設定を確認する</StepItem>
          <StepItem>コミュニティの管理者に問い合わせる</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>4. タイムラインの表示問題</SectionTitle>
        <StepList>
          <StepItem>
            タイムラインの表示設定を確認する（最新順か、アルゴリズム順か）
          </StepItem>
          <StepItem>キャッシュとデータをクリアしてみる</StepItem>
          <StepItem>別のデバイスでログインして確認してみる</StepItem>
          <StepItem>
            一時的なサーバーの問題の可能性があるため、しばらく待ってから再度確認する
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. アカウントの制限</SectionTitle>
        <Paragraph>
          ガイドライン違反などにより、アカウントに一時的な制限がかかっている可能性があります。
        </Paragraph>
        <StepList>
          <StepItem>通知やメールで制限に関する連絡がないか確認する</StepItem>
          <StepItem>アカウント設定で制限状態を確認する</StepItem>
          <StepItem>制限がある場合、指示に従って解除手続きを行う</StepItem>
          <StepItem>
            不明な点がある場合は、サポートチームに問い合わせる
          </StepItem>
        </StepList>
      </Section>

      <Paragraph>
        上記の方法を試しても問題が解決しない場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
        その際、以下の情報を添えていただくとスムーズに対応できます：
      </Paragraph>
      <StepList>
        <StepItem>使用しているデバイスとOSのバージョン</StepItem>
        <StepItem>アプリのバージョン</StepItem>
        <StepItem>問題が発生した日時と状況の詳細</StepItem>
        <StepItem>表示されない投稿の具体的な例（可能な場合）</StepItem>
      </StepList>
    </Container>
  );
};

export default PostVisibilityPage;
