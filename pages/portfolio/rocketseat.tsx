import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import Button from '../../components/Button';
import { Container } from '../../styles/portfolio/rocketseat/styles';

export default function Rocketseat(): JSX.Element {
  return (
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
  );
}
