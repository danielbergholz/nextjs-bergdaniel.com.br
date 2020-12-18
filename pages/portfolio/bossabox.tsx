import React from 'react';
import Head from 'next/head';
import { FaYoutube, FaGithub } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/bossabox/styles';
import Button from '../../components/Button';

const Bossabox: React.FC = () => {
  return (
    <>
      <Head>
        <title>Bossabox | Portfolio | Daniel Berg</title>
        <meta name="og:title" property="og:title" content="Desafio Bossabox" />
        <meta
          name="description"
          content="Desafio fullstack com React e Adonis para a plataforma Bossabox"
        />
      </Head>
      <Container>
        <h1>Bossabox</h1>
        <img src="/assets/bossabox.jpeg" alt="Logo Bossabox" />
        <strong>
          - Projeto:
          <span> Desenvolvimento Web</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor Fullstack</span>
        </strong>
        <strong>
          - Tecnologias do Frontend:
          <span> React e Typescript</span>
        </strong>
        <strong>
          - Tecnologias do backend:
          <span> Adonis V4</span>
        </strong>
        <strong>
          - Hospedagem:
          <span> Netlify e Heroku</span>
        </strong>
        <strong>
          - Contexto:
          <span>
            {' '}
            Para entrar na plataforma de freelancing chamada Bossabox, é
            necessário fazer o desafio VUTTR (Very Useful Tools to Remember),
            que é um sistema para salvar links de ferramentas que você considera
            úteis. E como eu me cadastrei na Bossabox como desenvolvedor
            Fullstack, eu fiz os desafios de frontend e backend.
          </span>
        </strong>
        <strong>
          - Descrição técnica:
          <span>
            {' '}
            Com a ajuda do framework Adonis, foi construído um backend em
            formato de API REST, e o banco de dados que eu escolhi para essa
            desafio foi o PostgreSQL. Ele tem autenticação via JWT, um CRUD
            completo, caching com o Redis e documentação no SWAGGER. Já no
            frontend eu utilizei o react com typescript, styled components como
            CSS, e react-context para compartilhar o estado do usuário logado e
            do componente de mensagem de toast.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="https://app.bossabox.com/u/daniel-bergholz">
            <CgProfile size={25} color="#fff" />
            Meu Perfil
          </Button>
          <Button link="https://github.com/danielbergholz/vuttr-frontend">
            <FaGithub size={25} color="#fff" />
            Código Fonte
          </Button>
          <Button link="https://youtube.com/playlist?list=PLbV6TI03ZWYVe4TTWiaLO4gBdXLZLacJ_">
            <FaYoutube size={25} color="#fff" />
            Tutorial
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default Bossabox;
