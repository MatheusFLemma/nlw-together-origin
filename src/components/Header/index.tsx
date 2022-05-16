import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <a href="#" className={styles.logo}>
          beauty<span>salon</span>.
        </a>
        <div className={styles.menu}>|||</div>
      </nav>
    </header>
  );
}
