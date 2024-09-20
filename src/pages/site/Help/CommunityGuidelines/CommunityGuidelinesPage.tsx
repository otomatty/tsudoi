import { Component } from "solid-js";
import {
  Container,
  Title,
  Section,
  SectionTitle,
  Paragraph,
  List,
  ListItem,
} from "./CommunityGuidelinesPage.styled";

const CommunityGuidelinesPage: Component = () => {
  return (
    <Container>
      <Title>コミュニティガイドライン</Title>

      <Paragraph>
        私たちのプラットフォームは、安全で友好的な環境を維持することを目指しています。
        以下のガイドラインを守ることで、すべてのユーザーが快適に利用できる場を作り上げていきましょう。
      </Paragraph>

      <Section>
        <SectionTitle>1. 相互尊重</SectionTitle>
        <Paragraph>
          すべてのユーザーに敬意を払い、お互いの違いを尊重してください。
        </Paragraph>
        <List>
          <ListItem>
            他のユーザーを攻撃したり、嫌がらせをしたりしないでください。
          </ListItem>
          <ListItem>
            人種、性別、宗教、性的指向などに基づく差別的な発言は禁止です。
          </ListItem>
          <ListItem>
            建設的な議論を心がけ、意見の相違があっても礼儀正しく対応してください。
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>2. 適切なコンテンツ</SectionTitle>
        <Paragraph>
          投稿するコンテンツは、コミュニティに適したものを選んでください。
        </Paragraph>
        <List>
          <ListItem>
            暴力的、性的に露骨、または不適切なコンテンツの投稿は避けてください。
          </ListItem>
          <ListItem>著作権を侵害するコンテンツの投稿は禁止です。</ListItem>
          <ListItem>スパムや不要な宣伝は控えてください。</ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>3. プライバシーの尊重</SectionTitle>
        <Paragraph>
          他人のプライバシーを尊重し、個人情報の取り扱いには十分注意してください。
        </Paragraph>
        <List>
          <ListItem>他人の個人情報を許可なく共有しないでください。</ListItem>
          <ListItem>
            他人の写真や情報を投稿する際は、必ず本人の同意を得てください。
          </ListItem>
          <ListItem>
            プライベートな会話や情報を公開の場で共有しないでください。
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>4. 誠実なコミュニケーション</SectionTitle>
        <Paragraph>
          誠実で透明性のあるコミュニケーションを心がけてください。
        </Paragraph>
        <List>
          <ListItem>
            虚偽の情報や誤解を招く内容の投稿は避けてください。
          </ListItem>
          <ListItem>
            他人になりすましたり、偽のアカウントを作成したりしないでください。
          </ListItem>
          <ListItem>
            信頼できる情報源を引用し、事実と意見を明確に区別してください。
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>5. 規則の遵守</SectionTitle>
        <Paragraph>プラットフォームの規則や法律を遵守してください。</Paragraph>
        <List>
          <ListItem>違法な活動や内容の投稿は固く禁じられています。</ListItem>
          <ListItem>
            他のユーザーにルール違反を促すような行為も避けてください。
          </ListItem>
          <ListItem>
            ガイドライン違反を発見した場合は、適切に報告してください。
          </ListItem>
        </List>
      </Section>

      <Paragraph>
        これらのガイドラインに違反する行為が確認された場合、警告、投稿の削除、
        アカウントの一時停止または永久停止などの措置が取られる可能性があります。
        コミュニティガイドラインについて質問がある場合は、
        <a href="/contact">サポートチーム</a>にお問い合わせください。
      </Paragraph>
    </Container>
  );
};

export default CommunityGuidelinesPage;
