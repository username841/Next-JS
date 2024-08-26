import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import next from '../public/next.jpg';
import reac from '../public/reac.jpg';
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>My Projects</h1>
        <div className={styles.projectList}>
          <div className={styles.project}>
            <Image src={next} alt="Project 1" width={300} height={150} />
            <h2>PNext Level</h2>
            <p>PNext is a next-generation project management and collaboration tool designed to streamline workflows, enhance team communication, and drive project success. Built on a modern tech stack with a focus on user experience, PNext aims to be the go-to solution for teams of all sizes to manage their projects efficiently, track progress in real-time, and collaborate seamlessly.</p>
          </div>
          <div className={styles.project}>
            <Image src={reac} alt="Project 2" width={300} height={150} />
            <h2>Reactor</h2>
            <p>Reactor is an innovative, high-performance framework designed to simplify and accelerate the development of real-time, interactive web applications. Leveraging the power of modern JavaScript libraries and a reactive programming paradigm, Reactor aims to provide developers with a flexible, scalable, and efficient toolset for building dynamic user interfaces and robust server-side applications</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
