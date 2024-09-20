import { Component } from "solid-js";
import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  ButtonContainer,
} from "./Header.styled";
import Button from "../../common/Button/Button";
import { useNavigate } from "@solidjs/router";

const Header: Component = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <HeaderContainer>
      <Logo href="/">地域SNS</Logo>
      <Nav>
        <NavLink href="/">ホーム</NavLink>
        <NavLink href="/about">概要</NavLink>
        <NavLink href="/features">機能</NavLink>
        <NavLink href="/contact">お問い合わせ</NavLink>
        <ButtonContainer>
          <Button onClick={handleLogin} variant="secondary">
            ログイン
          </Button>
          <Button onClick={handleSignup} variant="primary">
            新規登録
          </Button>
        </ButtonContainer>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
