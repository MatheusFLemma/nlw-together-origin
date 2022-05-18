
import styles from './Button.module.css';

interface ButtonProps {
  content: string;
  reference: string;
}

export default function Button({ content, reference }: ButtonProps) {
  return (
    <a className={styles.button} href={reference}>
      {content}
    </a>
  );
}
