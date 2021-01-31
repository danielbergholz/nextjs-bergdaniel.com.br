import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  backgroundHoverColor?: string;
  color?: string;
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  background-color: ${(props) => props.backgroundColor || '#6473f5'};
  color: ${(props) => props.color || '#fff'};
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  font-size: 21px;
  transition: background-color 200ms;

  &:hover {
    background-color: ${(props) => props.backgroundHoverColor || '#8692ff'};
  }

  svg {
    margin-right: 10px;
  }

  @media (max-width: 700px) {
    font-size: 19px;
  }
`;
