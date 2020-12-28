import React from 'react';
import Head from 'next/head';
import { FaYoutube, FaGithub } from 'react-icons/fa';

import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/teach-other/styles';
import Button from '../../components/Button';

const TeachOther: React.FC = () => {
  return (
    <>
      <Head>
        <title>Teach Other | Portfolio | Daniel Berg</title>
        <meta name="og:title" property="og:title" content="Teach Other" />
        <meta
          name="description"
          content="Plataforma de agendamento de aula particular usando o NextJS"
        />
      </Head>
      <Container>
        <h1>Teach Other</h1>
        <img src="/assets/teach-other.jpg" alt="Logo Teach Other" />
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
          <span> NextJS e Typescript</span>
        </strong>
        <strong>
          - Tecnologias do backend:
          <span> API Routes do NextJS</span>
        </strong>
        <strong>
          - Hospedagem:
          <span> Vercel e MongoDB Atlas</span>
        </strong>
        <strong>
          - Contexto:
          <span>
            {' '}
            Teach Other é uma plataforma de agendamento de aula particular para
            universitários, desenvolvida para a disciplina &quot;Projeto
            Transversal 1&quot; da Universidade de Brasília (UnB).
          </span>
        </strong>
        <strong>
          - Descrição técnica:
          <span>
            {' '}
            No frontend, foi utilizado o NextJS com Typescript e Tailwind CSS.
            Ele é estático e com a rota de perfil do professor sendo renderizada
            no servidor. O backend é serverless através do combo: API Routes +
            MongoDB Atlas. Cada rota é uma função serverless independente, que
            só é ligada caso receba uma requisição, e ela escala
            automaticamente.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="https://github.com/danielbergholz/teach-other">
            <FaGithub size={25} color="#fff" />
            Código Fonte
          </Button>
          <Button link="https://youtube.com/playlist?list=PLbV6TI03ZWYVxGBKyYJf_Qy6d4saMbCq3">
            <FaYoutube size={25} color="#fff" />
            Tutorial
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default TeachOther;
