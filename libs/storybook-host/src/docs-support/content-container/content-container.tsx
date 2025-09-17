import { ReactNode } from 'react';
import styles from './content-container.module.css';

export const ContentContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles['content-container']}>{children}</div>;
};
