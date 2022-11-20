import { ReactElement } from 'react';
import Footer from './footer';
import Header from './header';

type Props = {
  children: ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
