import styled from 'styled-components';

export const Container = styled.main`
  width: 80vw;
  margin: 100px auto 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: loadAnimation;
  animation-duration: 500ms;

  a:first-of-type article {
    border: solid 1px #64f4ac;
  }

  @media (max-width: 900px) {
    margin: 30px auto 0 auto;
  }
`;

export const Post = styled.article`
  max-width: 1200px;
  padding: 20px;
  border-radius: 6px;
  background-color: #25262a;
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  img {
    width: 320px;
    height: 180px;
    border-radius: 6px;
    display: inline;
    margin-right: 15px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 10px 10px 0 10px;

    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }
  }
`;

export const Text = styled.section`
  h1 {
    color: #fff;
    font-weight: 700;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 30px;
  }

  p {
    color: #fff;
    font-size: 18px;
  }

  span {
    font-size: 16px;
    color: #64f4ac;
  }

  @media (max-width: 900px) {
    margin: 10px 0 10px 0;

    h1 {
      text-align: center;
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }
`;
