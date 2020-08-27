import Link from 'next/link';
import Head from 'next/head';
import { MdArrowBack } from 'react-icons/md';
import Button from '../../components/Button';
import { Container } from '../../styles/portfolio/rocketseat/styles';

export default function Rocketseat(): JSX.Element {
  return (
    <>
      <Head>
        <title>Rocketseat | Portfolio | Daniel Berg</title>
        <meta
          name="og:title"
          property="og:title"
          content="Certificado Rocketseat"
        />
        <meta
          name="description"
          content="Certificado de conclusão do Bootcamp GoStack da Rocketseat (turma 11), incluindo os assuntos: Typescript, React, React Native e Node"
        />
      </Head>
      <Container>
        <img
          src="/assets/certificado_rocketseat.jpg"
          alt="Certificado rocketseat Daniel Bergholz"
        />
        <Link href="/portfolio">
          <a>
            <Button>
              <MdArrowBack size={25} color="#fff" />
              Voltar
            </Button>
          </a>
        </Link>
      </Container>
    </>
  );
}
