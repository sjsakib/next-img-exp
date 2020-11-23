import Head from 'next/head';
import styles from '../styles/Home.module.css';
import image from '../public/img1.jpg?&webp&resize&sizes[]=200&sizes[]=400&sizes[]=600&sizes[]=900';

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.page2}`}>
      <Head>
        <title>next-optimized-images</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.row}>
          <div className={styles.col}>
            <img
              src={image}
              srcSet={image.srcSet}
              layout="responsive"
              className={styles['my-image']}
              alt="Some unsplash image"
            />
          </div>
          <div className={styles.col}>
            <img
              src={image}
              srcSet={image.srcSet}
              layout="responsive"
              className={styles['my-image']}
              alt="Some unsplash image"
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
