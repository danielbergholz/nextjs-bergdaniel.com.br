import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const Hello = styled.div`
  display: flex;
  margin-top: 150px;
  align-items: center;
  justify-content: center;

  h1 {
    margin-left: 60px;
    font-size: 70px;
  }

  @media (max-width: 450px) {
    margin-top: 80px;

    h1 {
      font-size: 40px;
      margin-left: 30px;
    }
  }
`;

export const Section = styled.div`
  text-align: center;
  margin-top: 70px;

  p {
    font-size: 30px;
  }

  @media (max-width: 450px) {
    p {
      font-size: 22px;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;

  a {
    display: flex;
    color: #fff;

    p {
      margin-left: 8px;
    }
  }

  @media (max-width: 870px) {
    justify-content: space-around;

    p {
      display: none;
    }
  }
`;
