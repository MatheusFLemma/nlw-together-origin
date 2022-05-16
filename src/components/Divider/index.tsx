import styles from './Divider.module.css';

interface DividerProps {
  type: number;
}

export default function Divider({ type }: DividerProps) {
  return <div className={styles[`divider-${type}`]} />;
}
