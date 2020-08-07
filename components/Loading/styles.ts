import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 44px);
  animation: loadAnimation;
  animation-duration: 500ms;
  align-items: center;
  justify-content: center;

  svg {
    cursor: auto;
    animation-name: loading;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes loading {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
