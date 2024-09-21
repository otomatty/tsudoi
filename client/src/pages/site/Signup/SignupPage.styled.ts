import { styled } from "solid-styled-components";

export const Container = styled("div")`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled("h1")`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Separator = styled("div")`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ccc;
  }
`;

export const OrText = styled("span")`
  padding: 0 10px;
  color: #666;
`;
