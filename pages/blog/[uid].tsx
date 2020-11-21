import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/types/documents';

import { Container, AspectRatio } from '../../styles/blog/uid/styles';
import { client } from '../../utils/prismic-configuration';

interface PathProps {
  params: {
    uid: string;
  };
}

interface PropTypes {
  post: Document;
}

export default function BlogPost({ post }: PropTypes): JSX.Element {
  return (
    <>
      <Head>
        <title>{RichText.asText(post.data.title)} | Blog | Daniel Berg</title>
        <meta name="og:title" property="og:title" content="Blog" />
        <meta
          name="description"
          content={RichText.asText(post.data.description)}
        />
      </Head>
      <Container>
        {RichText.render(post.data.title)}
        <span>{post.data.formattedDate}</span>
        <AspectRatio>
          <iframe
            title="videoPlayer"
            src={`https://www.youtube.com/embed/${post.data.video_id}?rel=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </AspectRatio>

        {post.data.body.map((section) => RichText.render(section.primary.text))}
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { orderings: '[my.post.date desc]' }
  );

  const allBlogPosts = [];

  posts.results.map((post) => {
    allBlogPosts.push({ params: { uid: post.uid } });
  });

  return {
    paths: allBlogPosts,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
  const mapNumberToMonth = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const post = await client.getByUID('blog_post', params.uid, {
    lang: 'pt-br',
  });

  const dateArray = post.data.date.split('-');
  post.data.formattedDate = `${dateArray[2]} de ${
    mapNumberToMonth[dateArray[1] - 1]
  } de ${dateArray[0]}`;

  return {
    props: {
      post,
    },
  };
};
