import type { NextPage } from 'next';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';

const Home: NextPage = () => {
  return (
    <>
      <header>HEADER</header>
      <main>
        <>
          <Header />
          <main>
            <Hero />
          </main>
          <Footer />
        </>
      </main>
      <footer>FOOTER</footer>
    </>
  );
};

export default Home;
