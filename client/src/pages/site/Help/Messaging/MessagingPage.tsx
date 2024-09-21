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
} from "./MessagingPage.styled";

const MessagingPage: Component = () => {
  return (
    <Container>
      <Title>メッセージング機能の使い方ガイド</Title>

      <Paragraph>
        メッセージング機能を使用することで、他のユーザーと直接コミュニケーションを取ることができます。
        このガイドでは、メッセージの送信方法や会話の管理方法について説明します。
      </Paragraph>

      <Section>
        <SectionTitle>1. 新しいメッセージの作成</SectionTitle>
        <StepList>
          <StepItem>画面上部の「メッセージ」アイコンをクリック</StepItem>
          <StepItem>「新しいメッセージ」ボタンをクリック</StepItem>
          <StepItem>宛先のユーザー名を入力（複数可）</StepItem>
          <StepItem>メッセージ本文を入力</StepItem>
          <StepItem>必要に応じて、画像や添付ファイルを追加</StepItem>
          <StepItem>「送信」ボタンをクリックしてメッセージを送信</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>2. 会話の管理</SectionTitle>
        <StepList>
          <StepItem>「メッセージ」画面で既存の会話をクリックして開く</StepItem>
          <StepItem>会話履歴を確認し、新しいメッセージを入力</StepItem>
          <StepItem>
            会話を上部にピン留めするには、会話を長押しして「ピン留め」を選択
          </StepItem>
          <StepItem>
            会話をアーカイブするには、会話を左にスワイプして「アーカイブ」を選択
          </StepItem>
          <StepItem>
            会話を削除するには、会話を左にスワイプして「削除」を選択
          </StepItem>
        </StepList>
        <Note>
          注意:
          削除した会話は復元できません。重要な情報は別途保存しておくことをおすすめします。
        </Note>
      </Section>

      <Section>
        <SectionTitle>3. グループメッセージの作成と管理</SectionTitle>
        <StepList>
          <StepItem>
            新しいメッセージ作成時に複数のユーザーを追加してグループを作成
          </StepItem>
          <StepItem>既存のグループ会話で「グループ情報」をタップ</StepItem>
          <StepItem>
            グループ名の変更、メンバーの追加・削除、グループ画像の設定が可能
          </StepItem>
          <StepItem>
            グループから退出するには、「グループを退出」オプションを選択
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>4. メッセージの検索</SectionTitle>
        <StepList>
          <StepItem>「メッセージ」画面上部の検索バーをタップ</StepItem>
          <StepItem>キーワードを入力して検索</StepItem>
          <StepItem>検索結果から該当するメッセージや会話を選択</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. プライバシーとセキュリティ設定</SectionTitle>
        <StepList>
          <StepItem>「設定」から「プライバシーとセキュリティ」を選択</StepItem>
          <StepItem>「メッセージ」セクションで各種設定を確認</StepItem>
          <StepItem>既読通知の有効/無効を切り替え</StepItem>
          <StepItem>メッセージリクエストの許可/ブロックを設定</StepItem>
          <StepItem>暗号化オプションを確認し、必要に応じて有効化</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>6. トラブルシューティング</SectionTitle>
        <StepList>
          <StepItem>
            メッセージが送信できない場合は、ネットワーク接続を確認
          </StepItem>
          <StepItem>
            相手からのメッセージが届かない場合は、ブロック設定を確認
          </StepItem>
          <StepItem>
            アプリが正常に動作しない場合は、再起動やキャッシュのクリアを試す
          </StepItem>
          <StepItem>問題が解決しない場合は、サポートチームに連絡</StepItem>
        </StepList>
      </Section>

      <Paragraph>
        メッセージング機能を活用して、他のユーザーとスムーズにコミュニケーションを取りましょう。
        詳細な質問や問題がある場合は、<a href="/help">ヘルプセンター</a>や
        <a href="/contact">サポート</a>にお問い合わせください。
      </Paragraph>
    </Container>
  );
};

export default MessagingPage;
