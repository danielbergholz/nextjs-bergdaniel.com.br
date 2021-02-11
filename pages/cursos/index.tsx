import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';

import api from '../../services/api';
import {
  Container,
  Course,
  Thumbnail,
  CourseList,
  Gold,
} from '../../styles/cursos/styles';

interface PlaylistItem {
  kind: string;
  etag: string;
  id: string;
  slug?: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: '';
    thumbnails: {
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    localized: {
      title: string;
      description: '';
    };
  };
}

interface PropTypes {
  CoursesPlaylists: PlaylistItem[];
  OtherPlaylists: PlaylistItem[];
}

export default function Cursos({
  CoursesPlaylists,
  OtherPlaylists,
}: PropTypes): JSX.Element {
  return (
    <>
      <Head>
        <title>Cursos | Daniel Berg</title>
        <meta
          name="og:title"
          property="og:title"
          content="Cursos e tutoriais"
        />
        <meta
          name="description"
          content="Cursos gratuitos de Trello, Linux e Desenvolvimento Web focado em tecnologias javascript"
        />
      </Head>
      <Container>
        <h1>
          Conteúdos
          <Gold> premium</Gold>
        </h1>
        <CourseList>
          <Course>
            <Link href="/cursos/o-guia-do-dev-frontend">
              <a>
                <Thumbnail>
                  <img
                    src="/assets/o_guia_do_dev_frontend.png"
                    alt="O guia do desenvolvedor frontend"
                  />
                </Thumbnail>
              </a>
            </Link>
            <span>E-book: O Guia do Dev Frontend</span>
          </Course>

          <Course>
            <Thumbnail id="thumbnail">
              <p>em breve</p>
            </Thumbnail>
            <span>Curso de React</span>
          </Course>
        </CourseList>

        <h1>Cursos gratuitos</h1>
        <CourseList>
          {CoursesPlaylists.map((playlist: PlaylistItem) => (
            <Course key={playlist.id}>
              <Link href="/cursos/[slug]" as={`/cursos/${playlist.slug}`}>
                <a>
                  <Thumbnail>
                    <img
                      src={playlist.snippet.thumbnails.maxres.url}
                      alt={playlist.snippet.title}
                    />
                  </Thumbnail>
                </a>
              </Link>
              <span>{playlist.snippet.title}</span>
            </Course>
          ))}
        </CourseList>

        <h1>Outros conteúdos</h1>
        <CourseList>
          {OtherPlaylists.map((playlist: PlaylistItem) => (
            <Course key={playlist.id}>
              <Link href="/cursos/[slug]" as={`/cursos/${playlist.slug}`}>
                <a>
                  <Thumbnail>
                    <img
                      src={playlist.snippet.thumbnails.maxres.url}
                      alt={playlist.snippet.title}
                    />
                  </Thumbnail>
                </a>
              </Link>
              <span>{playlist.snippet.title}</span>
            </Course>
          ))}
        </CourseList>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/playlists', {
    params: {
      part: 'snippet',
      key: process.env.YOUTUBE_API_KEY,
      channelId: process.env.CHANNEL_ID,
      maxResults: 50,
    },
  });

  const CoursesPlaylists: PlaylistItem[] = [];
  const OtherPlaylists: PlaylistItem[] = [];

  data.items.forEach((item: PlaylistItem) => {
    if (item.snippet.title.toLowerCase().includes('curso')) {
      CoursesPlaylists.push(item);
    } else {
      OtherPlaylists.push(item);
    }
  });

  CoursesPlaylists.forEach((item: PlaylistItem) => {
    item.slug = item.snippet.title
      .split('Curso de ')[1]
      .toLowerCase()
      .replace(/ /g, '-');
  });

  OtherPlaylists.forEach((item: PlaylistItem) => {
    item.slug = item.snippet.title.toLowerCase().replace(/ /g, '-');
  });

  return {
    props: {
      CoursesPlaylists,
      OtherPlaylists,
    },
  };
};
