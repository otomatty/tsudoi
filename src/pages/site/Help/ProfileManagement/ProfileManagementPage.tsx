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
  TipBox,
} from "./ProfileManagementPage.styled";

const ProfileManagementPage: Component = () => {
  return (
    <Container>
      <Title>プロフィールの編集と管理</Title>

      <Paragraph>
        プロフィールは、他のユーザーにあなたを知ってもらうための重要な要素です。
        ここでは、プロフィールの編集方法や効果的な管理方法について説明します。
      </Paragraph>

      <Section>
        <SectionTitle>1. プロフィール編集画面へのアクセス</SectionTitle>
        <StepList>
          <StepItem>アプリまたはウェブサイトにログインする</StepItem>
          <StepItem>右上のプロフィールアイコンをクリック</StepItem>
          <StepItem>「プロフィールを編集」または「設定」を選択</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>2. 基本情報の更新</SectionTitle>
        <StepList>
          <StepItem>
            プロフィール写真：「写真を変更」をクリックし、新しい画像をアップロード
          </StepItem>
          <StepItem>名前：表示名を入力（実名でもニックネームでも可）</StepItem>
          <StepItem>自己紹介：簡潔で魅力的な自己紹介文を記入</StepItem>
          <StepItem>場所：居住地や活動拠点を入力（任意）</StepItem>
          <StepItem>
            ウェブサイト：個人サイトやブログのURLを追加（任意）
          </StepItem>
        </StepList>
        <TipBox>
          ヒント：プロフィール写真は、顔がはっきり見える明るい画像を選びましょう。
          自己紹介は定期的に更新し、最新の情報を反映させることをおすすめします。
        </TipBox>
      </Section>

      <Section>
        <SectionTitle>3. プライバシー設定の調整</SectionTitle>
        <StepList>
          <StepItem>
            「プライバシー」または「セキュリティ」セクションを見つける
          </StepItem>
          <StepItem>
            プロフィールの公開範囲を設定（全員公開、フォロワーのみ、非公開など）
          </StepItem>
          <StepItem>
            検索可能性の設定（メールアドレスや電話番号での検索を許可するかどうか）
          </StepItem>
          <StepItem>
            タグ付けの設定（他のユーザーからのタグ付けを許可するかどうか）
          </StepItem>
        </StepList>
        <Note>
          プライバシー設定は、あなたの快適性とセキュリティのバランスを取るために重要です。
          定期的に見直すことをおすすめします。
        </Note>
      </Section>

      <Section>
        <SectionTitle>4. 興味・関心の設定</SectionTitle>
        <StepList>
          <StepItem>
            「興味・関心」または「トピック」セクションを見つける
          </StepItem>
          <StepItem>関心のあるカテゴリーやトピックを選択</StepItem>
          <StepItem>必要に応じて、カスタムトピックを追加</StepItem>
        </StepList>
        <Paragraph>
          興味・関心を設定することで、関連性の高いコンテンツやユーザーをおすすめできるようになります。
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. プロフィールの確認と最適化</SectionTitle>
        <StepList>
          <StepItem>変更を保存した後、公開プロフィールページを確認</StepItem>
          <StepItem>
            他のユーザーの目線で、プロフィールが魅力的に見えるか確認
          </StepItem>
          <StepItem>必要に応じて、情報を追加または削除</StepItem>
          <StepItem>定期的にプロフィールを見直し、最新の情報に更新</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>6. アカウントの連携</SectionTitle>
        <StepList>
          <StepItem>
            「アカウント連携」または「外部サービス」セクションを見つける
          </StepItem>
          <StepItem>連携したいソーシャルメディアや外部サービスを選択</StepItem>
          <StepItem>画面の指示に従って連携を設定</StepItem>
        </StepList>
        <Note>
          アカウント連携により、コンテンツの共有や友達の検索が容易になりますが、
          プライバシーへの影響も考慮してください。
        </Note>
      </Section>

      <Paragraph>
        プロフィールの編集や管理について質問がある場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
        魅力的で効果的なプロフィール作成をサポートいたします。
      </Paragraph>
    </Container>
  );
};

export default ProfileManagementPage;
