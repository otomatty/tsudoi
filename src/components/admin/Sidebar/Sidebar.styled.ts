import { styled } from "solid-styled-components";

export const SidebarContainer = styled.nav`
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem 0;
  overflow-y: auto;
`;

export const NavSection = styled.div`
  margin-bottom: 2rem;

  &:not(:first-child) {
    border-top: 1px solid #34495e;
    padding-top: 1rem;
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #ecf0f1;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #34495e;
  }

  &.active {
    background-color: #3498db;
  }
`;

export const NavIcon = styled.span`
  margin-right: 1rem;
  font-size: 1.2rem;
`;

export const NavText = styled.span`
  font-size: 1rem;
`;
