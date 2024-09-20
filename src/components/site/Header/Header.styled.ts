import { styled } from "solid-styled-components";

export const HeaderContainer = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled("a")`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

export const Nav = styled("nav")`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled("a")`
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }

  &.signup {
    background-color: #007bff;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const ButtonContainer = styled("div")`
  display: flex;
  gap: 1rem;
`;
