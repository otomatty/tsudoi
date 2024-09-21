import { Component } from "solid-js";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Paragraph,
  ComparisonTable,
  FeatureList,
  FeatureItem,
  Note,
} from "./AppWebDifferencesPage.styled";

const AppWebDifferencesPage: Component = () => {
  return (
    <Container>
      <Title>モバイルアプリとウェブ版の違い</Title>

      <Paragraph>
        当サービスはモバイルアプリとウェブブラウザの両方でご利用いただけます。
        それぞれに特徴があり、状況に応じて使い分けることができます。
        ここでは、主な違いと各バージョンの特徴を説明します。
      </Paragraph>

      <Section>
        <SectionTitle>1. 利用可能な機能の比較</SectionTitle>
        <ComparisonTable>
          <thead>
            <tr>
              <th>機能</th>
              <th>モバイルアプリ</th>
              <th>ウェブ版</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>基本的な閲覧・投稿</td>
              <td>○</td>
              <td>○</td>
            </tr>
            <tr>
              <td>プッシュ通知</td>
              <td>○</td>
              <td>△（ブラウザ設定による）</td>
            </tr>
            <tr>
              <td>オフライン閲覧</td>
              <td>○</td>
              <td>×</td>
            </tr>
            <tr>
              <td>カメラ直接アクセス</td>
              <td>○</td>
              <td>×</td>
            </tr>
            <tr>
              <td>位置情報サービス</td>
              <td>○</td>
              <td>△（ブラウザ設定による）</td>
            </tr>
            <tr>
              <td>高度な編集ツール</td>
              <td>○</td>
              <td>△（一部機能制限あり）</td>
            </tr>
          </tbody>
        </ComparisonTable>
      </Section>

      <Section>
        <SectionTitle>2. モバイルアプリの特徴</SectionTitle>
        <FeatureList>
          <FeatureItem>
            スマートフォンに最適化されたインターフェース
          </FeatureItem>
          <FeatureItem>プッシュ通知によるリアルタイムの更新</FeatureItem>
          <FeatureItem>オフラインモードでのコンテンツ閲覧</FeatureItem>
          <FeatureItem>デバイスのカメラやギャラリーとの直接連携</FeatureItem>
          <FeatureItem>
            位置情報を活用した機能（近くの投稿表示など）
          </FeatureItem>
          <FeatureItem>バックグラウンド処理による高速な動作</FeatureItem>
        </FeatureList>
        <Note>
          モバイルアプリは、スマートフォンの機能を最大限に活用できるため、
          モバイルでの使用に最適です。
        </Note>
      </Section>

      <Section>
        <SectionTitle>3. ウェブ版の特徴</SectionTitle>
        <FeatureList>
          <FeatureItem>
            デバイスを問わず、ブラウザさえあればアクセス可能
          </FeatureItem>
          <FeatureItem>大画面での閲覧に適した広々としたレイアウト</FeatureItem>
          <FeatureItem>キーボードを使用した素早い入力が可能</FeatureItem>
          <FeatureItem>複数のタブやウィンドウを使用した並行作業</FeatureItem>
          <FeatureItem>ブックマークやブラウザの拡張機能との連携</FeatureItem>
          <FeatureItem>
            インストールの必要がなく、すぐに利用開始可能
          </FeatureItem>
        </FeatureList>
        <Note>
          ウェブ版は、デスクトップでの作業や複数のタスクを並行して行う場合に便利です。
        </Note>
      </Section>

      <Section>
        <SectionTitle>4. パフォーマンスと使用感の違い</SectionTitle>
        <Paragraph>
          一般的に、モバイルアプリの方がウェブ版よりも高速で滑らかな動作を提供します。
          これは、アプリがデバイスにインストールされ、最適化されているためです。
          一方、ウェブ版はインターネット接続の速度に依存し、ブラウザの性能にも影響されます。
        </Paragraph>
        <Paragraph>
          ただし、最新のウェブ技術により、ウェブ版とモバイルアプリの差は徐々に縮まっています。
          多くの機能がウェブ版でも利用可能になってきています。
        </Paragraph>
      </Section>

      <Section>
        <SectionTitle>5. データの同期</SectionTitle>
        <Paragraph>
          モバイルアプリとウェブ版の間でデータは自動的に同期されます。
          つまり、一方で行った変更や投稿は、他方でも反映されます。
          ただし、オフラインモードで作成したコンテンツは、
          インターネットに接続した際に同期されます。
        </Paragraph>
      </Section>

      <Paragraph>
        モバイルアプリとウェブ版の使い分けについて質問がある場合や、
        特定の機能の利用可否を確認したい場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
        最適な利用方法をアドバイスいたします。
      </Paragraph>
    </Container>
  );
};

export default AppWebDifferencesPage;
