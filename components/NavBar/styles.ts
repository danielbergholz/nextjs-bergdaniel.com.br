import styled from 'styled-components';

interface ContainerProps {
  tab: number;
  isOpen: boolean;
}

export const Background = styled.header`
  position: relative;
  background-color: #25262a;
  color: #fff;
  padding-top: 4px;
  padding-bottom: 4px;

  a {
    color: #fff;
    font-family: 'Source Sans Pro', sans-serif;
  }

  svg {
    animation-name: loadAnimation;
    animation-duration: 150ms;
  }
`;

export const MenuBar = styled.span`
  width: 30px;
  height: 3px;
  border-radius: 1px;
  background-color: #fff;
  display: block;
  transition: all 150ms;
`;

export const MenuIcon = styled.a<ContainerProps>`
  cursor: pointer;
  display: none;

  & ${MenuBar}:nth-child(1) {
    transform: ${(props): string =>
      props.isOpen ? 'rotate(45deg) translate3d(5px, 4px, 0)' : ''};
  }

  & ${MenuBar}:nth-child(2) {
    margin: 6px 0;
    opacity: ${(props): number => (props.isOpen ? 0 : 1)};
  }

  & ${MenuBar}:nth-child(3) {
    transform: ${(props): string =>
      props.isOpen ? 'rotate(-45deg) translate3d(9px, -8px, 0)' : ''};
  }

  @media (max-width: 950px) {
    display: block;
  }
`;

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  li:nth-child(${(props): number => props.tab}) a {
    color: #64f4ac;
  }

  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 30px;
    color: #64f4ac;
  }

  li {
    margin-left: 25px;
    transition: color 150ms ease;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 950px) {
    width: 90vw;

    p {
      font-size: 26px;
    }

    ul {
      z-index: 10;
      position: fixed;
      top: 40px;
      left: ${(props): string => (props.isOpen ? '50%' : '100%')};
      display: ${(props): string => (props.isOpen ? 'block' : 'none')};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #25262a;
      width: 80vw;
      height: 100vh;
      transition: left 0.4s ease;
    }

    svg {
      order: 1;
      margin-left: 20px;
      margin-top: 10px;
      display: inline-block;
    }

    li {
      display: block;
      width: 100%;
      border-bottom: 1px solid #737373;
      padding: 10px 0 10px 25px;
      margin-left: 0;
    }
  }
`;
