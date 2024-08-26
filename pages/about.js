import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>About Me</h1>
        <p>
        So, what do I do? If you guessed web development, you're spot on! 😄 I have a knack for making people fall head over heels... with their web applications, that is. Wait, you thought I was talking about matchmaking? Nah, if that were the case, I wouldn't be lonely enough to dive into this profession! 💀
        </p>
      </main>
      <Footer />
    </>
  );
}
