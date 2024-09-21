import { Component } from "solid-js";
import {
  StandardsSection,
  Title,
  Content,
  List,
  ListItem,
} from "./Standards.styled";

const Standards: Component = () => {
  return (
    <StandardsSection>
      <Title>対応基準</Title>
      <Content>当サイトは、以下の基準に準拠することを目指しています：</Content>
      <List>
        <ListItem>WCAG 2.1のレベルAAに準拠</ListItem>
        <ListItem>JIS X 8341-3:2016に準拠</ListItem>
      </List>
    </StandardsSection>
  );
};

export default Standards;
