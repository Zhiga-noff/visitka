import React from 'react';
import logo from 'assets/image/logo.png';
import styles from './Footer.module.scss';
import { listContacts } from 'libs/constants/mock/contacts.mock';
import Link from 'next/link';
import { listNavFooterBottom, listNavFooterTop } from 'libs/constants/nav';
import { List } from '../../../ui/list/List';
import { listSocial } from '../../../../libs/constants/social';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logo}>
        <img src={logo.src} alt="Медиагруппа Звезда" />
      </Link>
      <div className={styles.row}>
        <div className={styles.leftBlock}>
          <h3>Контакты</h3>
          <List className={styles.contacts} noLink={true} elements={listContacts} />
        </div>
        <nav className={styles.rightBlock}>
          <List className={styles.navList} elements={listNavFooterTop} noLink={false} />
          <List
            className={styles.navList}
            elements={listNavFooterBottom}
            noLink={false}
          />
        </nav>
      </div>
      <div className={styles.description}>
        <ul className={styles.icons}>
          {listSocial.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank">
                <img src={item.img} alt={item.title} />
              </a>
            </li>
          ))}
        </ul>
        <p>© ОАО «ТРК ВС РФ «ЗВЕЗДА»</p>
      </div>
    </footer>
  );
};
