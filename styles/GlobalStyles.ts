import {
  createGlobalStyle,
  css,
  FlattenSimpleInterpolation,
} from 'styled-components';

interface GlobalStyleProps {
  lock: boolean;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height:100%;
  }

  body{
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 300ms;
    overflow: ${(props): string => (props.lock === true ? 'hidden' : 'auto')};
  }


  body, input, button {
    font-size: 14px;
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;

  }

  svg {
    cursor: pointer
  }

  ul {
    list-style:none;
  }

  li {
    list-style-type: none;
    font-weight: 700;
    font-family: 'Source Sans Pro', Arial;
    font-size: 30px;
  }

  a {
    text-decoration:none;
  }

  @keyframes loadAnimation {
    0% {
      opacity: 0;
    }

    100% {
      opacity:1
    }
  }

  ${(props): FlattenSimpleInterpolation =>
    props.theme === 'dark'
      ? css`
          body {
            background-color: #2d2e32;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2325262a' fill-opacity='0.31'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            color: #fafafa;
          }

          svg {
            color: #fafafa;
          }

          p {
            color: #fafafa;
          }

          a {
            color: #fafafa;
          }

          input,
          textarea {
            border: 1px solid #3e3f43;
            background-color: #3e3f43;
            color: #fff;
          }

          #thumbnail {
            background-color: #4a4b50;
          }

          #green-text {
            color: #64f4ac;
          }
        `
      : css`
          body {
            color: #25262a;
            background-color: #f0f0f0;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d8d8d8' fill-opacity='0.24'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          }

          svg {
            color: #25262a;
          }

          p {
            color: #25262a;
          }

          a {
            color: #25262a;
          }

          input,
          textarea {
            border: 1px solid #e3e3e3;
            background-color: #e3e3e3;
            color: #858585;
          }

          #thumbnail {
            background-color: #c4c4c4;
          }

          #green-text {
            color: #2dbf76;
          }
        `}
`;
