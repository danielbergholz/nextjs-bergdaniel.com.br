import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps {
  link?: string;
  backgroundColor?: string;
  backgroundHoverColor?: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  link,
  backgroundColor,
  backgroundHoverColor,
  color,
}) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <StyledButton
          type="button"
          backgroundColor={backgroundColor}
          backgroundHoverColor={backgroundHoverColor}
          color={color}
        >
          {children}
        </StyledButton>
      </a>
    );
  }
  return <StyledButton type="button">{children}</StyledButton>;
};

export default Button;
