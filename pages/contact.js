import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <>
      <Header />
      <div className={styles.container}>
      <h1 className={styles.title}>Contact Me</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea id="message" className={styles.textarea}></textarea>
        </div>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
      </div>
      <Footer />
    </>
  );
}
