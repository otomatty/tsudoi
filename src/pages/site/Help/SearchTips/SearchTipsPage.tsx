import { Component } from "solid-js";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Paragraph,
  TipList,
  TipItem,
  Note,
  ExampleBox,
} from "./SearchTipsPage.styled";

const SearchTipsPage: Component = () => {
  return (
    <Container>
      <Title>検索機能の効果的な使い方</Title>

      <Paragraph>
        効果的な検索を行うことで、必要な情報や興味深いコンテンツを素早く見つけることができます。
        ここでは、アプリ内の検索機能を最大限に活用するためのヒントを紹介します。
      </Paragraph>

      <Section>
        <SectionTitle>1. 基本的な検索テクニック</SectionTitle>
        <TipList>
          <TipItem>
            キーワードを具体的に：一般的な単語よりも、具体的な用語を使用する
          </TipItem>
          <TipItem>
            複数のキーワード：関連する複数の単語を組み合わせて検索精度を上げる
          </TipItem>
          <TipItem>
            フレーズ検索：特定のフレーズを検索する場合は引用符で囲む
          </TipItem>
          <TipItem>
            スペルの確認：スペルミスに注意し、必要に応じて別の表記も試す
          </TipItem>
        </TipList>
        <ExampleBox>
          例：「東京 観光スポット」、「"美味しいラーメン"」、「プログラミング
          初心者 教材」
        </ExampleBox>
      </Section>

      <Section>
        <SectionTitle>2. 高度な検索オプション</SectionTitle>
        <TipList>
          <TipItem>ハッシュタグ検索：#記号を使ってハッシュタグを検索</TipItem>
          <TipItem>ユーザー検索：@記号を使って特定のユーザーを検索</TipItem>
          <TipItem>日付範囲：特定の期間内の投稿を検索</TipItem>
          <TipItem>場所検索：特定の場所に関連する投稿を検索</TipItem>
        </TipList>
        <ExampleBox>
          例：「#旅行」、「@officialaccount」、「2023年1月1日〜2023年12月31日」、「近く:東京」
        </ExampleBox>
      </Section>

      <Section>
        <SectionTitle>3. 検索フィルターの活用</SectionTitle>
        <Paragraph>
          検索結果ページで利用可能なフィルターを使用して、結果をさらに絞り込むことができます：
        </Paragraph>
        <TipList>
          <TipItem>投稿タイプ：テキスト、画像、動画、リンクなど</TipItem>
          <TipItem>アカウントタイプ：個人、ビジネス、認証済みなど</TipItem>
          <TipItem>言語：特定の言語で書かれた投稿のみを表示</TipItem>
          <TipItem>
            エンゲージメント：いいね数、コメント数、シェア数で並べ替え
          </TipItem>
        </TipList>
      </Section>

      <Section>
        <SectionTitle>4. 検索結果の解釈</SectionTitle>
        <TipList>
          <TipItem>
            関連性：検索結果は通常、関連性の高い順に表示されます
          </TipItem>
          <TipItem>
            トレンド：現在話題のトピックは上位に表示されることがあります
          </TipItem>
          <TipItem>
            パーソナライズ：あなたの興味や行動履歴に基づいて結果が調整されることがあります
          </TipItem>
        </TipList>
        <Note>
          検索結果が期待通りでない場合は、キーワードを変更したり、フィルターを調整したりしてみてください。
        </Note>
      </Section>

      <Section>
        <SectionTitle>5. 検索履歴と保存</SectionTitle>
        <TipList>
          <TipItem>
            検索履歴の確認：過去の検索キーワードを再利用して時間を節約
          </TipItem>
          <TipItem>
            検索の保存：頻繁に使用する検索条件を保存して簡単にアクセス
          </TipItem>
          <TipItem>
            検索通知：特定のキーワードに関する新しい投稿の通知を設定
          </TipItem>
        </TipList>
        <Paragraph>
          これらの機能を利用するには、設定画面から検索履歴の保存を有効にする必要がある場合があります。
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>6. プライバシーに関する注意点</SectionTitle>
        <TipList>
          <TipItem>
            公開投稿のみ：検索結果には公開設定の投稿のみが表示されます
          </TipItem>
          <TipItem>
            検索履歴：自分の検索履歴は他のユーザーには見えません
          </TipItem>
          <TipItem>
            匿名モード：プライベートな検索を行う場合は、匿名モードを使用することを検討してください
          </TipItem>
        </TipList>
      </Section>

      <Paragraph>
        検索機能の使い方について質問がある場合や、期待する結果が得られない場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
        より効果的な検索方法をアドバイスいたします。
      </Paragraph>
    </Container>
  );
};

export default SearchTipsPage;
