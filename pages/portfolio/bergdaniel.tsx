import Head from 'next/head';
import { FaGithub, FaYoutube } from 'react-icons/fa';

import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/bergdaniel/styles';
import Button from '../../components/Button';

export default function BergDaniel(): JSX.Element {
  return (
    <>
      <Head>
        <title>Site Pessoal | Portfolio | Daniel Berg</title>
        <meta name="og:title" property="og:title" content="Site Pessoal" />
        <meta
          name="description"
          content="Portfolio e plataforma de cursos online do Daniel Bergholz"
        />
      </Head>
      <Container>
        <h1>Berg Daniel</h1>
        <img src="/assets/berg.png" alt="berg daniel" />
        <strong>
          - Projeto:
          <span> Desenvolvimento Web</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor Frontend, Designer</span>
        </strong>
        <strong>
          - Tecnologias do Frontend:
          <span> React, NextsJS</span>
        </strong>
        <strong>
          - Hospedagem:
          <span> Netlify, Vercel</span>
        </strong>
        <strong>
          - Contexto:
          <span>
            {' '}
            A principal função desse site era ser o meu portfolio, mas eu quis
            ir além disso. Eu sempre digo nas minhas redes sociais que o YouTube
            é um dos melhores recursos para se estudar um assunto novo, porém
            existem muitas distrações no site. Então coloquei aqui todos os meus
            cursos gratuitos publicados no YouTube, para assim, meus seguidores
            conseguirem ter melhor foco para estudar.
          </span>
        </strong>
        <strong>
          - Descrição técnica:
          <span>
            {' '}
            Para tornar isso possível, tive que consumir a API do YouTube para
            pegar dados de playlists e vídeos. A primeira versão desse site eu
            usei a arquitetura de single page application (SPA) com React e
            Typescript para a página ter um UX melhor e mais fluido. O botão de
            trocar o tema de light para dark foi feito com o react context. O
            site final é estático, então hospedei inicialmente no Netlify, e o
            formulário da aba de contato foi realizado com a ajuda de um serviço
            chamado Formspree. Atualmente o site foi refeito com NextJS para
            melhorar o SEO, e acabei optando pela hospedagem da vercel.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="https://github.com/danielbergholz/nextjs-bergdaniel.com.br">
            <FaGithub size={25} color="#fff" />
            Código Fonte
          </Button>
          <Button link="https://www.youtube.com/playlist?list=PLbV6TI03ZWYWq8NlvpMGUwaVlzzfyZeld">
            <FaYoutube size={25} color="#fff" />
            Tutorial
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}
