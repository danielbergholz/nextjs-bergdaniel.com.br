import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  text-align: center;
  animation: loadAnimation;
  animation-duration: 500ms;
  padding-top: 150px;

  img {
    border-radius: 4px;
    max-width: 100%;
    max-height: 600px;
  }

  button {
    margin: 30px auto 30px auto;
  }
`;
