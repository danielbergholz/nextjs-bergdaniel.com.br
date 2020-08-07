import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;
  display: flex;
  flex-direction: column;

  p {
    text-transform: uppercase;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 30px;
    font-family: 'Anton', Helvetica, sans-serif;
    font-size: 32px;
  }

  img {
    width: 165px;
    height: 157px;
    margin: 0 auto;
    border-radius: 5px;
    font-family: 'Anton', Helvetica, sans-serif;
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  strong,
  span {
    text-align: justify;
    font-size: 22px;
  }

  span {
    font-weight: 400;
  }

  @media (max-width: 700px) {
    width: 90vw;
  }

  @media (max-width: 700px) {
    p {
      text-align: center;
      font-size: 30px;
    }

    strong,
    span {
      font-size: 18px;
      text-align: left;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin: 30px auto 30px auto;
`;
