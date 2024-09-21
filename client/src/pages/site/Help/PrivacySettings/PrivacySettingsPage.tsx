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
} from "./PrivacySettingsPage.styled";

const PrivacySettingsPage: Component = () => {
  return (
    <Container>
      <Title>プライバシー設定ガイド</Title>

      <Paragraph>
        プライバシー設定を適切に行うことで、自分の情報をコントロールし、安心してサービスを利用できます。
        以下の手順に従って、あなたに合ったプライバシー設定を行いましょう。
      </Paragraph>

      <Section>
        <SectionTitle>1. プロフィールの公開範囲設定</SectionTitle>
        <StepList>
          <StepItem>「設定」ページから「プライバシー」タブを選択</StepItem>
          <StepItem>「プロフィールの公開範囲」セクションを探す</StepItem>
          <StepItem>公開範囲を選択（全体公開、友達のみ、カスタム）</StepItem>
          <StepItem>
            カスタム設定の場合、個別の項目（生年月日、メールアドレスなど）の公開範囲を調整
          </StepItem>
          <StepItem>「保存」ボタンをクリックして設定を反映</StepItem>
        </StepList>
        <Note>
          注意:
          プロフィールを非公開にすると、他のユーザーがあなたを見つけにくくなる可能性があります。
        </Note>
      </Section>

      <Section>
        <SectionTitle>2. 投稿の公開範囲設定</SectionTitle>
        <StepList>
          <StepItem>
            「設定」ページの「プライバシー」タブで「投稿のデフォルト公開範囲」を探す
          </StepItem>
          <StepItem>
            デフォルトの公開範囲を選択（全体公開、友達のみ、非公開）
          </StepItem>
          <StepItem>
            「過去の投稿を制限」オプションを確認し、必要に応じて有効化
          </StepItem>
          <StepItem>
            個別の投稿時に、その投稿の公開範囲を調整することも可能
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>3. 友達リストの管理</SectionTitle>
        <StepList>
          <StepItem>
            「設定」ページの「プライバシー」タブで「友達リスト」セクションを探す
          </StepItem>
          <StepItem>
            友達リストの公開範囲を選択（全体公開、友達のみ、自分のみ）
          </StepItem>
          <StepItem>特定の友達を非表示にするオプションを確認</StepItem>
          <StepItem>「保存」ボタンをクリックして設定を反映</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>4. 検索設定</SectionTitle>
        <StepList>
          <StepItem>
            「設定」ページの「プライバシー」タブで「検索とタグ付け」セクションを探す
          </StepItem>
          <StepItem>検索エンジンからのプロフィール表示を許可/拒否</StepItem>
          <StepItem>電話番号やメールアドレスによる検索を許可/拒否</StepItem>
          <StepItem>
            タグ付けの許可設定を調整（自動承認、承認後に表示、拒否）
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. ブロックとミュート</SectionTitle>
        <StepList>
          <StepItem>
            「設定」ページの「プライバシー」タブで「ブロックとミュート」セクションを探す
          </StepItem>
          <StepItem>ブロックしたユーザーのリストを確認・管理</StepItem>
          <StepItem>ミュートしたユーザーのリストを確認・管理</StepItem>
          <StepItem>
            新しくユーザーをブロックまたはミュートする場合は、そのユーザーのプロフィールページから操作可能
          </StepItem>
        </StepList>
        <Note>
          注意:
          ブロックされたユーザーはあなたのプロフィールや投稿を見ることができなくなります。
          ミュートされたユーザーの投稿は、あなたのフィードに表示されなくなります。
        </Note>
      </Section>

      <Paragraph>
        これらの設定を定期的に確認し、必要に応じて調整することをおすすめします。
        プライバシーに関する質問や懸念がある場合は、
        <a href="/help">ヘルプセンター</a>や<a href="/contact">サポート</a>
        にお問い合わせください。
      </Paragraph>
    </Container>
  );
};

export default PrivacySettingsPage;
