import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  background: none;
  border: 2px solid #64f4ac;
  color: #64f4ac;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  font-size: 20px;

  svg {
    margin-right: 10px;
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }
`;
