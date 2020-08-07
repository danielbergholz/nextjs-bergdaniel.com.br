import React from 'react';
import Link from 'next/link';

import {
  Container,
  Course,
  Thumbnail,
  CourseList,
  Gold,
} from '../../styles/cursos/styles';

const Cursos: React.FC = () => {
  return (
    <Container>
      <p>Cursos gratuitos</p>
      <CourseList>
        <Course>
          <Link href="/cursos/javascript">
            <Thumbnail>
              <img
                src="https://i.ytimg.com/vi/pL9nX6Ac2Lc/maxresdefault.jpg"
                alt="Javascript"
              />
            </Thumbnail>
          </Link>
          <span> Curso de Javascript</span>
        </Course>
        <Course>
          <Link href="/cursos/terminallinux">
            <Thumbnail>
              <img
                src="https://i.ytimg.com/vi/VRR3V42EdSg/maxresdefault.jpg"
                alt="Terminal Linux"
              />
            </Thumbnail>
          </Link>
          <span> Curso de Terminal Linux</span>
        </Course>
        <Course>
          <Link href="/cursos/trello">
            <Thumbnail>
              <img
                src="https://i.ytimg.com/vi/ck7WWHaAgpU/maxresdefault.jpg"
                alt="Trello"
              />
            </Thumbnail>
          </Link>
          <span> Curso de Trello</span>
        </Course>
        <Course>
          <Thumbnail id="thumbnail">
            <p> em breve</p>
          </Thumbnail>
          <span> Curso de CSS</span>
        </Course>
      </CourseList>

      <p>
        Cursos
        <Gold> premium</Gold>
      </p>
      <CourseList>
        <Course>
          <Thumbnail id="thumbnail">
            <p> em breve</p>
          </Thumbnail>
          <span> Curso de React</span>
        </Course>
        <Course>
          <Thumbnail id="thumbnail">
            <p> em breve</p>
          </Thumbnail>
          <span> Curso de Node</span>
        </Course>
      </CourseList>
    </Container>
  );
};

export default Cursos;

{
  /* <Course>
  <Link
    to={{
      pathname: '/cursos/javascript',
      state: {
        courseName: 'Curso de Javascript',
        playlistId: 'PLbV6TI03ZWYVP6EByYoUxZJeZaqitHi9r',
        slidesLink: 'https://mega.nz/folder/cCRglawa#xS4MEA4NrhBgplCCLxqFDA',
      },
    }}
  >
    <Thumbnail>
      <img
        src="https://i.ytimg.com/vi/pL9nX6Ac2Lc/maxresdefault.jpg"
        alt="Javascript"
      />
    </Thumbnail>
  </Link>
  <span> Curso de Javascript</span>
</Course>; */
}
