import styled from 'styled-components';

export const Container = styled.main`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 700;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 30px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 32px;
  }

  img {
    width: 165px;
    height: 157px;
    margin: 0 auto;
    border-radius: 5px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 32px;
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
    h1 {
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
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-evenly;
`;
