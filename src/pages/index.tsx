import type { NextPage } from 'next';
import Container from '@/components/container';
import Hero from '@/components/hero';
import Meta from '@/components/meta';

const Home: NextPage = () => {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
};

export default Home;
