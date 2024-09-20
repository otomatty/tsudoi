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
} from "./ReportingAndBlockingPage.styled";

const ReportingAndBlockingPage: Component = () => {
  return (
    <Container>
      <Title>報告・ブロック機能の使い方</Title>

      <Paragraph>
        安全で快適なコミュニティを維持するために、不適切なコンテンツや迷惑なユーザーを
        報告したり、ブロックしたりする機能があります。このガイドでは、
        これらの機能の使い方を説明します。
      </Paragraph>

      <Section>
        <SectionTitle>1. コンテンツを報告する</SectionTitle>
        <StepList>
          <StepItem>
            問題のある投稿や、コメントの右上にある「...」メニューをクリック
          </StepItem>
          <StepItem>「報告する」オプションを選択</StepItem>
          <StepItem>
            報告理由を選択（例：スパム、嫌がらせ、不適切なコンテンツなど）
          </StepItem>
          <StepItem>必要に応じて、詳細情報を入力</StepItem>
          <StepItem>「送信」をクリックして報告を完了</StepItem>
        </StepList>
        <Note>
          注意:
          報告は匿名で行われ、報告者の情報は報告されたユーザーに開示されません。
        </Note>
      </Section>

      <Section>
        <SectionTitle>2. ユーザーを報告する</SectionTitle>
        <StepList>
          <StepItem>問題のあるユーザーのプロフィールページにアクセス</StepItem>
          <StepItem>プロフィールの「...」メニューをクリック</StepItem>
          <StepItem>「ユーザーを報告」オプションを選択</StepItem>
          <StepItem>報告理由を選択し、必要に応じて詳細情報を提供</StepItem>
          <StepItem>「送信」をクリックして報告を完了</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>3. ユーザーをブロックする</SectionTitle>
        <StepList>
          <StepItem>
            ブロックしたいユーザーのプロフィールページにアクセス
          </StepItem>
          <StepItem>プロフィールの「...」メニューをクリック</StepItem>
          <StepItem>「ブロック」オプションを選択</StepItem>
          <StepItem>
            確認ダイアログで「はい、ブロックします」をクリック
          </StepItem>
        </StepList>
        <Note>
          ブロックすると、そのユーザーはあなたのプロフィールを見たり、
          メッセージを送ったりすることができなくなります。
        </Note>
      </Section>

      <Section>
        <SectionTitle>4. ブロックを解除する</SectionTitle>
        <StepList>
          <StepItem>設定ページにアクセス</StepItem>
          <StepItem>
            「プライバシーとセキュリティ」セクションを見つける
          </StepItem>
          <StepItem>「ブロックしたアカウント」リストを確認</StepItem>
          <StepItem>
            ブロックを解除したいユーザーの横にある「ブロック解除」ボタンをクリック
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. 報告後の流れ</SectionTitle>
        <Paragraph>
          報告を受け取ると、モデレーションチームが内容を確認し、
          適切な対応を取ります。対応には以下のようなものがあります：
        </Paragraph>
        <StepList>
          <StepItem>コンテンツの削除</StepItem>
          <StepItem>ユーザーへの警告</StepItem>
          <StepItem>アカウントの一時停止または永久停止</StepItem>
          <StepItem>法的措置（深刻な違反の場合）</StepItem>
        </StepList>
        <Note>
          報告の結果について個別の通知は行われませんが、
          プラットフォームの安全性向上に貢献していただきありがとうございます。
        </Note>
      </Section>

      <Paragraph>
        報告やブロック機能について質問がある場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
        私たちは安全で快適なコミュニティづくりにコミットしています。
      </Paragraph>
    </Container>
  );
};

export default ReportingAndBlockingPage;
