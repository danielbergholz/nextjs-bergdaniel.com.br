import styled from 'styled-components';

export const Container = styled.main`
  width: 80vw;
  margin: 40px auto 40px auto;
  animation: loadAnimation;
  animation-duration: 500ms;

  h1 {
    text-align: center;
    font-size: 32px;
  }

  h2 {
    font-size: 30px;
  }

  h1,
  h2 {
    font-weight: 700;
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  p {
    font-size: 20px;
    margin-bottom: 5px;
  }

  span {
    text-align: center;
    display: block;
    font-size: 16px;
    color: #64f4ac;
    margin-bottom: 40px;
  }

  img {
    border-radius: 4px;
    margin: 40px auto 40px auto;
    display: block;
    max-width: 100%;
  }

  button {
    margin: 40px auto 40px auto;
    text-align: center;
  }

  @media (max-width: 950px) {
    margin: 30px auto 30px auto;
    width: 90vw;

    h1 {
      font-size: 28px;
    }

    h2 {
      text-align: center;
      font-size: 26px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const AspectRatio = styled.div`
  /* iframe {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 6px;
    width: 100%;
    height: 100%;
  } */

  iframe {
    display: block;
    border-radius: 6px;
    margin-left: auto;
    margin-right: auto;
    width: 1024px;
    height: 576px;
  }

  @media (max-width: 1300px) {
    iframe {
      width: 960px;
      height: 540px;
    }
  }

  @media (max-width: 1200px) {
    iframe {
      width: 854px;
      height: 480px;
    }
  }

  @media (max-width: 1080px) {
    iframe {
      width: 800px;
      height: 450px;
    }
  }

  @media (max-width: 1000px) {
    iframe {
      width: 768px;
      height: 432px;
    }
  }

  @media (max-width: 950px) {
    iframe {
      width: 640px;
      height: 360px;
    }
  }

  @media (max-width: 770px) {
    iframe {
      width: 512px;
      height: 288px;
    }
  }

  @media (max-width: 610px) {
    iframe {
      width: 384px;
      height: 216px;
    }
  }

  @media (max-width: 490px) {
    iframe {
      width: 320px;
      height: 180px;
    }
  }
`;
