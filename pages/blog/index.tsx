import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';

import { client } from '../../utils/prismic-configuration';
import { Container, Post, Text } from '../../styles/blog/styles';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
// import { Document } from 'prismic-javascript/types/documents';

interface PropTypes {
  posts: ApiSearchResponse;
  // home: Document;
}

export default function Blog({ posts }: PropTypes): JSX.Element {
  return (
    <>
      <Head>
        <title>Blog | Daniel Berg</title>
        <meta name="og:title" property="og:title" content="Blog" />
        <meta
          name="description"
          content="Blog sobre conteúdos de desenvolvimento web com JavaScript"
        />
      </Head>
      <Container>
        {posts.results.map((post) => (
          <Link href="/blog/[uid]" as={`/blog/${post.uid}`} key={post.uid}>
            <a>
              <Post>
                <img
                  src={`https://i.ytimg.com/vi/${post.data.video_id}/maxresdefault.jpg`}
                  alt={RichText.asText(post.data.title)}
                />
                <Text>
                  {RichText.render(post.data.title)}
                  <br />
                  {RichText.render(post.data.description)}
                  <br />
                  <span>{post.data.formattedDate}</span>
                </Text>
              </Post>
            </a>
          </Link>
        ))}
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
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

  // const home = await client.getSingle('blog_post', {
  //   orderings: '[my.post.date desc]',
  // });

  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { orderings: '[my.post.date desc]' }
  );

  posts.results.map((post) => {
    const dateArray = post.data.date.split('-');
    post.data.formattedDate = `${dateArray[2]} de ${
      mapNumberToMonth[dateArray[1] - 1]
    } de ${dateArray[0]}`;
  });

  return {
    props: {
      posts,
      // home,
    },
  };
};
