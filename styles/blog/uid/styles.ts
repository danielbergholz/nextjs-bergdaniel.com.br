import styled from 'styled-components';

export const Container = styled.main`
  width: 80vw;
  margin: 40px auto 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;

  h1:first-child {
    text-align: center;
  }

  h1 {
    font-weight: 700;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 30px;
  }

  p {
    font-size: 18px;
  }

  span {
    text-align: center;
    display: block;
    font-size: 16px;
    color: #64f4ac;
  }

  @media (max-width: 950px) {
    margin: 30px auto 0 auto;
    width: 90vw;

    h1 {
      font-size: 28px;
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
