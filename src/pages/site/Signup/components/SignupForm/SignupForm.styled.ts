import { styled } from "solid-styled-components";

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

export const Input = styled("input")`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Button = styled("button")`
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;
