import Head from 'next/head';
import { FaAndroid } from 'react-icons/fa';

import {
  Container,
  ButtonContainer,
} from '../../styles/portfolio/astromuri/styles';
import Button from '../../components/Button';

export default function AstroMuri(): JSX.Element {
  return (
    <>
      <Head>
        <title>Astro Muri | Portfolio | Daniel Berg</title>
        <meta
          name="og:title"
          property="og:title"
          content="Aplicativo Astro Muri"
        />
        <meta
          name="description"
          content="Aplicativo mobile híbrido feito com React Native, Redux e Firebase"
        />
      </Head>
      <Container>
        <h1>Astro Muri</h1>
        <img src="/assets/astro_muri.png" alt="Aplicativo Astro Muri" />
        <strong>
          - Projeto:
          <span> Desenvolvimento de aplicativo mobile híbrido</span>
        </strong>
        <strong>
          - Função:
          <span> Desenvolvedor Frontend</span>
        </strong>
        <strong>
          - Equipe:
          <span> 5 estagiários graduandos em Engenharia na UnB</span>
        </strong>
        <strong>
          - Tecnologias do Frontend:
          <span> React Native, Redux</span>
        </strong>
        <strong>
          - Tecnologias do backend:
          <span> Firebase, Google Cloud</span>
        </strong>
        <strong>
          - Contexto:
          <span>
            {' '}
            Esse projeto foi um desafio do início ao fim. Fomos contratados como
            estagiários de TI em uma empresa de marketing digital que não tinha
            experiência prévia com desenvolvimento de software, ou seja, não
            haviam desenvolvedores mais experientes para mentorar a gente,
            fizemos tudo sozinhos.
          </span>
        </strong>
        <strong>
          - Descrição técnica:
          <span>
            {' '}
            A equipe optou por desenvolver um aplicativo híbrido (para não
            precisarmos de 2 equipes) com react native (pois já tinhamos
            experiência prévia com react). Contudo, ninguém tinha conhecimento
            de backend, infraestrutura, devops etc, então eu sugeri utilizarmos
            o firebase como backend e banco de dados. E a pesar do firestore do
            firebase ser um banco noSQL, ele nos atendeu bem, por que não existe
            nenhum relacionamento entre os dados salvos. Para gerenciamento de
            estados usamos redux, e eu implementei a parte de pagamento com o
            pagseguro (que não tinha suporte para aplicativos híbridos, então
            tive que criar um webview para usar a biblioteca deles). E como
            intermediário entre o pagseguro e o aplicativo, desenvolvemos uma
            API em node (para inserir algumas chaves de API na requisição para o
            pagseguro) e fizemos o deploy no google cloud functions.
          </span>
        </strong>
        <ButtonContainer>
          <Button link="https://play.google.com/store/apps/details?id=com.AstroMuri">
            <FaAndroid size={25} color="#fff" />
            Download
          </Button>
        </ButtonContainer>
      </Container>
    </>
  );
}
