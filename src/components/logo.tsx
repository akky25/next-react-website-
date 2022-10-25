import Link from 'next/link';
import styles from '@/styles/logo.module.css';

export default function Logo({ boxOn = false }: { boxOn?: boolean }) {
  return (
    <Link href="/">
      <a className={boxOn ? styles.box : styles.basic}>CUBE</a>
    </Link>
  );
}
