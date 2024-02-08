import React from 'react';
import { materialsMock } from '../../../libs/constants/mock/materials.mock';
import Link from 'next/link';
import styles from './Materials.module.scss';

export const Materials = () => {
  return (
    <nav className={styles.container}>
      {materialsMock.map((item, index) => {
        return (
          <Link className={styles.buttonMaterials} key={index} href={item.link}>
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
};
