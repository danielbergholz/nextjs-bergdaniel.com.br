import styled from 'styled-components';

export const Container = styled.main`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;
  padding-bottom: 40px;

  h1 {
    margin-top: 40px;
    margin-bottom: 25px;
  }

  h1,
  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 32px;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    h1 {
      text-align: center;
    }
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const Thumbnail = styled.div`
  height: 180px;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 320px;
    height: 180px;
    border-radius: 5px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 32px;
    font-weight: bold;
  }

  > p {
    color: #fff;
  }
`;

export const CourseList = styled.div`
  display: grid;
  gap: 30px 0;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1720px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Course = styled.div`
  span {
    font-size: 18px;
  }
`;

export const Gold = styled.span`
  display: inline;
  color: #ebce00;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 32px;
`;
