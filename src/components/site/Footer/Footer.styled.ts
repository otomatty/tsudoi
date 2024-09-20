import { styled } from "solid-styled-components";

export const FooterContainer = styled("footer")`
  background-color: #f8f8f8;
  padding: 2rem 0;
  margin-top: 2rem;
`;

export const FooterContent = styled("div")`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

export const FooterLink = styled("a")`
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export const Copyright = styled("p")`
  text-align: center;
  color: #666;
  font-size: 0.8rem;
`;

export const FooterSection = styled("div")`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;
