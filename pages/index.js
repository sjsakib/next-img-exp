import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Image
              src="https://images.unsplash.com/photo-1605940169840-953b98c0ed40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3802&q=80"
              width={150}
              height={150}
              layout="responsive"
              className={styles['my-image']}
              objectFit="contain"
            />
          </div>
          <div className={styles.col}>
            <Image
              src="https://images.unsplash.com/photo-1605940169840-953b98c0ed40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3802&q=80"
              width={150}
              height={150}
              layout="responsive"
              className={styles['my-image']}
              objectFit="contain"
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
