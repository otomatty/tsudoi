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
} from "./PostingPage.styled";

const PostingPage: Component = () => {
  return (
    <Container>
      <Title>投稿の作成と管理ガイド</Title>

      <Paragraph>
        投稿は、地域コミュニティとつながり、情報を共有するための重要な機能です。
        このガイドでは、効果的な投稿の作成方法と、投稿の管理について説明します。
      </Paragraph>

      <Section>
        <SectionTitle>1. 新しい投稿の作成</SectionTitle>
        <StepList>
          <StepItem>ホーム画面上部の「投稿を作成」ボタンをクリック</StepItem>
          <StepItem>テキストボックスに投稿内容を入力</StepItem>
          <StepItem>
            必要に応じて、画像や動画を追加（「メディアを追加」ボタンをクリック）
          </StepItem>
          <StepItem>
            位置情報を追加する場合は、「位置情報を追加」ボタンをクリック
          </StepItem>
          <StepItem>
            投稿の公開範囲を選択（全体公開、友達のみ、特定のグループなど）
          </StepItem>
          <StepItem>「投稿する」ボタンをクリックして投稿を公開</StepItem>
        </StepList>
        <Note>
          注意: 投稿内容は地域のガイドラインに沿ったものにしましょう。
          不適切な内容は削除される可能性があります。
        </Note>
      </Section>

      <Section>
        <SectionTitle>2. 投稿へのハッシュタグの追加</SectionTitle>
        <Paragraph>
          ハッシュタグを使用すると、投稿の発見可能性が高まり、同じ興味を持つ人々とつながりやすくなります。
        </Paragraph>
        <StepList>
          <StepItem>
            投稿内容に「#」記号を入力し、続けてキーワードを入力
          </StepItem>
          <StepItem>
            複数のハッシュタグを使用する場合は、スペースで区切る
          </StepItem>
          <StepItem>
            地域に関連するハッシュタグを使用すると、ローカルコミュニティでの露出が増加
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>3. 投稿の編集と削除</SectionTitle>
        <StepList>
          <StepItem>編集または削除したい投稿を見つける</StepItem>
          <StepItem>投稿の右上にある「...」メニューをクリック</StepItem>
          <StepItem>「投稿を編集」または「投稿を削除」を選択</StepItem>
          <StepItem>編集の場合、変更を加えて「更新」ボタンをクリック</StepItem>
          <StepItem>削除の場合、確認ダイアログで「削除」を選択</StepItem>
        </StepList>
        <Note>
          注意: 一度削除した投稿は復元できません。慎重に操作してください。
        </Note>
      </Section>

      <Section>
        <SectionTitle>4. 投稿の共有とブックマーク</SectionTitle>
        <StepList>
          <StepItem>共有したい投稿の下にある「共有」ボタンをクリック</StepItem>
          <StepItem>
            「自分のタイムラインで共有」や「メッセージで送信」などのオプションから選択
          </StepItem>
          <StepItem>
            投稿をブックマークするには、「ブックマーク」ボタンをクリック
          </StepItem>
          <StepItem>
            ブックマークした投稿は、プロフィールページの「ブックマーク」タブで確認可能
          </StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. 投稿の分析</SectionTitle>
        <Paragraph>
          自分の投稿のパフォーマンスを分析することで、より効果的な投稿ができるようになります。
        </Paragraph>
        <StepList>
          <StepItem>投稿の下にある「分析を表示」リンクをクリック</StepItem>
          <StepItem>閲覧数、いいね数、コメント数などの統計情報を確認</StepItem>
          <StepItem>時間帯別の反応を分析し、最適な投稿時間を把握</StepItem>
          <StepItem>
            人気の高い投稿タイプや内容を参考に、今後の投稿を改善
          </StepItem>
        </StepList>
      </Section>

      <Paragraph>
        これらのテクニックを活用して、効果的な投稿を作成し、地域コミュニティとの
        つながりを深めましょう。投稿に関する詳細な質問は、
        <a href="/help">ヘルプセンター</a>や<a href="/contact">サポート</a>
        にお問い合わせください。
      </Paragraph>
    </Container>
  );
};

export default PostingPage;
