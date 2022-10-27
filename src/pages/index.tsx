import type { NextPage } from 'next';
import Container from '@/components/container';
import Hero from '@/components/hero';

const Home: NextPage = () => {
  return (
    <Container>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
};

export default Home;
