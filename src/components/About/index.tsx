import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className="grid">
        <div className={styles.image}>
          <Image
            width={1920}
            height={1281}
            alt={'Três mulheres sorrindo'}
            src="https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          />
        </div>
        <div className={`${styles.title} container`}>
          <h2>Sobre nós</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quos reprehenderit
            repudiandae veniam ipsam vel iure ducimus animi neque odio? Pariatur odio corporis nulla
            autem consequuntur asperiores illum commodi delectus!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut, praesentium
            obcaecati doloremque quis quod? Numquam nesciunt dicta eligendi. Nam repudiandae
            voluptates quibusdam ipsa labore neque laborum totam veritatis pariatur.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aut, praesentium
            obcaecati doloremque quis quod? Numquam nesciunt dicta eligendi. Nam repudiandae
            voluptates quibusdam ipsa labore neque laborum totam veritatis pariatur.
          </p>
        </div>
      </div>
    </section>
  );
}
