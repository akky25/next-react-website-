import Container from './container';
import Logo from './logo';
import Social from './social';
import styles from '@/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social iconSize="50px" />
        </div>
      </Container>
    </footer>
  );
}
