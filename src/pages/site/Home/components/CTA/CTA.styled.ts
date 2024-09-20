import { styled } from "solid-styled-components";

export const CTASection = styled("div")`
  text-align: center;
`;

export const CTAButton = styled("a")`
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.25rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
