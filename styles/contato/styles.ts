import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface FormProps {
  loading: number;
}

export const Container = styled.main`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  animation: loadAnimation;
  animation-duration: 500ms;

  h1 {
    margin-top: 60px;
    margin-bottom: 15px;
  }
`;

export const Contact = styled.section`
  display: flex;
  place-content: center;
  margin-top: 40px;

  a {
    margin-top: 6px;
    display: flex;
    align-items: center;
    color: #fff;
  }

  p {
    margin-left: 8px;
    font-size: 24px;
  }

  img {
    margin-right: 40px;
    border-radius: 50%;
  }

  @media (max-width: 700px) {
    img {
      display: none;
    }
  }
`;

export const SocialMedia = styled.aside`
  display: flex;
  flex-direction: column;
  place-content: center;

  @media (max-width: 700px) {
    p {
      font-size: 20px;
    }
  }
`;

export const CopyToClipBoard = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

export const Form = styled.form<FormProps>`
  input,
  textarea {
    width: 700px;
    padding: 10px 15px;
    border-radius: 6px;
    font-size: 16px;
  }

  input::placeholder,
  textarea::placeholder {
    color: #ababab;
  }

  br + input {
    margin-top: 6px;
  }

  textarea {
    resize: none;
    margin-top: 6px;
    height: 200px;
  }

  button {
    margin: 15px 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 20px;
    border: 0;
    border-radius: 6px;
    color: #fff;
    background-color: #6473f5;
    font-weight: 700;
    padding: 6px 14px;
    transition: background-color 200ms;
    ${(props): FlattenSimpleInterpolation =>
      props.loading === 1
        ? css`
            opacity: 0.7;
            pointer-events: none;
          `
        : css`
            pointer-events: all;
            opacity: 1;
          `}
  }

  button:hover {
    background-color: #8692ff;
  }

  @media (max-width: 950px) {
    input,
    textarea {
      width: 500px;
    }
  }

  @media (max-width: 700px) {
    input,
    textarea {
      width: 288px;
    }
  }
`;
