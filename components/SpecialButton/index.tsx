import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps {
  link?: string;
}

const SpecialButton: React.FC<ButtonProps> = ({ children, link }) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <StyledButton type="button">{children}</StyledButton>
      </a>
    );
  }
  return <StyledButton type="button">{children}</StyledButton>;
};

export default SpecialButton;
