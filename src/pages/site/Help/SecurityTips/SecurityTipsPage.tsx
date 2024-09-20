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
  WarningBox,
} from "./SecurityTipsPage.styled";

const SecurityTipsPage: Component = () => {
  return (
    <Container>
      <Title>アカウントのセキュリティ強化のヒント</Title>

      <Paragraph>
        アカウントのセキュリティを強化することは、個人情報を守り、
        不正アクセスを防ぐために非常に重要です。以下のヒントを参考に、
        アカウントのセキュリティレベルを向上させましょう。
      </Paragraph>

      <Section>
        <SectionTitle>1. 強力なパスワードの使用</SectionTitle>
        <TipList>
          <TipItem>最低12文字以上の長さを使用する</TipItem>
          <TipItem>大文字、小文字、数字、特殊文字を組み合わせる</TipItem>
          <TipItem>個人情報（生年月日、名前など）を含めない</TipItem>
          <TipItem>辞書に載っている単語をそのまま使用しない</TipItem>
          <TipItem>アカウントごとに異なるパスワードを使用する</TipItem>
        </TipList>
        <Note>
          パスワードマネージャーを使用すると、強力で一意のパスワードの管理が容易になります。
        </Note>
      </Section>

      <Section>
        <SectionTitle>2. 二段階認証の有効化</SectionTitle>
        <Paragraph>
          二段階認証を有効にすると、パスワードが漏洩した場合でも追加の保護層が提供されます。
        </Paragraph>
        <TipList>
          <TipItem>SMSよりも認証アプリやセキュリティキーの使用を推奨</TipItem>
          <TipItem>バックアップコードを安全な場所に保管する</TipItem>
          <TipItem>可能な限り複数の認証方法を設定する</TipItem>
        </TipList>
      </Section>

      <Section>
        <SectionTitle>3. アカウント回復オプションの設定</SectionTitle>
        <TipList>
          <TipItem>
            バックアップメールアドレスを設定し、定期的に更新する
          </TipItem>
          <TipItem>電話番号を回復オプションとして追加する</TipItem>
          <TipItem>
            セキュリティの質問と答えを設定する場合は、推測されにくいものを選ぶ
          </TipItem>
        </TipList>
      </Section>

      <Section>
        <SectionTitle>4. 定期的なセキュリティチェック</SectionTitle>
        <TipList>
          <TipItem>アカウントのアクティビティログを定期的に確認する</TipItem>
          <TipItem>
            不審なログインや活動があれば、すぐにパスワードを変更する
          </TipItem>
          <TipItem>
            連携しているサードパーティアプリを定期的に見直し、不要なものは削除する
          </TipItem>
          <TipItem>セキュリティ設定を定期的に確認し、最新の状態に保つ</TipItem>
        </TipList>
      </Section>

      <Section>
        <SectionTitle>5. フィッシング対策</SectionTitle>
        <TipList>
          <TipItem>不審なメールやメッセージのリンクをクリックしない</TipItem>
          <TipItem>
            公式サイトのURLを直接入力してログインする習慣をつける
          </TipItem>
          <TipItem>個人情報やログイン情報を要求するメールに注意する</TipItem>
          <TipItem>不確かな送信元からの添付ファイルを開かない</TipItem>
        </TipList>
        <WarningBox>
          当社は、メールやメッセージでパスワードや個人情報を要求することは決してありません。
        </WarningBox>
      </Section>

      <Section>
        <SectionTitle>6. デバイスとソフトウェアの管理</SectionTitle>
        <TipList>
          <TipItem>使用するデバイスのOSとアプリを常に最新の状態に保つ</TipItem>
          <TipItem>信頼できるソースからのみアプリをインストールする</TipItem>
          <TipItem>
            デバイスにパスワードやPINを設定し、自動ロックを有効にする
          </TipItem>
          <TipItem>公共のWi-Fiを使用する際は、VPNを利用する</TipItem>
        </TipList>
      </Section>

      <Section>
        <SectionTitle>7. ソーシャルエンジニアリング対策</SectionTitle>
        <TipList>
          <TipItem>個人情報の共有には慎重になる</TipItem>
          <TipItem>SNSでの過度な情報公開を避ける</TipItem>
          <TipItem>見知らぬ人からの不自然な連絡や要求に注意する</TipItem>
          <TipItem>公開プロフィールに載せる情報を最小限に抑える</TipItem>
        </TipList>
      </Section>

      <Paragraph>
        これらのヒントを実践することで、アカウントのセキュリティを大幅に向上させることができます。
        セキュリティについて質問がある場合や、不審な活動を発見した場合は、
        すぐに<a href="/contact">サポートチーム</a>にお問い合わせください。
      </Paragraph>
    </Container>
  );
};

export default SecurityTipsPage;
