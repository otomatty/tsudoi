import { styled } from "solid-styled-components";

export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #28a745;
`;
