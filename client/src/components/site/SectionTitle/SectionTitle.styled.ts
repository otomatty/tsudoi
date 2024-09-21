import { styled } from "solid-styled-components";

export const StyledSectionTitle = styled("h2")`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;
