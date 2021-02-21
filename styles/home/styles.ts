import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 200px;
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;

  @media (max-width: 750px) {
    padding-top: 80px;
    width: 90vw;
  }
`;

export const RightText = styled.section`
  margin-left: 60px;
  max-width: 800px;

  h1 {
    display: inline-block;
    color: #25262a;
    padding: 2px 4px;
    font-size: 18px;
    background-color: #64f4ac;
    font-weight: 700;
    border-radius: 4px;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 35px;
    font-weight: 700;
  }

  p {
    margin-top: 5px;
    display: block;
    font-size: 22px;
  }

  @media (max-width: 750px) {
    text-align: center;
    margin-left: 0;

    h1 {
      font-size: 16px;
      margin-bottom: 20px;
    }

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 19px;
    }
  }
`;

export const Left = styled.figure`
  @media (max-width: 750px) {
    margin-bottom: 40px;
  }
`;

export const Hello = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
  }

  @media (max-width: 750px) {
    flex-direction: column;

    img {
      width: 180px;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  @media (max-width: 750px) {
    display: none;
  }
`;
