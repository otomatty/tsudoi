import { Component } from "solid-js";
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterLink,
  Copyright,
} from "./Footer.styled";

const Footer: Component = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLink href="/about">会社概要</FooterLink>
          <FooterLink href="/terms">利用規約</FooterLink>
          <FooterLink href="/privacy">プライバシーポリシー</FooterLink>
          <FooterLink href="/contact">お問い合わせ</FooterLink>
          <FooterLink href="/accessibility">アクセシビリティ</FooterLink>
        </FooterSection>
        <FooterSection>
          <FooterLink href="/help">ヘルプセンター</FooterLink>
          <FooterLink href="/help/getting-started">はじめての方へ</FooterLink>
          <FooterLink href="/help/app-web-differences">
            アプリとウェブの違い
          </FooterLink>
          <FooterLink href="/help/security-tips">
            セキュリティのヒント
          </FooterLink>
        </FooterSection>
      </FooterContent>
      <Copyright>&copy; 2023 地域SNS. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
