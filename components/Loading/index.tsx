import React from 'react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <AiOutlineLoading3Quarters size={50} />
    </Container>
  );
};

export default Loading;
