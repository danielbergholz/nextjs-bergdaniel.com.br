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
    font-family: 'Roboto', sans-serif;
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
    font-family: 'Roboto', Helvetica, sans-serif;
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
    text-transform: uppercase;
    font-family: 'Anton', Helvetica, Arial;
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
            background-color: #444444;
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
            border: 1px solid #5c5c5c;
            background-color: #5c5c5c;
            color: #fff;
          }

          #thumbnail {
            background-color: #717171;
          }

          #next-videos {
            background-color: #333;
          }
        `
      : css`
          body {
            background-color: #f0f0f0;
            color: #272727;
          }

          svg {
            color: #272727;
          }

          p {
            color: #272727;
          }

          a {
            color: #272727;
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

          #next-videos {
            background-color: #4f4f4f;
          }
        `}
`;
