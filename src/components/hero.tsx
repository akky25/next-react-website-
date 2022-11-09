import Image from 'next/image';
import cube from '@/images/cube.jpg';
import styles from '@/styles/hero.module.css';

type Props = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
};

export default function Hero({
  title,
  subtitle,
  imageOn: imageOn = false,
}: Props) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}
