import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import bigImg from '../public/bigImg.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nweke Michael: My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>What you looking for? I took out the buzz words 💀</h1>
        <p className={styles.description}>
          For more information explore my projects and learn more about me💀.
        </p>
        <div>
            <Image src={bigImg} alt="Big Image" width={160} height={250} objectFit='cover'/>
        </div>
      </main>
      <Footer />
    </>
  );
}
