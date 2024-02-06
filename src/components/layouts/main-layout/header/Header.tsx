import React from 'react';
import Link from 'next/link';
import logo from 'assets/image/logo.png';
import styles from './Header.module.scss';
import { listNavHeader } from '../../../../libs/constants/nav';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src={logo.src} alt="Медиагруппа Звезда" />
      </Link>
      <ul className={styles.nav}>
        {listNavHeader.map((item) => (
          <li className={styles.item}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
