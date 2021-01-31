import Head from 'next/head';

import Button from '../../components/Button';

import {
  Container,
  Profile,
  Faq,
  Background,
  SecondBackground,
  MainFlex,
  BigText,
  MiddleText,
  RightText,
  AlignButton,
} from '../../styles/cursos/ebook/styles';

export default function Ebook(): JSX.Element {
  return (
    <>
      <Head>
        <title>Ebook | O Guia do Dev Frontend | Daniel Berg</title>
        <meta
          name="og:title"
          property="og:title"
          content="Ebook: O Guia do Desenvolvedor Frontend"
        />
        <meta
          name="description"
          content="A base teórica que faltava para a nova geração de desenvolvedores Frontend. Esse e-book visa explicar o contexto atual do desenvolvimento web e a tecnologia por trás dos novos frameworks de Frontend"
        />
      </Head>
      <Background>
        <Container top="100px">
          <MainFlex>
            <BigText>
              <h1>O Guia do Desenvolvedor Frontend</h1>
              <h2>
                A base teórica que faltava para a próxima geração de
                Desenvolvedores Frontend
              </h2>
              <Button
                link="https://sun.eduzz.com/697109"
                backgroundColor="#D74B4B"
                backgroundHoverColor="#FC5E5E"
              >
                Comprar
              </Button>
            </BigText>
            <img
              src="/assets/capa.png"
              alt="Capa do E-book: O guia do dev frontend"
            />
          </MainFlex>
        </Container>
      </Background>

      <Container top="60px">
        <MiddleText>
          <h1>Qual o objetivo desse e-book?</h1>
          <h2>
            Nos últimos anos aconteceu uma{' '}
            <span>explosão de cursos online e bootcamps de programação</span>,
            em especial para a área de Frontend com o React. Esses cursos são
            super focados na prática, pulando as etapas teóricas para tentar
            colocar o aluno no mercado o mais rápido possível. Isso é ótimo para
            o curto prazo mas não para o longo.
          </h2>
          <h2>
            Como resultado disso, o mercado foi inundado por desenvolvedores
            juniores altamente especializados na tecnologia React. O problema
            disso é que <span>o frontend vai muito além da tecnologia</span>.
            Ele é um ecossistema web em constante crescimento e adaptação, e
            para se adaptar às novas tecnologias, é necessário ter uma base
            teórica sólida para compreender o que acontece por trás de todas
            essas ferramentas.
          </h2>
          <h2>
            O inuito desse e-book é{' '}
            <span> suprir essa deficiência teórica e arquitetural</span> dos
            novos programadores que estão entrando no mercado, explicando o
            contexto atual do desenvolvimento web e a tecnologia por trás dos
            novos frameworks de Frontend.
          </h2>
        </MiddleText>

        <MainFlex>
          <img
            src="/assets/topicos.png"
            alt="Conteúdos abordados no E-book: O guia do dev frontend"
          />
          <RightText>
            <h1>O que você vai aprender?</h1>
            <h2>
              Iremos começar fazendo uma introdução teórica em alguns conceitos,
              para todo mundo começar o e-book com a mesma base e em seguida
              será explicada uma breve história dos frameworks frontend.
            </h2>
            <h2>
              Com esse contexto em mente, partiremos para uma análise
              aprofundada das arquiteturas de frontend: SPA, SSR e SSG e das
              novas tendências que nasceram com essas arquiteturas: JAMSTACK e{' '}
              Serverless.
            </h2>
            <h2>
              Finalizaremos com a minha opinião sobre o que está por vir no
              mundo web, algumas dicas para nunca ficar desatualizado e um extra
              trazendo as novidades do mundo CSS.
            </h2>
          </RightText>
        </MainFlex>
      </Container>

      <SecondBackground>
        <Container>
          <Profile>
            <img
              src="/assets/perfil.jpeg"
              alt="Foto de perfil Daniel Bergholz"
            />
            <div>
              <h1>Quem sou eu?</h1>
              <h2>
                Meu nome é Daniel Bergholz, sou Desenvolvedor Frontend Pleno em
                uma Fintech de SP e graduando em Engenharia de Redes na UnB. Nas
                horas vagas produzo conteúdo sobre programação web no Instagram
                e YouTube.
              </h2>
            </div>
          </Profile>
        </Container>
      </SecondBackground>

      <Container>
        <Faq>
          <h1>Perguntas frequentes</h1>
          <h2>O que preciso saber para o e-book?</h2>
          <p>
            Um conhecimento básico de desenvolvimento web (HTML, CSS e
            Javascript) é necessário.
          </p>

          <h2>Como vou receber o e-book?</h2>
          <p>
            Após a compra, você irá receber um link da plataforma Eduzz com o
            seu e-book no formato PDF.
          </p>

          <h2>Posso comprar o e-book se eu programar em Angular ou Vue?</h2>
          <p>
            Sim! O intuito do e-book é explicar as tecnologias e arquiteturas
            por trás dos frameworks, independente deles serem baseados no React,
            Vue ou Angular. Contudo, a minha área de expertise é o React, então
            a maioria dos exemplos nesse livro são baseados nele.
          </p>

          <h2>Onde eu posso tirar outras dúvidas?</h2>
          <p>
            Você pode mandar suas dúvidas no nosso grupo do Discord! Basta
            clicar{' '}
            <span>
              <a
                href="https://discord.gg/PkWraebbfY"
                target="_blank"
                rel="noopener noreferrer"
              >
                aqui
              </a>
            </span>{' '}
            para entrar.
          </p>
        </Faq>

        <AlignButton>
          <Button
            link="https://sun.eduzz.com/697109"
            backgroundColor="#D74B4B"
            backgroundHoverColor="#FC5E5E"
          >
            Comprar e-book
          </Button>
        </AlignButton>
      </Container>
    </>
  );
}
