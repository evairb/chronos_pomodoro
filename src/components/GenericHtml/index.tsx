import React from 'react';
import styles from './styles.module.css';

type GernericHtmlProps = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: GernericHtmlProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
