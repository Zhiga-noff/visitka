import React from 'react';
import Link from 'next/link';
import logo from 'assets/image/logo.png';
import styles from './Header.module.scss';
import { listNavHeader } from 'libs/constants/nav';
import { List } from '../../../ui/list/List';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src={logo.src} alt="Медиагруппа Звезда" />
      </Link>
      <List className={styles.nav} noLink={false} elements={listNavHeader} />
    </header>
  );
};
