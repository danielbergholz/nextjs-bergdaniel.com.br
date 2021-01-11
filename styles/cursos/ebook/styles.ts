import styled from 'styled-components';

export const Container = styled.section<{ top?: string }>`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;
  padding-top: ${(props) => props.top || '25px'};
  padding-bottom: 25px;

  span,
  span > a {
    text-decoration: underline;
    text-decoration-color: #64f4ac;
  }

  @media (max-width: 700px) {
    &:not(:first-child) {
      padding-top: 20px;
    }
  }
`;

export const Background = styled.div`
  background: linear-gradient(-7deg, transparent 30%, #25262a 30%);
`;

export const SecondBackground = styled.div`
  background-color: #25262a;
`;

export const MainFlex = styled.main`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
    width: 100%;
    max-width: 480px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    img:first-child {
      margin-top: 60px;
    }
  }

  @media (max-width: 700px) {
    margin-bottom: 0px;
  }
`;

export const MiddleText = styled.div`
  margin-top: 40px;
  margin-bottom: 140px;

  h1 {
    margin-bottom: 38px;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }

  h2 {
    margin-top: 10px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 28px;
    font-weight: normal;
  }

  @media (max-width: 1200px) {
    margin-bottom: 40px;

    h1 {
      margin-bottom: 30px;
    }
  }

  @media (max-width: 700px) {
    margin-bottom: 40px;

    h1 {
      font-size: 30px;
      margin-bottom: 0px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;

export const RightText = styled.div`
  margin-left: 40px;

  h1,
  h2 {
    font-family: 'Source Sans Pro', sans-serif;
    max-width: 950px;
  }

  h1 {
    border-left: 6px solid #64f4ac;
    padding-left: 6px;
    font-size: 40px;
    font-weight: bold;
  }

  h2 {
    margin-top: 10px;
    font-size: 30px;
    font-weight: normal;
  }

  @media (max-width: 1200px) {
    margin-left: 0px;
    margin-top: 30px;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;

export const BigText = styled.div`
  margin-right: 40px;

  h1,
  h2 {
    color: #fff;
    font-family: 'Source Sans Pro', sans-serif;
    max-width: 950px;
  }

  h1 {
    font-size: 52px;
    font-weight: bold;
  }

  h2 {
    font-size: 35px;
    font-weight: normal;
  }

  button {
    margin-top: 20px;
  }

  @media (max-width: 1200px) {
    margin-right: 0;
    margin-bottom: 100px;
    flex-direction: column;
    text-align: center;

    button {
      margin: 20px auto 0 auto;
    }
  }

  @media (max-width: 700px) {
    h1,
    h2 {
      width: auto;
    }

    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;

export const Profile = styled.section`
  margin-top: 140px;
  margin-bottom: 140px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
  }

  h1 {
    border-left: 6px solid #64f4ac;
    padding-left: 6px;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
  }

  h2 {
    margin-top: 20px;
    font-size: 25px;
    font-weight: normal;
    color: #fff;
  }

  div {
    margin-left: 40px;
  }

  @media (max-width: 700px) {
    margin-top: 30px;
    margin-bottom: 30px;

    h1 {
      margin-top: 40px;
      font-size: 30px;
    }

    h2 {
      margin-top: 10px;
      font-size: 20px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    div {
      margin-left: 0px;
    }
  }
`;

export const Faq = styled.section`
  margin-top: 60px;

  h1,
  h2 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: bold;
  }

  h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;
  }

  h2 {
    border-left: 4px solid #64f4ac;
    padding-left: 6px;
    margin-top: 10px;
    font-size: 30px;
  }

  p {
    margin-top: 10px;
    font-size: 26px;
    margin-bottom: 40px;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 22px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const AlignButton = styled.div`
  margin-top: 80px;
  margin-bottom: 60px;

  button {
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;
