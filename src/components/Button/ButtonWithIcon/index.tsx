import { ReactNode } from 'react';

import styles from './ButtonWithIcon.module.css';

interface ButtonWithIconProps {
  content: string;
  reference: string;
  children?: ReactNode;
}

export default function ButtonWithIcon({ content, reference, children }: ButtonWithIconProps) {
  return (
    <a className={styles.button} href={reference}>
      <i>{children}</i>
      {content}
    </a>
  );
}
