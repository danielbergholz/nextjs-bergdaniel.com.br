import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 120px;
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;
  text-align: center;

  img {
    border-radius: 10px;
  }

  @media (max-width: 750px) {
    padding-top: 50px;
  }
`;

export const ButtonsContainer = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin-top: 20px;
  }
`;

export const Button = styled.button<{ color?: string; fontColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  background-color: ${(props) => props.color || '#000'};
  border: none;
  border-radius: 4px;
  padding-top: 6px;
  padding-bottom: 6px;

  h1 {
    font-size: 20px;
    padding-left: 10px;
    color: ${(props) => props.fontColor || '#fff'};
  }
`;
