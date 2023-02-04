import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/nav.module.css';

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => setNavIsOpen((p) => !p);

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar} />
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <a onClick={closeNav}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a onClick={closeNav}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a onClick={closeNav}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
