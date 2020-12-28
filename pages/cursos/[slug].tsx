/* eslint-disable no-param-reassign */
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useState, useCallback } from 'react';
import { IoMdDownload } from 'react-icons/io';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
  Container,
  Video,
  UpperTitle,
  Download,
  FlexboxLeft,
  FlexboxRight,
  NextVideos,
  NextVideoTitle,
} from '../../styles/cursos/slug/styles';
import api from '../../services/api';

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

interface Video {
  playlistId?: string;
  slidesLink?: string;
  snippet: {
    title: string;
    mediumTitle: string;
    shortTitle: string;
    position: number;
    description: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

interface PathProps {
  params: {
    slug: string;
  };
}

interface PropTypes {
  data: Video[];
  courseInfo: {
    playlistId: string;
    courseName: string;
    slidesLink: string;
  };
  slug: string;
}

export default function VideoPlayer({
  data,
  courseInfo,
}: PropTypes): JSX.Element {
  const [selectedVideo, setSelectedVideo] = useState<Video>(data[0]);

  const changeVideo = useCallback(
    (id: number) => {
      setSelectedVideo(data[id]);
      localStorage.setItem(
        `@bergdaniel:${courseInfo.playlistId}`,
        JSON.stringify(data[id])
      );
    },
    [data, courseInfo.playlistId]
  );

  return (
    <>
      <Head>
        <title>{courseInfo.courseName} | Daniel Berg</title>
        <meta
          name="og:title"
          property="og:title"
          content={courseInfo.courseName}
        />
        <meta name="description" content={selectedVideo.snippet.description} />
      </Head>
      <Container>
        <FlexboxLeft>
          <h1>{courseInfo.courseName}</h1>
          <UpperTitle>
            <h2>
              {selectedVideo.snippet.mediumTitle || selectedVideo.snippet.title}
            </h2>
            {courseInfo.slidesLink !== '' && (
              <a
                href={courseInfo.slidesLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download>
                  <span>Download</span>
                  <IoMdDownload color="#F1FA8C" size={20} />
                </Download>
              </a>
            )}
          </UpperTitle>
          <iframe
            title="videoPlayer"
            src={`https://www.youtube.com/embed/${selectedVideo.snippet.resourceId.videoId}?rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <span>{selectedVideo.snippet.description}</span>
        </FlexboxLeft>
        <FlexboxRight>
          <NextVideoTitle>
            <strong>Próximas aulas</strong>
          </NextVideoTitle>
          <NextVideos id="next-videos">
            <PerfectScrollbar>
              {data.map((video) => {
                const {
                  position,
                  thumbnails,
                  shortTitle,
                  mediumTitle,
                } = video.snippet;
                return (
                  <Video
                    key={String(position)}
                    onClick={(): void => changeVideo(position)}
                  >
                    <img
                      src={thumbnails.medium.url}
                      alt={video.snippet.title}
                    />
                    <h3>{shortTitle}</h3>
                    <h4>{mediumTitle}</h4>
                  </Video>
                );
              })}
            </PerfectScrollbar>
          </NextVideos>
        </FlexboxRight>
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('/playlists', {
    params: {
      part: 'snippet',
      key: process.env.YOUTUBE_API_KEY,
      channelId: process.env.CHANNEL_ID,
      maxResults: 50,
    },
  });

  const AllPlaylists = [];

  data.items.forEach((item: PlaylistItem) => {
    if (item.snippet.title.toLowerCase().includes('curso')) {
      AllPlaylists.push({
        params: {
          slug: item.snippet.title
            .split('Curso de ')[1]
            .toLowerCase()
            .replace(/ /g, '-'),
        },
      });
    } else {
      AllPlaylists.push({
        params: { slug: item.snippet.title.toLowerCase().replace(/ /g, '-') },
      });
    }
  });

  return { paths: AllPlaylists, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  const mapSlugToProperties = {};

  const response = await api.get('/playlists', {
    params: {
      part: 'snippet',
      key: process.env.YOUTUBE_API_KEY,
      channelId: process.env.CHANNEL_ID,
      maxResults: 50,
    },
  });

  response.data.items.forEach((item: PlaylistItem) => {
    if (item.snippet.title.toLowerCase().includes('curso')) {
      mapSlugToProperties[
        item.snippet.title
          .split('Curso de ')[1]
          .toLowerCase()
          .replace(/ /g, '-')
      ] = {
        playlistId: item.id,
        courseName: item.snippet.title,
        slidesLink: '',
      };
    } else {
      mapSlugToProperties[
        item.snippet.title.toLowerCase().replace(/ /g, '-')
      ] = {
        playlistId: item.id,
        courseName: item.snippet.title,
        slidesLink: '',
      };
    }
  });

  const { data } = await api.get('/playlistItems', {
    params: {
      part: 'snippet',
      key: process.env.YOUTUBE_API_KEY,
      maxResults: 50,
      playlistId: mapSlugToProperties[params.slug].playlistId,
    },
  });

  // COLOCAR AQUI O LINK DOS SLIDES DOS CURSOS (CASO EXISTA)
  mapSlugToProperties['javascript'].slidesLink =
    'https://mega.nz/folder/cCRglawa#xS4MEA4NrhBgplCCLxqFDA';
  mapSlugToProperties['terminal-linux'].slidesLink =
    'https://mega.nz/#F!AbAQEYBT!UYpnwXoXwjFcDhcf2ZXi3g';

  const filteredData: Video[] = data.items.filter(
    (video: Video) => video.snippet.title !== 'Private video'
  );

  if (filteredData[0].snippet.title.includes('-')) {
    filteredData.forEach((element: Video) => {
      const { title } = element.snippet;
      const splitTitle = title.split('- ')[1];
      const splitSplitTitle = splitTitle.split(':')[0];

      element.snippet.mediumTitle = splitTitle;
      element.snippet.shortTitle = splitSplitTitle;
    });
  } else {
    filteredData.forEach((element: Video) => {
      element.snippet.mediumTitle = element.snippet.shortTitle =
        element.snippet.title;
    });
  }

  return {
    props: {
      slug: params.slug,
      data: filteredData,
      courseInfo: mapSlugToProperties[params.slug],
    },
  };
};
