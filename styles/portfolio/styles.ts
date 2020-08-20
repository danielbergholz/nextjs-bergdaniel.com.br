import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  animation: loadAnimation;
  animation-duration: 500ms;

  p {
    font-weight: 700;
    margin-top: 40px;
    margin-bottom: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 32px;
  }

  strong,
  span {
    font-size: 18px;
  }

  span {
    font-weight: 400;
  }

  @media (max-width: 700px) {
    p {
      text-align: center;
      font-size: 30px;
    }

    strong,
    span {
      font-size: 16px;
    }
  }
`;

export const Project = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  button {
    margin-top: 14px;
    padding: 8px;
    font-size: 19px;
  }

  img {
    width: 165px;
    border-radius: 6px;
    display: inline;
    margin-right: 15px;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    button {
      margin: 14px auto 0 auto;
    }

    img {
      margin: 0 auto;
      width: 125px;
    }
  }
`;

export const Text = styled.div`
  @media (max-width: 700px) {
    margin: 10px 0 10px 0;
  }
`;
