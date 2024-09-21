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
} from "./EventsPage.styled";

const EventsPage: Component = () => {
  return (
    <Container>
      <Title>イベントの作成と参加ガイド</Title>

      <Paragraph>
        イベント機能を使用することで、地域コミュニティ内でのリアルな交流を促進できます。
        このガイドでは、イベントの作成方法と参加方法について説明します。
      </Paragraph>

      <Section>
        <SectionTitle>1. イベントの作成</SectionTitle>
        <StepList>
          <StepItem>ホーム画面の「イベント作成」ボタンをクリック</StepItem>
          <StepItem>イベント名を入力</StepItem>
          <StepItem>
            日時と場所を設定（オンラインイベントの場合は「オンライン」を選択）
          </StepItem>
          <StepItem>イベントの詳細説明を記入</StepItem>
          <StepItem>カバー画像をアップロード（任意）</StepItem>
          <StepItem>参加者の上限を設定（任意）</StepItem>
          <StepItem>
            イベントの公開範囲を選択（公開、友達のみ、招待制など）
          </StepItem>
          <StepItem>「イベントを作成」ボタンをクリックして公開</StepItem>
        </StepList>
        <Note>
          注意: イベントの内容は地域のガイドラインに沿ったものにしましょう。
          不適切なイベントは削除される可能性があります。
        </Note>
      </Section>

      <Section>
        <SectionTitle>2. イベントの編集と管理</SectionTitle>
        <StepList>
          <StepItem>作成したイベントページにアクセス</StepItem>
          <StepItem>「イベントを編集」ボタンをクリック</StepItem>
          <StepItem>必要な情報を更新</StepItem>
          <StepItem>「変更を保存」ボタンをクリック</StepItem>
          <StepItem>
            イベントをキャンセルする場合は、「イベントをキャンセル」オプションを選択
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>3. イベントへの招待</SectionTitle>
        <StepList>
          <StepItem>イベントページの「友達を招待」ボタンをクリック</StepItem>
          <StepItem>招待したい友達を選択</StepItem>
          <StepItem>必要に応じて、招待メッセージを追加</StepItem>
          <StepItem>「招待を送信」ボタンをクリック</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>4. イベントの検索と参加</SectionTitle>
        <StepList>
          <StepItem>「イベント」タブを開く</StepItem>
          <StepItem>興味のあるカテゴリーやキーワードで検索</StepItem>
          <StepItem>イベントの詳細ページを確認</StepItem>
          <StepItem>「参加する」ボタンをクリックしてイベントに参加</StepItem>
          <StepItem>必要に応じて、参加に関する追加情報を入力</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. イベント参加者とのコミュニケーション</SectionTitle>
        <StepList>
          <StepItem>イベントページの「参加者」セクションを確認</StepItem>
          <StepItem>イベントの掲示板機能を使用して、参加者と交流</StepItem>
          <StepItem>主催者からのお知らせを確認</StepItem>
          <StepItem>
            質問がある場合は、イベントページで主催者に問い合わせ
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>6. イベント後のフォローアップ</SectionTitle>
        <StepList>
          <StepItem>イベント終了後、感想や写真を投稿</StepItem>
          <StepItem>主催者がアンケートを実施している場合は回答</StepItem>
          <StepItem>次回のイベント情報をチェック</StepItem>
          <StepItem>イベントで知り合った人とつながりを維持</StepItem>
        </StepList>
      </Section>

      <Paragraph>
        イベント機能を活用して、地域コミュニティとのリアルな交流を深めましょう。
        イベントに関する詳細な質問は、<a href="/help">ヘルプセンター</a>や
        <a href="/contact">サポート</a>にお問い合わせください。
      </Paragraph>
    </Container>
  );
};

export default EventsPage;
