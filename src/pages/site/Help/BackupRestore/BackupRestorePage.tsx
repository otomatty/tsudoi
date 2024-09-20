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
  WarningBox,
} from "./BackupRestorePage.styled";

const BackupRestorePage: Component = () => {
  return (
    <Container>
      <Title>データのバックアップと復元方法</Title>

      <Paragraph>
        アプリ内のデータを定期的にバックアップすることで、デバイスの紛失や故障時にも
        大切な情報を守ることができます。このガイドでは、データのバックアップと
        復元の方法を説明します。
      </Paragraph>

      <Section>
        <SectionTitle>1. データのバックアップ</SectionTitle>
        <StepList>
          <StepItem>アプリの設定画面を開く</StepItem>
          <StepItem>
            「データとストレージ」または「バックアップ」セクションを見つける
          </StepItem>
          <StepItem>「バックアップを作成」オプションを選択</StepItem>
          <StepItem>
            バックアップに含めるデータの種類を選択（メッセージ、投稿、設定など）
          </StepItem>
          <StepItem>
            バックアップの保存先を選択（クラウドストレージまたはローカルストレージ）
          </StepItem>
          <StepItem>「バックアップを開始」をタップしてプロセスを開始</StepItem>
        </StepList>
        <Note>
          注意:
          バックアッププロセス中はアプリを閉じたり、デバイスの電源を切ったりしないでください。
        </Note>
      </Section>

      <Section>
        <SectionTitle>2. 自動バックアップの設定</SectionTitle>
        <StepList>
          <StepItem>アプリの設定画面を開く</StepItem>
          <StepItem>
            「データとストレージ」または「バックアップ」セクションに移動
          </StepItem>
          <StepItem>
            「自動バックアップ」オプションを見つけて有効にする
          </StepItem>
          <StepItem>バックアップの頻度を選択（毎日、毎週、毎月など）</StepItem>
          <StepItem>自動バックアップに含めるデータの種類を選択</StepItem>
          <StepItem>バックアップの保存先を指定</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>3. データの復元</SectionTitle>
        <WarningBox>
          警告: データを復元すると、現在のアプリデータが上書きされます。
          復元を行う前に、現在のデータをバックアップすることをお勧めします。
        </WarningBox>
        <StepList>
          <StepItem>
            新しいデバイスでアプリをインストールし、ログインする
          </StepItem>
          <StepItem>アプリの設定画面を開く</StepItem>
          <StepItem>
            「データとストレージ」または「復元」セクションを見つける
          </StepItem>
          <StepItem>「バックアップから復元」オプションを選択</StepItem>
          <StepItem>
            利用可能なバックアップのリストから復元したいバックアップを選択
          </StepItem>
          <StepItem>復元するデータの種類を選択</StepItem>
          <StepItem>「復元を開始」をタップしてプロセスを開始</StepItem>
        </StepList>
        <Note>
          復元プロセス中はアプリを閉じたり、デバイスの電源を切ったりしないでください。
        </Note>
      </Section>

      <Section>
        <SectionTitle>4. バックアップの管理</SectionTitle>
        <StepList>
          <StepItem>アプリの設定画面を開く</StepItem>
          <StepItem>
            「データとストレージ」または「バックアップ」セクションに移動
          </StepItem>
          <StepItem>「バックアップを管理」オプションを選択</StepItem>
          <StepItem>保存されているバックアップのリストを確認</StepItem>
          <StepItem>不要なバックアップを選択して削除</StepItem>
          <StepItem>バックアップの詳細（作成日時、サイズなど）を確認</StepItem>
        </StepList>
      </Section>

      <Section>
        <SectionTitle>5. トラブルシューティング</SectionTitle>
        <Paragraph>
          バックアップや復元中に問題が発生した場合は、以下を試してください：
        </Paragraph>
        <StepList>
          <StepItem>十分なストレージ容量があることを確認する</StepItem>
          <StepItem>安定したインターネット接続を確保する</StepItem>
          <StepItem>アプリを最新バージョンにアップデートする</StepItem>
          <StepItem>デバイスを再起動してから再試行する</StepItem>
          <StepItem>別のバックアップファイルを試す（復元時）</StepItem>
        </StepList>
      </Section>

      <Paragraph>
        バックアップや復元について質問がある場合、または問題が解決しない場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
        お客様のデータの安全性を確保するためにサポートいたします。
      </Paragraph>
    </Container>
  );
};

export default BackupRestorePage;
