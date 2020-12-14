import React from 'react';
import Head from 'next/head';
import { FaGithub, FaYoutube, FaDiscord, FaLinkedin } from 'react-icons/fa';
import { BsFillLightningFill } from 'react-icons/bs';

import { Container, Button, ButtonsContainer } from '../styles/links/styles';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Links | Daniel Berg</title>
        <meta name="og:title" property="og:title" content="Daniel Bergholz" />
        <meta
          name="description"
          content="Links de YouTube, canal do Discord, GitHub e cursos"
        />
      </Head>
      <Container>
        <img src="/assets/berg.png" alt="Foto de perfil Berg" />
        <ButtonsContainer>
          <a
            href="https://www.youtube.com/channel/UCnmbV9eyMwIl50Ji1ObFxqg/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="#C71D1F">
              <FaYoutube size={30} color="#fff" />
              <h1>YouTube</h1>
            </Button>
          </a>

          <a href="https://bergdaniel.com.br/cursos">
            <Button color="#5BC992">
              <BsFillLightningFill size={30} color="#fff" />
              <h1>Cursos</h1>
            </Button>
          </a>

          <a
            href="https://discord.gg/PkWraebbfY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="#7289D7">
              <FaDiscord size={30} color="#fff" />
              <h1>Discord</h1>
            </Button>
          </a>

          <a
            href="https://www.github.com/danielbergholz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
              <FaGithub size={30} color="#fff" />
              <h1>GitHub</h1>
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-gobbi-bergholz-752379149"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button color="#1060A6">
              <FaLinkedin size={30} color="#fff" />
              <h1>LinkeIn</h1>
            </Button>
          </a>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default Home;
