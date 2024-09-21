import { styled } from "solid-styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  flex-grow: 1;
  max-width: 400px;
  margin: 0 2rem;
`;

export const SearchBar = styled.input`
  border: none;
  background: transparent;
  font-size: 1rem;
  width: 100%;
  outline: none;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #666;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;
