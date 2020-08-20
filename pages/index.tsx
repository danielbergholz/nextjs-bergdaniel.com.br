import React from 'react';
import Head from 'next/head';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

import {
  Container,
  Hello,
  Left,
  SocialMedia,
  RightText,
} from '../styles/home/styles';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | Daniel Berg</title>
        <meta name="og:title" property="og:title" content="Daniel Bergholz" />
        <meta
          name="description"
          content="Meu nome é Daniel Bergholz, sou Desenvolvedor Fullstack Javascript"
        />
      </Head>
      <Container>
        <Hello>
          <Left>
            <img
              src="/assets/foto_perfil.png"
              alt="Foto de perfil Daniel Bergholz"
            />
            <SocialMedia>
              <a
                href="https://www.youtube.com/channel/UCnmbV9eyMwIl50Ji1ObFxqg/videos?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={36} />
              </a>
              <a
                href="https://www.instagram.com/berg.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={36} />
              </a>
              <a
                href="https://www.github.com/danielbergholz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={36} />
              </a>
            </SocialMedia>
          </Left>
          <RightText>
            <h1>Fullstack Developer</h1>
            <p>
              Trabalho no desenvolvimento de aplicações web performáticas e com
              foco na experiência de usuário
            </p>
            <span>
              Tecnologias que já utilizei: Node, Adonis, React, Gatsby e Next
            </span>
          </RightText>
        </Hello>
      </Container>
    </>
  );
};

export default Home;
