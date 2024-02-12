import React from 'react';
import styles from './NotMaterial.module.scss';

export const NotMaterial = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Нет материалов по данному запросу</h2>
    </div>
  );
};
