import { Component } from "solid-js";
import {
  FeaturesSection,
  Title,
  Content,
  List,
  ListItem,
} from "./Features.styled";

const Features: Component = () => {
  return (
    <FeaturesSection>
      <Title>アクセシビリティ機能</Title>
      <Content>
        当サイトでは、以下のアクセシビリティ機能を提供しています：
      </Content>
      <List>
        <ListItem>キーボードナビゲーション</ListItem>
        <ListItem>スクリーンリーダー対応</ListItem>
        <ListItem>テキストのサイズ変更</ListItem>
        <ListItem>高コントラストモード</ListItem>
      </List>
    </FeaturesSection>
  );
};

export default Features;
