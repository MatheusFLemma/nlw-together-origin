import Image from 'next/image';
import Button from '../Button';

import styles from './Home.module.css';

export default function Home() {
  return (
    <section className={`${styles.home} section`}>
      <div className="grid">
        <div className={styles.image}>
          <Image
            width={1920}
            height={1281}
            alt="Mulher sorrindo penteando outra mulher"
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGFpcmRyZXNzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>

        <div className={`${styles.text} container`}>
          <h1>Saúde natural para os seus cabelos</h1>
          <p>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>

          <Button content="Agendar um horário" reference="/" />
        </div>
      </div>
    </section>
  );
}
