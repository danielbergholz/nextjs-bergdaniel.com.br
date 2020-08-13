import { GetStaticProps } from 'next';
import Link from 'next/link';

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
    <Container>
      <p>Cursos gratuitos</p>
      <CourseList>
        {CoursesPlaylists.map((playlist: PlaylistItem) => (
          <Course key={playlist.id}>
            <Link href={`/cursos/${playlist.slug}`}>
              <a>
                <Thumbnail>
                  <img
                    src={playlist.snippet.thumbnails.maxres.url}
                    alt="Javascript"
                  />
                </Thumbnail>
              </a>
            </Link>
            <span>{playlist.snippet.title}</span>
          </Course>
        ))}

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

      <p>Outros</p>
      <CourseList>
        {OtherPlaylists.map((playlist: PlaylistItem) => (
          <Course key={playlist.id}>
            <Link href={`/cursos/${playlist.slug}`}>
              <a>
                <Thumbnail>
                  <img
                    src={playlist.snippet.thumbnails.maxres.url}
                    alt="Javascript"
                  />
                </Thumbnail>
              </a>
            </Link>
            <span>{playlist.snippet.title}</span>
          </Course>
        ))}
      </CourseList>
    </Container>
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
