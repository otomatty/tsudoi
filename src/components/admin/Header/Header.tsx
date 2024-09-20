import { Component } from "solid-js";
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  Title,
  SearchContainer,
  SearchBar,
  IconButton,
  UserMenuContainer,
  Avatar,
  UserName,
} from "./Header.styled";
import { FiSearch, FiBell, FiSettings } from "solid-icons/fi";

const Header: Component = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="/admin-logo.png" alt="Admin Logo" />
        <Title>管理パネル</Title>
      </LogoContainer>
      <SearchContainer>
        <SearchBar placeholder="検索..." />
        <IconButton>
          <FiSearch />
        </IconButton>
      </SearchContainer>
      <IconButton>
        <FiBell />
      </IconButton>
      <IconButton>
        <FiSettings />
      </IconButton>
      <UserMenuContainer>
        <Avatar src="/avatar.png" alt="User Avatar" />
        <UserName>管理者名</UserName>
      </UserMenuContainer>
    </HeaderContainer>
  );
};

export default Header;
