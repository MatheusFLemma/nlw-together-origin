import Cards from './Cards';

import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container grid">
        <header className={styles.header}>
          <h2>Serviços</h2>
          <p>
            Com mais de 10 anos no mercado, o <strong>Beautysalon</strong> já conquistou clientes de
            inúmeros países com seus tratamentos exclusivos e totalmente naturais
          </p>
        </header>

        <Cards />
      </div>
    </section>
  );
}
