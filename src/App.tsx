import './style/theme.css';
import './style/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Container>
        <Heading>Testando</Heading>
        <section>LOGO</section>
      </Container>

      <Container>
        <section>MENU</section>
      </Container>
    </>
  );
}
